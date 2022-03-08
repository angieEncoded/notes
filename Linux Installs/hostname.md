 # Configure hostname
 
 - Using systemd
 ```sudo hostnamectl set-hostname hostname.domain.com```

- using older unix
```sudo hostname hostname.domain.com```

- check the hostname
```hostname```

- restart networking on your server to update everything
```sudo /etc/init.d/network restart```




