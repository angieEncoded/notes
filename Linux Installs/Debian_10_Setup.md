# Debian

## Debian 11 Setup 
- Add the user to the sudoers group (not wheel)
    - `usermod -aG sudo stackdev`
- Take the CD ROM entry out of the sources.list
    - Stop it from looking at that for packages
    - `nano /etc/apt/sources.list`
    - comment out the cd rom line
- Install firewalld
    - `apt install firewalld`
    - Remember to refresh the modules in webmin

## Basic Debian 10 Setup

- Install open-vm-tools
    - ```apt-get install open-vm-tools```
- Install webmin
    - Install dependencies
        - ```apt-get install libauthen-pam-perl libio-pty-perl```
    - download the package
    - ```dpkg -i ./packagename```
- Set up firewall
    - ```apt-get install ufw```
- Turn off IPv6
    - ```nano /etc/default/ufw```
- Set up default policies
    - ```ufw default deny incoming```
    - ```ufw default allow outgoing```
- Allow ssh and webmin
    - ```ufw allow ssh```
    - ```ufw allow 10000```
- Turn on the daemon
    - ```ufw enable```
- Allow only from specific ips
    - ```ufw allow from ip.address to any port xx```
- Add new users
    - ```adduser username```
- Add user to the sudo group
    - ```sudo usermod -a -G sudo username```


