# Thunderbird mail issues

- I ran into an issue when I separated my work profile from my personal profile. 
- It seems that security settings are per-profile. I must have set this on the original years ago to get to our older mail server and completely forgot about it
- Below is how to configure thunderbird to allow the older security protocols 
- Possible error messages you will see:
```Component returned failure code: 0x80520001 thunderbird```
```Unable to login at server. Probably wrong configuration, username, or passwor```
```Thunder bird will be hung if you create the account anyway on checking mail server capabilities```
- In Menu app icon > Options > General
    - Scroll forever to the bottom and click on 'Config Editor'
    - accept the risk
    - In search type: tls.version
    - look for this line : security.tls.version.min
    - Double click on line to open an edit window and enter the number 1
    - click on OK.
    - Exit window - top right x 