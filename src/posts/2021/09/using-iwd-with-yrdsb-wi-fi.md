---
title: "Using IWD with YRDSB Wi-Fi"
date: "2021-09-14"
tags:
 - blog
 - tech
---

The iNet Wireless Daemon (iwd) is a lightweight and stable Wi-Fi manager for Linux systems. However, some configuration is needed for it to work properly on WPA Enterprise (802.1X) networks. For YRDSB:

<!-- excerpt -->

Create the file with the following contents at `/var/lib/iwd/<ssid>.8021x`

```ini
[Security]
EAP-Method=PEAP
EAP-Identity=<username>
EAP-PEAP-Phase2-Method=MSCHAPV2
EAP-PEAP-Phase2-Identity=<username>
EAP-PEAP-Phase2-Password=<password>

[Settings]
AutoConnect=true
```

…and then connect to the network normally.

```
iwctl station wlan0 connect YRDSB-S
```
