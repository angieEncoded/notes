# Alma 8 Setup

## Regenerate the ssh keys if you cloned this from the vm image
- delete all relevant keys ```sudo rm /etc/ssh/ssh_host_*```
- Restart the daemon to regenerate ```sudo systemctl restart sshd```


## Install NodeJS
- Update server
    ```dnf update -y```
- List available NodeJS streams
    - Stream corresponds to the major version of Node.js. To see a list of available streams, use following command:
    ``` dnf module list nodejs```
```
Output:
AlmaLinux 8.3 – AppStream
Name Stream Profiles Summary
nodejs 10 [d] common [d], development, minimal, s2i Javascript runtime
nodejs 12 common [d], development, minimal, s2i Javascript runtime
nodejs 14 [e] common [d] [i], development, minimal, s2i Javascript runtime
Hint: [d]efault, [e]nabled, [x]disabled, [i]nstalled
```

- Install NodeJS on AlmaLinux
    - This will install version 14
    ```dnf module install nodejs:14```
- Verify the installation
    ``` node -v && npm -v```

```
Output:
v14.15.0
6.14.8
```

## Install git

- check if git is installed
    - git --version
- Install it from repos
   - usually ```yum\dnf\apt-get\apt install git```


## Set up git folders for the app on the server
- Install git with ```sudo apt-get install git```
- Make sure that the default branch name going forward is main 
```git config --global init.defaultBranch main```
- Note that this probably wont work anyway. You need to set up the HEAD references on the server
```git symbolic-ref HEAD refs/heads/main```
- Now you can create the folders and files needed
- change into the folder you will set up the app in (I use Documents of the user)
- Set up the following folders:
    - ```mkdir appname repos```
- cd into the appname folder and run ```git init``
- cd back to the parent folder and then cd into the repos folder
- make another directory called appname.git and then cd into that
- initialize it as a bare repo with ```git init --bare```

##  Set up the post-receive hook and make it executable
- cd into the hooks directory and run ```nano post-receive``
- Type in the following contents
```bash
#!/bin/sh
# 
GIT_WORK_TREE=/path/to/app/folder git checkout -f
```
- run ```chmod +x post-receive``` to make the file executable

# Connect in the local development environment
- check the existing remote connections with ```git remote -v```
- Remove old ones as necessary ```git remote rm destination```
- set up the new one with ```git remote add live ssh://username@ip.address:/path/to/folder/appname.git```
- Send the code up with ```git push live main```
    - note that git still defaults to 'master' as the default branch. 
    - Change with ``````git config --global init.defaultBranch main```

- Allow us to push a commit with no changes
```git commit --allow-empty -m 'push to execute post-receive'```

- Remove the history

```rm -rf .git```

- recreate 

```git init```
```git add .```
```git commit -m "Initial commit"```

- Add the repo again

```git remote add origin git@github.com:account/repo.git```

- Push the content overwriting what's there

```git push -u --force origin master```

## Fix the issue of remote defaulting to master (will change branch name in push)
- git push -u origin main


# Set up the service file
 
- Create the service file
```sudo nano /etc/systemd/system/node_online.service```

- Add the following contents into it (Note that environment variables are now in dotenv)

``` 
[Unit]
Description=Node Online Service
After=network.target

[Service]
Type=simple
User=userAccount
WorkingDirectory=path/to/app/folder
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=appName
ExecStart=/usr/bin/node Path/to/app/app.js
Restart=on-failure

[Install]
WantedBy=multi-user.target
``` 

- Reload systemd to see the changes
```sudo systemctl daemon-reload```

- enable the service so systemd handles it
```sudo systemctl enable node_online```

- Control the service with
```systemctl start node_online```
```systemctl status node_online```
```systemctl stop node_online```



Check the logs for why services crashed
-----------------------------------------------------------
journalctl -u node_online.service

- for current boot
journalctl -u service-name.service -b
The centos file is at 
/etc/systemd/system/node_online.service