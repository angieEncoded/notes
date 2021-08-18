# Notes on setting up a mail server
- SE Linux seems to be the major culprit

```sealert -l a58f362f-7c41-4994-9495-c8628523cf53```
- The below message is what I got in /var/log/messages when setting up a new user.

~~~~
SELinux is preventing /usr/libexec/dovecot/lmtp from write access on the directory bubble.
#012#012***** Plugin catchall (100. confidence) suggests   **************************#012#012
If you believe that lmtp should be allowed write access on the bubble directory by default.
Then you should report this as a bug.
You can generate a local policy module to allow this access.
allow this access for now by executing:
~~~~


```ausearch -c 'lmtp' --raw | audit2allow -M my-lmtp```

```semodule -X 300 -i my-lmtp.pp```

- Before and after commands to create a mail spool file - but I think this wasn't needed. I believe that the problem was the SE linux, the Maildir Dovecot setup doesn't seem to use the spool file
at all.
```[ $USERADMIN_ACTION = "CREATE_USER" ] && (touch /var/spool/mail/$USERADMIN_USER ; chown $USERADMIN_UID:mail /var/spool/mail/$USERADMIN_USER ; chmod 0660 /var/spool/mail/$USERADMIN_USER )```