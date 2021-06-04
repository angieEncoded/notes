# Chapter 1 - Lab Setup

- Installer program
    - Anaconda
- Log file locations and purpose

| Location                                  | Purpose                              | 
|-------------------------------------------|--------------------------------------|
| /root/anaconda.ks.cfg                     | Record configuration details entered |
| /root/install.log                         | Packages being installed             |
| /root/install.log.syslog                  | General messages                     |
| /var/log/anaconda/anaconda.log            | Info, debug, general msgs            |
| /var/log/anaconda/ifcfg.log               | eth info                             |
| /var/log/anaconda/journal.log             | messages from services\components    |
| /var/log/anaconda/packaging.log           | yum\rpm messages                     |
| /var/log/anaconda/program.log             | messages from external programs      |
| /var/log/anaconda/storage.log             | Storage modules                      |
| /var/log/anaconda/syslog                  | kernel messages                      |
| /var/log/anaconda/X.log                   | X window system                      |

 /tmp/yum.log                              yum packages
- Virtual console screens
    - Six text based consoles are provided during installation
    - Console names and purpose

| Name      | Shortcut        | Purpose               | Notes                                                          |
|-----------|-----------------|-----------------------|----------------------------------------------------------------|
| Console 1 | CTRL + ALT + F1 | Main screen           | Once language is selected, will switch to 6th console.         |
| Console 2 | CTRL + ALT + F2 | Shell                 | Run commands as the root user                                  |
| Console 3 | CTRL + ALT + F3 | Installation messages | Stores these in /tmp/anaconda/log                              |
| Console 4 | CTRL + ALT + F4 | Storage messages      | Stores these in /tmp/storage.log                               |
| Console 5 | CTRL + ALT + F5 | Program messages      | Stores these in /tmp/program.log                               |
| Console 6 | CTRL + ALT + F6 | Default GUI Config    | Default GUI configuration screen                               |

- Installation sources
    - Anaconda defaults to local media that was used to start the install
    - Can change to a network installation
        - http, https, ftp, nfs protocols available
        - hostname or ip of a remote server
        - locations of additional repos
Selecting software to be installed
    - Several different environments to choose from

| Environment         | Desc                                           | 
|---------------------|------------------------------------------------|
| Server with GUI     | Infrastructure server with Graphics support    |
| Server              | Headless server                                |
| Minimal Install     | Minimum number of packages for basic use       |
| Workstation         | Desktop and laptop users                       |
| Custom OS           | Basic building blocks for custom installations |
| Virtualization Host | For hosting virtual machines                   |

- Configuring the installation destination
    - By default the main hdd is picked and called sda
    - Anaconda will install the GRUB2 bootloader
    - Partition scheme can be adjusted here
- Configuring network and hostname
    - First network device is known as enp0s3
    - hostname to change it from command line
- Default graphical desktop is GNOME
    - GNU Network Object Model Environment
- Basic commands to verify a server install

| command      | Purpose                                  |
|--------------|------------------------------------------|
| whoami       | User that is logged in                   | 
| hostname     | Server's name                            |
| pwd          | Where you are located in the system      |
| logout       | Exit the session                         |
| exit         | Exit the session                         |
| CRTL+D       | Exit the session                         |







    