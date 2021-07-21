# ESXi Notes

## Unlock VM if it gets hung up after a converter copy

- Show lock files on the flat file
- /vmfs/volumes/LUN/Virtual Machine Folder/file-flat.vmdk
- Run: ```vmkfstools -D ./sco5_6_rocky-flat.vmdk```




## Copy vms from one machine to another
- Turn on ssh in both hosts and open the port in the firewall in ESXi
- test connection to the remote server
    - nc -z <destination esxi host ip> 22
- The data stores are located on /vmfs/volumes/volumeNameOrUUID
    - Note that the name seems to be a link to the UUID and if you cd into it, the working path will list the UUID
- change into the directory of the datastore you want and list the contents
- Then type in the following command, substituting the folder you want to copy over
    ``` scp -r ./sco5_6 root@destinationIP:/vmfs/volumes/destinationDatastore ```
- This will copy all the files in the folder to the target datastore including the snapshot files
- if you get this message “rekeyed outbound cipher” “rekeyed inbound cipher”
    - add -l switch to the command
        - l limitInKilobytes
    - note that it should copy fine despite the messages

## Stop the ungodly slow copy option (in datastore browser)
```/etc/init.d/hostd restart```
- NOTE: this will kill the web client as well - give it some time to restart

## Adjust timeouts in vSphere web client
- Host -> Manage -> System -> Advanced Settings -> UserVars.HostClientSessiontimeout

## Get server details
```
smbiosDump |grep -A 5 'System Info'
smbiosDump |grep -A 4 'Physical Memory Array'
smbiosDump |grep -A 12 'Memory Device'
smbiosDump |grep -A 20 'Processor Info'
smbiosDump |grep -A 11 'Cache Info'
smbiosDump |grep -A 3 'Port Connector'
```
## Convert a running windows host prerequisites
- Disable Firewall
- Disable Antivirus
- Turn off UAC
- Turn off remote UAC

## Configure the target machine
- Click Start, click Run, type regedit, and then press ENTER.
- Locate and then click the following registry subkey:
``` HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System ```
- If the LocalAccountTokenFilterPolicy registry entry doesn't exist, follow these steps:
    - On the Edit menu, point to New, and then select DWORD Value.
    - Type LocalAccountTokenFilterPolicy, and then press ENTER.
    - Right-click LocalAccountTokenFilterPolicy, and then select Modify.
    - In the Value data box, type 1, and then select OK.
- Manually Install Agent
- Disable 'Use Sharing Wizard' on host in file options
- Enable Local ADMINISTRATOR Acct, set a password (on host)
- Run the conversion w/ ADMINISTRATOR acct

## some other useful commands
- nmap command linux
```nmap -n -sP 10.x.x.x/24 > results.txt```

- List encrypted files
```cipher /u /h > %UserProfile%\Desktop\Encrypted-Files.txt```

- Get realtime data
```esxtop```
- Press n for network data

- Tiem server has been online
```uptime```

- Get the serial number from a esxi server
```esxcli hardware platform get```

## Logs
- Records activities related to virtual machines and ESXi.
```/var/log/vmkernel.log```

- Records activities related to virtual machines.
```/var/log/vmkwarning.log```

- Used to determine uptime and availability statistics for ESXi (comma separated).
```/var/log/vmksummary.log```

- Contains information about the agent that manages and configures the ESXi host and its virtual machines.
``` /var/log/hostd.log```

- Contains information about the agent that communicates with vCenter Server (if the host is managed by vCenter Server).
```/var/log/vpxa.log```

- Contains a record of all commands typed into the ESXi Shell as well as shell events (for example, when the shell was enabled).
```/var/log/shell.log```

- Contains all events related to authentication for the local system.
```/var/log/auth.log```

- Contains all general log messages and can be used for troubleshooting. This information was formerly located in the messages log file.
```/var/log/syslog.log```

## Network troubleshooting

- Get the list of all the vms
```esxcli network vm list```

- Get the port information
```esxcli network vm port list -w WORLD_ID_NUMBER_FROM_ABOVE_COMMAND```

- Get the port statistics
```esxcli network port stats get -p 12345678```

- Get detailed statistics
```esxcli network port filter stats get -p 12345678```

- Complete stats for a nic card
```esxcli network nic stats get -n vmnic0```

- Per VLAN breakdown on a nic
```esxcli network nic vlan stats get -n vmnic0```