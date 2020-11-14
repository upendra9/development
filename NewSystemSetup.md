

#########
sudo apt-get update
##### Sublime
sudo apt-get install apt-transport-https
wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | sudo apt-key add -
echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list
sudo apt-get update
sudo apt-get install sublime-text
#### Other SWS
sudo apt-get install synapse curl gimp gnome-screenshot gparted stopwatch whois  hardinfo gnome-disk-utility 

#### additional sws
https://www.teamviewer.com/en/download/linux/
https://zoom.us/download

######  for single click
lxqt settings > keyboard and mouse > mouse pad >

#### for enabling wifi driver 1545 inspiron / broadcom inc driver
software sources > additional drivers > enable broadband wireless 

##################### Reference from Here

#!/bin/bash
#This file was created by linuxwebdevelopment.com
#It is released under the GPLv3 license
#You are free to copy it, modify it, and/or share it
#Just please give credit to linuxwebdevelopment.com
#this file is from the article called
#Software To Install Every Time With Lubuntu 20.04
#located at
#https://linuxwebdevelopment.com/software-to-install-every-time-with-lubuntu-20-04/

sudo apt-get install synapse curl gimp gnome-screenshot gparted stopwatch whois  hardinfo

# sudo apt-get install synapse chromium-browser curl gimp gnome-screenshot gparted stopwatch whois wine hardinfo


####### Useful Commands
### bios settings from terminal 
dmidecode 

