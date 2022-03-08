# Misc Linux notes

## Copy users from one system to another

-  On old system script
```bash
mkdir /root/move/
export UGIDLIMIT=500
awk -v LIMIT=$UGIDLIMIT -F: '($3>=LIMIT) && ($3!=65534)' /etc/passwd > /root/move/passwd.mig
awk -v LIMIT=$UGIDLIMIT -F: '($3>=LIMIT) && ($3!=65534)' /etc/group > /root/move/group.mig
awk -v LIMIT=$UGIDLIMIT -F: '($3>=LIMIT) && ($3!=65534) {print $1}' /etc/passwd | tee - |egrep -f - /etc/shadow > /root/move/shadow.mig
cp /etc/gshadow /root/move/gshadow.mig
```

-new system script
```bash
mkdir /root/newsusers.bak
cp /etc/passwd /etc/shadow /etc/group /etc/gshadow /root/newsusers.bak
cd /path/to/location
cat passwd.mig >> /etc/passwd
cat group.mig >> /etc/grouproot

cat shadow.mig >> /etc/shadow
/bin/cp gshadow.mig /etc/gshadow
```

