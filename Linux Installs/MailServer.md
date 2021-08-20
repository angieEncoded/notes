# Notes on setting up a mail server

- SE Linux seems to be the major culprit

```sealert -l a58f362f-7c41-4994-9495-c8628523cf53```
- The below message is what I got in /var/log/messages when setting up a new user.

> SELinux is preventing /usr/libexec/dovecot/lmtp from write access on the directory bubble.
> #012#012***** Plugin catchall (100. confidence) suggests   **************************#012#012
> If you believe that lmtp should be allowed write access on the bubble directory by default.
> Then you should report this as a bug.
> You can generate a local policy module to allow this access.
> allow this access for now by executing:

```ausearch -c 'lmtp' --raw | audit2allow -M my-lmtp```
```semodule -X 300 -i my-lmtp.pp```

 ```ausearch -c 'imap' --raw | audit2allow -M my-imap```
 ```semodule -X 300 -i my-imap.pp```

## Configure Usermin for IMAP

- Login to Webmin as the master administrator, and go to the Usermin Configuration module.
- Click on the Usermin Module Configuration icon.
- Click on Read Mail. Go to User Preferences
- Change the 'Mailboxes directory under home directory' field to Maildir, and click Save.

## Set up the folders correctly for most possible outcomes

~~~
namespace inbox {
  type = private
  separator = .
  inbox = yes
  mailbox Drafts {
    special_use = \Drafts
    auto = subscribe
  }

  mailbox Junk {
    special_use = \Junk
    auto = create
  }

  mailbox spam {
    special_use = \Junk
    auto = no
  }

  mailbox Spam {
    special_use = \Junk
    auto = no
  }

  mailbox Trash {
    special_use = \Trash
    auto = subscribe
  }

  mailbox TRASH {
    special_use = \Trash
    auto = no
  }

  mailbox Sent {
    special_use = \Sent
    auto = subscribe
  }

  mailbox "Sent Mail" {
    special_use = \Sent
    auto = no
  }

  mailbox "Sent Messages" {
    special_use = \Sent
    auto = no
  }

  mailbox Archive {
    special_use = \Archive
    auto = create
  }

  mailbox "Archives" {
    special_use = \Archive
    auto = no
  }
}
~~~


~~~
namespace inbox {
  type = private
  separator = .
  prefix = INBOX.
  inbox = yes
  mailbox Drafts {
    special_use = \Drafts
    auto = subscribe
  }

  mailbox Junk {
    special_use = \Junk
    auto = create
  }

  mailbox spam {
    special_use = \Junk
    auto = no
  }

  mailbox Spam {
    special_use = \Junk
    auto = no
  }

  mailbox Trash {
    special_use = \Trash
    auto = subscribe
  }

  mailbox Sent {
    special_use = \Sent
    auto = subscribe
  }

  mailbox "Sent Mail" {
    special_use = \Sent
    auto = no
  }

  mailbox "Sent Messages" {
    special_use = \Sent
    auto = no
  }

  mailbox Archive {
    special_use = \Archive
    auto = create
  }

  mailbox "Archives" {
    special_use = \Archive
    auto = no
  }
}
~~~

# Install the md2mb script on Alma
```wget http://batleth.sapienti-sat.org/projects/mb2md/mb2md-3.20.pl.gz````
```gunzip mb2md-3.20.pl.gz```
```mv mb2md-3.20.pl /usr/bin/mb2md```
```chmod 755 /usr/bin/mb2md```

# Run the tool on the necessary mailboxes
- Frst su over to the actual user
``` su - username```
- CD into their home directoru
```cd ~```
- Run the first part of the tool - this will convert the main file at /var/spool/mail
```mb2md -m ```
- Run the second part of the tool which will convert all the other folders correctly. This is the 'mail' folder that is already in the user's folder
```mb2md -s mail -R```
- Exit the user's shell
- Perform some cleanup on old directories
```mv /var/spool/mail/daniel /var/spool/mail/daniel.preMaildir``` 
```mv ~daniel/mail ~daniel/mail.preMaildir```ls


# Pre-requisites for the script to run 
- Full install of perl - I had to run dnf install perl because the version it shipped with wasn't installed as expected.
```dnf install perl```
- Run this to be able to easily install Perl modules
```cpan App::cpanminus```
- Install the module that mb2md required
```cpanm Date::Parse ```

## Configure the certificate for Webmin and Usermin

- Copy all the certs to the server as well as the private key
- Create a new .pem file with 
`cat cat private.key your_common_name.crt > new_miniserv.pem`
- Copy this file and all the intermediate certificates to /etc/webmin and /etc/usermin (they do not share!)
  - Note = You can also use a text editor to create the PEM file. Just paste the private key at the top immediately followed by your SSL certificate
- This is what it looks like

> -----BEGIN RSA PRIVATE KEY-----
> (Contents of private key)
> -----END RSA PRIVATE KEY-----
> -----BEGIN CERTIFICATE-----
> (Contents of SSL certificate: your_domain_name.crt)
> -----END CERTIFICATE-----

- Make a backup copy of your current miniserv.pem file, then replace miniserv.pem with your new_miniserv.pem file.
- Add an "extracas" line to your miniserv.conf file which references your intermediate certificate file by its full path, such as:
  - extracas=/etc/webmin/DigiCertCA.crt
    - If you have more than one intermediate certificate file, you can list them on the same line, separated by spaces.
- Restart webmin and visit its URL in a web browser. 
`systemctl restart webmin`
`systemctl restart usermin`




- Before and after commands to create a mail spool file - but I think this wasn't needed. I believe that the problem was the SE linux, the Maildir Dovecot setup doesn't seem to use the spool file
at all.
```[ $USERADMIN_ACTION = "CREATE_USER" ] && (touch /var/spool/mail/$USERADMIN_USER ; chown $USERADMIN_UID:mail /var/spool/mail/$USERADMIN_USER ; chmod 0660 /var/spool/mail/$USERADMIN_USER )```

