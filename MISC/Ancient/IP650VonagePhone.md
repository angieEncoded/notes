//Setting up the IP650

// Step 1 - get set up on Vonage
//-----------------------------------------------------------------------------------
Log into your Vonage account
Select the user and then select the extension
Click on Devices and add the new device
Fill out the device name, the MAC address and selection the Polycom provisioning model
Click save to register the new phone and then click on the new phone again so we can see the information


// Step 2: Set up the configuration file
//-----------------------------------------------------------------------------------
Get the sample config file from the support system
There are five lines that need to be edited with information specific to the phone:

// Update this with the Phone Configuration URL from the website - hit Refresh if the url has expired
device.prov.serverName="prov.vonage.com/gfdgfdgdsg/"

// Change this line to reflect the phone's MAC address
device.prov.user="PHONEMACADDRESSHERE" 

// Change these lines to the new phone's SIP Authorization ID (from the website)
reg.1.address="VHSIPAUTHID" 
reg.1.auth.userId="VHSIPAUTHID"

// Change this line to the user's extension
reg.1.label="122"


// Step 3: Log into the phone and upload the config 
//-----------------------------------------------------------------------------------
Set up the phone and connect it to the network. The phone should be factory defaulted
Find the ip by pressing Menu->Status->Network->TCP\IP Parameters
Log into the web interface with https://ip.address
The password for the Admin account before configuration is 456
Click on Utilities->Import & Export configuration
Import the polycom.cfg file you edited
The phone will reboot - you may have to reboot a couple times before it will pull the rest of the config
If necessary refresh the provisioning URL again (Through the website there is a button on the screen that shows the data
After the configuration the phone password will be the account number


// Sample configuration file save contents as a .cfg
//======================================================================
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!-- Application SIP Mink 4.0.11.0583 21-Jun-16 16:56 -->
<!-- Created 28-12-2018 15:56 -->
<PHONE_CONFIG>
	<!-- Note: The following parameters have been excluded from the export:
		device.auth.localAdminPassword=""
		device.prov.password=""
		reg.1.auth.password=""
	-->
	<CONFIG_FILES
		attendant.behaviors.display.spontaneousCallAppearances.normal="0"
		attendant.uri="blf"
		call.internationalDialing.enabled="0"
		call.shared.exposeAutoHolds="1"
		device.auth.localAdminPassword.set="1"
		device.dhcp.bootSrvOpt.set="1"
		device.dhcp.bootSrvUseOpt="Static"
		device.dhcp.bootSrvUseOpt.set="1"
		device.dns.altSrvAddress="4.2.2.1"
		device.dns.serverAddress="8.8.8.8"
		device.prov.password.set="1"
		device.prov.serverName="prov.vonage.com/fdgdsfgfdgsgfds/"
		device.prov.serverName.set="1"
		device.prov.serverType="HTTPS"
		device.prov.serverType.set="1"
		device.prov.upgradeServer.set="1"
		device.prov.user="PHONEMACADDRESSHERE" 
		device.prov.user.set="1"
		device.set="1"
		device.sntp.serverName="time.vonage.net"
		device.sntp.serverName.set="1"
		device.syslog.facility="16"
		device.syslog.facility.set="1"
		device.syslog.prependMac="1"
		device.syslog.prependMac.set="1"
		device.syslog.renderLevel="0"
		device.syslog.renderLevel.set="1"
		device.syslog.serverName.set="1"
		device.syslog.transport="UDP"
		device.syslog.transport.set="1"
		exchange.server.url="0.0.0.0"
		feature.exchangeCalendar.enabled="1"
		feature.urlDialing.enabled="0"
		httpd.cfg.port="2006"
		log.level.change.cfg="6"
		log.level.change.dhcpc="6"
		log.level.change.dns="6"
		log.level.change.sip="6"
		log.level.change.tls="6"
		prov.polling.enabled="1"
		prov.polling.mode="random"
		prov.polling.timeRandomEnd="04:00"
		sec.TLS.SIP.strictCertCommonNameValidation="0"
		tcpIpApp.sntp.address="time.vocalocity.com"
		tcpIpApp.sntp.AQuery="1"
		tcpIpApp.sntp.gmtOffset="-18000"
		tone.dtmf.rfc2833Payload="101"
		video.autoStartVideoTx="0"
		video.codecPref.H261="0"
		video.codecPref.H263="0"
		video.codecPref.H2631998="0"
		video.codecPref.H264="0"
		video.enable="0"
		voice.codecPref.G711_A="0"
		voice.codecPref.G711_Mu="1"
		voice.codecPref.G722="0"
		voice.codecPref.G7221.32kbps="0"
		voice.codecPref.G7221_C.48kbps="0"
		voice.codecPref.G729_AB="0"
		voice.codecPref.Siren14.48kbps="0"
		voice.codecPref.Siren22.64kbps="0"
		voice.rxQos.avgJitter="60"
		voice.rxQos.maxJitter="200"
		voice.rxQos.ptt.avgJitter="155"
		voice.rxQos.ptt.maxJitter="500"
		voice.rxQos.wireless.avgJitter="90"
		voice.rxQos.wireless.maxJitter="500"
		voice.volume.persist.handset="1"
		voice.volume.persist.headset="1"
		voIpProt.SIP.authOptimizedInFailover="1"
		voIpProt.SIP.specialEvent.checkSync.alwaysReboot="1"
		dialplan.1.digitmap="911|*0[68|*1[02][0-35]|*104x.T|*69|*7[23789]|*87|*9[0-19]|*[0-9]x.T|**[1-9]x.T|[0-9].**x.T|1[2-9]xx[2-9]xxxxxx|[2-9]xxxxxxxxx|[1-9]x.T|011[1-9]xxx.T|[2-9]xxxxxx.T"
		dialplan.2.digitmap="911|*0[68|*1[02][0-35]|*104x.T|*69|*7[23789]|*87|*9[0-19]|*[0-9]x.T|**[1-9]x.T|[0-9].**x.T|1[2-9]xx[2-9]xxxxxx|[2-9]xxxxxxxxx|[1-9]x.T|011[1-9]xxx.T|[2-9]xxxxxx.T"
		dialplan.1.impossibleMatchHandling="2"
		dialplan.2.impossibleMatchHandling="2"
		dialplan.3.impossibleMatchHandling="2"
		dialplan.4.impossibleMatchHandling="2"
		dialplan.5.impossibleMatchHandling="2"
		dialplan.6.impossibleMatchHandling="2"
		divert.noanswer.1.timeout="60"
		divert.noanswer.2.timeout="60"
		divert.noanswer.3.timeout="60"
		divert.noanswer.4.timeout="60"
		divert.noanswer.5.timeout="60"
		divert.noanswer.6.timeout="60"
		msg.mwi.1.callBack="*100"
		msg.mwi.1.callBackMode="contact"
		msg.mwi.2.callBackMode="disabled"
		msg.mwi.3.callBackMode="disabled"
		msg.mwi.4.callBackMode="disabled"
		msg.mwi.5.callBackMode="disabled"
		msg.mwi.6.callBackMode="disabled"
		reg.1.address="VH7989231" 
		reg.1.auth.optimizedInFailover="1"
		reg.2.auth.optimizedInFailover="1"
		reg.3.auth.optimizedInFailover="1"
		reg.4.auth.optimizedInFailover="1"
		reg.5.auth.optimizedInFailover="1"
		reg.6.auth.optimizedInFailover="1"
		reg.1.auth.userId="VH7989231"
		reg.1.callsPerLineKey="1"
		reg.1.displayName="Extension"
		reg.1.label="103"
		reg.1.lineKeys="2"
		reg.1.ringType="2"
		reg.2.ringType="2"
		reg.3.ringType="2"
		reg.4.ringType="2"
		reg.5.ringType="2"
		reg.6.ringType="2"
		reg.1.srtp.enable="0"
		voIpProt.server.1.expires="600"
		voIpProt.server.1.failOver.reRegisterOn="1"
		voIpProt.server.1.retryMaxCount="6"
		voIpProt.SIP.alertInfo.1.class="ringAutoAnswer"
		voIpProt.SIP.alertInfo.1.value="Ring Answer"
		voIpProt.SIP.requestValidation.1.method="source"
		voIpProt.SIP.requestValidation.1.request="INVITE"
		reg.1.server.1.address="a151199.ac1.vbspbx.com"
		reg.1.server.1.expires="600"
		reg.1.server.1.retryMaxCount="10"
	/>
</PHONE_CONFIG>
//======================================================================
// End sample cfg file






## Misc
Factory Reset Polycom Phone without Admin Password
The default password for Polycom phones is '456', if that is not working correctly, you may need to factory reset the phone using the instructions below.

Locate the MAC address (serial number) of the phone you want to reset and write it down. (example of a mac address would be: 0004F2xxxxxx). Note: The MAC address can be found on the rear/bottom of the phone or you can see the MAC address by pressing "Menu", "Status", "Platform", "Phone".
Restart the phone by powering down (unplug it count to 10 then plug it back in).
While phone is powering back up (you have about 5-10 seconds to complete this step) press and hold the following keys simultaneously during the Updater/BootROM countdown process:
* If you see "loading application" and no countdown on your screen, select "cancel"and you'll be able to see the countdown.

SoundPoint IP 320, 321, 330. 331, 335, 430, and 450, SoundStation IP 5000 and 7000 and Soundstation Duo: press and hold the 1, 3, 5, and 7 keys
For SoundPoint IP 301, 501, 550, 600, 601, and 650 and VVX 1500: press and hold the 4, 6, 8, * keys
For SoundStation IP 6000: 6, 8 and * dial pad keys
For VVX 300, 310, 400, 410, 500, and 600: press and hold the dial pad keys 1, 3, 5 keys
Continue holding down the numbers for few seconds, until you are prompted to enter the admin password.
Enter the MAC address of the phone (not case sensitive). Before this step, write down the MAC address, then the numeric keyboard equivalent of each character, i. e. for 0004f212ab34, your would have 000433332222234. To switch between alpha and numeric try one of the following:
Depress the # key or the button directly beneath this image on the phone screen (1/A/a) for Soundpoint IP
On a VVX-series depress "mode" to switch between alpha and numeric
You should now be able to log into the phone with the default admin password of "456" and configure your phone