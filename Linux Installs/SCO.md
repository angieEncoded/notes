# Configuring IP address on Linux
- Set the IP
```sudo ifconfig eth0 192.168.0.1 netmask 255.255.255.0```
```ifconfig```
- Change Gateway
```sudo route add default gw 192.168.0.253 eth0```
```route -n```


## Setting up a SCO machine for testing
## =====================================================================
- del is the 'break' key in SCO
- Change the ip in SCO
- ```netconfig```
- Go to the hardware device and edit the tcpip
- Relink the kernel when prompted and boot by default

## Change the gateway:
- ```vi /etc/default/tcp```
- Use the arrow keys to navigate
- press x to delete a character
- i to go into insert mode

## Add the route into the /etc/tcp file
- ```vi /etc/tcp```
- ```/route``` enter to search
- add the below just after the 224.0.0.0 entry
- ```/etc/route add 0.0.0.0 [default gateway] 1 > /dev/null 2>&1```

## Edit the crontab and take out all the backup stuff
- ```crontab -e```
- dd to delete lines