### Overall Tech
The overall technologies we use are:

Exim, Postfix, Dovecot, SpamAssassin, Dovecot, Roundcube, Crossbox, Rainloop, DirectAdmin, cPanel

### E-mail Flow
E-mail arrives at each recipient server directly. Users are spread out across multiple servers. Your server is the one you log in to and set MX records for. Possible names for your server might include Eagle, One, Ghost, Ocean, Acadia, Echo, Arrow, Longhorn, etc.

Outbound e-mail leaves the server housing your account and goes out to filtergroup. The filtergroup hostname points to load balanced rspamd filter servers. From there, your email is scanned for spam. If spam is detected, the e-mail is rejected (not bounced) and the server housing your account returns the error back to you. If the e-mail passes the filters, it is forwarded on to relays. The relays hostname is a hostname with two A records, which point to Dallas Relay and Charlotte Relay. Dallas Relay has 761 IP addresses used to deliver e-mail. Charlotte Relay has 251 IPs used to deliver e-mail. E-mail is rotated randomly between those IPs and, if an e-mail fails for a reason that we think might be related to IP reputation, it is retried from different IPs several times. If the e-mail still fails, it goes to Laststand. Laststand houses 253 IPs used for e-mail delivery. If e-mail fails delivery several times from different IPs on Laststand, it forwards to SpamWall. SpamWall will attempt delivery from different IPs for up to 3 days before bouncing the e-mail back to the sender.