# How to install local cert on sonicwall

## First copy the certificate you were given by the ca and rename the copy server.crt
- Copy the key generated from the CSR on the server and name that server.key
- Now generate the PKCS#12 file:

- Open git bash at the folder that has server.key and server.crt
- Create the file that has the cert and all the intermediate certs with this command (look at the order in the email from the CA,  The order of certificates must be from server certificate to the CA root certificate.)

```cat <signed_cert_filename> <intermediate.cert> [<intermediate2.cert>] > cert-chain.txt```

- Next generate the file by issuing this command:
  - NOTE - set the password to whatever you want. If you are running this in git bash on windows you are required to put it here. Linux does not have an issue prompting. 
  - NOTE: Set the name to whatever you want. 

```openssl pkcs12 -password pass:somewhateverpass -export -in cert-chain.txt -inkey server.key -name 'somewhatevername' -out keystore.p12```

- Now upload this in the sonicwall with the name and password and it will create a local certificate that can be used. 