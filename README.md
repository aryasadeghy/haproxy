# Haproxy installation and config 

first of all you just need to install haproxy from repo with this command 

note : i'm using ubuntu 16.10

```
sudo apt install haproxy

```

after you install the haproxy , it's the time to config it .

#configuration Part 

so easy in copy the /etc folder in th files folder into / just like below 

```
sudo cp -a  /etc   /

```

ok it's done you just need to restart the services 

```
sudo service rsyslog restart && sudo service haproxy restart 


``

that's it you're done of all about haproxy  and if you want to change the configuration you cant editr this file 
```
/etc/haproxy/haproxy.cfg 
```

# using our sendlog app 
i wrote this simple app to find out which server are up or down 

for runnig app go to App folder and run the bellow command 

```
node server.js
```
you can see the changes if one of your servers goes down or getting started .




