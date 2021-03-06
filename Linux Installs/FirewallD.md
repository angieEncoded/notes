


Set up the firewall on centos to allow connections internal
-----------------------------------------------------------
firewall-cmd --get-active-zones
firewall-cmd --zone=public --add-port=2888/tcp --permanent
firewall-cmd --reload

Remove from the firewall
firewall-cmd --zone=public --remove-port=8080/tcp
firewall-cmd --runtime-to-permanent
firewall-cmd --reload

firewall-cmd --list-ports


Install firewalld
//=====================================================================

yum install firewalld
systemctl start firewalld
systemctl enable firewalld
systemctl status firewalld

-- This will solve a problem with dbus error
# systemctl restart dbus
# systemctl restart firewalld

Configure firewalld
sudo firewall-cmd --zone=public --change-interface=eth0


See all rules
firewall-cmd --permanent --list-all

Set up rich rules

firewall-cmd --permanent --add-rich-rule='rule family="ipv4" source address="x.x.x.x" port protocol="tcp" port="3306" accept'
firewall-cmd --permanent --add-rich-rule='rule family="ipv4" source address="x.x.x.x" port protocol="tcp" port="3306" accept'


Set up port mangling

firewall-cmd --zone=public --add-masquerade --permanent

firewall-cmd --zone=public --add-forward-port=port=80:proto=tcp:toport=35987 --permanent
firewall-cmd --zone=public --add-forward-port=port=443:proto=tcp:toport=35986 --permanent

firewall-cmd --zone=public --remove-forward-port=port=443:proto=tcp:toport=35986 --permanent

firewall-cmd --permanent --add-port=443/tcp 
firewall-cmd --permanent --add-service=ftp
//=====================================================================

install firewalld GUI
sudo yum install firewall-config






Systemctl and Firewalld
Enable firewalld
This makes sure that firewalld will be started automatically with the server.

systemctl enable firewalld

Start firewalld
After the firewalld service is enabled, you’ll need to start it manually the first time. This is how you would manually start firewalld if it were not already running.

systemctl start firewalld

Stop firewalld
When troubleshooting rules and connection issues, you may need to stop the fireawlld service momentarily. You can stop the service with the following command.

systemctl stop firewalld

Restart firewalld
If for some reason you need to restart the service you can do that with the systemctl restart command.

systemctl restart firewalld

Firewalld status
Checking the status of the service gives us the most meaningful and informative output. Here you can see whether the service is enabled, running, failed, or anything else.

systemctl status firewalld

In this example output, you can see that the service is enabled, active and running on the server. If it was not running, or in a failed state this would be displayed.

[root@centos-7 ~]# systemctl status firewalld
? firewalld.service - firewalld - dynamic firewall daemon
Loaded: loaded (/usr/lib/systemd/system/firewalld.service; enabled; vendor preset: enabled)
Active: active (running) since Tue 2019-01-22 22:50:32 EST; 1h 0min ago
Main PID: 808 (firewalld)
CGroup: /system.slice/firewalld.service
+-808 /usr/bin/python -Es /usr/sbin/firewalld --nofork --nopid

 

Managing Firewalld and Configuring Rules
Now that we have firewalld running we can get down to set the configuration. We can open ports, allow services, whitelist IPs for access and more. In all of these examples, we include the –permanent flag. This is important to make sure a rule is saved even after you restart firewalld, or reboot the server. Once you’re done adding new rules, you need to reload the firewall to make the new rules active.

Add a Port for TCP or UDP
You do have to specify TCP or UDP and to open a port for both you will need to add rules for each protocol.

firewall-cmd --permanent --add-port=22/TCP

firewall-cmd --permanent --add-port=53/UDP

Remove a Port for TCP or UDP
Using a slight variation on the above structure, you can remove a currently open port, effectively closing off that port.

firewall-cmd --permanent --remove-port=444/tcp

Add a Service
These services assume the default ports configured within the /etc/services configuration file, if you wish to use a service on a non-standard port you will have to open the specific port, as in the example above.

firewall-cmd --permanent --add-service=ssh

firewall-cmd --permanent --add-service=http

Remove a Service
As above, you specify the remove-service option, and you can close off the port that is defined for that service.

firewall-cmd --permanent --remove-service=mysql

Whitelist an IP Address
To whitelist or allow access from an IP or range of IPs, you can tell the firewall to add a trusted source.

firewall-cmd --permanent --add-source=192.168.1.100

You can also allow a range of IPs using what is called CIDR notation. CIDR is outside the scope of this article but is a shorthand that can be used for noting ranges of IP addresses.

firewall-cmd --permanent --add-source=192.168.1.0/24

Remove a Whitelisted IP Address
To remove a whitelisted IP or IP range, you can use the –remove-source option.

firewall-cmd --permanent --remove-source=192.168.1.100

Block an IP Address
As the firewall-cmd tool is mostly used for opening or allowing access, rich rules are needed to block an IP. Rich rules are similar in form to the way iptables rules are written.

firewall-cmd --permanent --add-rich-rule="rule family='ipv4' source address='192.168.1.100' reject"

You can again use CIDR notation also block a range of IP addresses.

firewall-cmd --permanent --add-rich-rule="rule family='ipv4' source address='192.168.1.0/24' reject"

Whitelist an IP Address for a Specific Port (More Rich Rules)
We have to reach back to iptables and create another rich rule, however, we are using the accept statement at the end to allow the IP access, rather than reject its access.

firewall-cmd --permanent --add-rich-rule='rule family="ipv4" source address="192.168.1.100" port protocol="tcp" port="3306" accept'

Removing a Rich Rule
To remove a rich rule, use the option —remove-rich-rule, but you have to fully specify the rule being removed, so it is best to copy and paste the full rule, rather than try to type it all out from memory.

firewall-cmd --permanent --remove-rich-rule='rule family="ipv4" source address="192.168.1.100" port protocol="tcp" port="3306" accept'

Saving Firewall Rules
After you have completed all the additions and subtractions of rules you need to reload the firewall rules to make them active. To do this, you again use the firewall-cmd tool but using the option –reload.

firewall-cmd --reload

Viewing Firewall Rules
After reloading the rules, you can confirm if the new rules are in place correctly with the following.

firewall-cmd --list-all

Here is an example output from the –list-all option, you can see that this server has a number of ports, and services open in the firewall along with a rich rule (that forwards one port to another).

[root@centos-7 ~]# firewall-cmd --list-all
public (default, active)
interfaces: enp1s0
sources: 192.168.1.0/24
services: dhcpv6-client dns http https mysql nfs samba smtp ssh
ports: 443/tcp 80/tcp 5900-5902/tcp 83/tcp 444/tcp 3260/tcp
masquerade: no
forward-ports:
icmp-blocks:
rich rules:
rule family="ipv4" source address="192.168.1.0/24" forward-port port="5423" protocol="tcp" to-port="80"