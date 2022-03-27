# DO YOU SUPPORT SPLIT DELIVERY?

No. While we could absolutely dive into a full explanation of how and why we’re under the impression that the entire concept of “split delivery” is deeply and inherently flawed, the up front answer should simple be: No.

The longer answer:

Split delivery may very well work with our service on some level but we have no features to facilitate it, and we don’t white list other servers for the purpose of allowing them to violate SPF when sending mail to our servers. Our servers won’t deliver mail sent into the servers remotely while being “From” a local domain that exim deems undeliverable by local routing, and neither will exim send externally to a single email on a domain while delivering others locally for mail that originates on the server, preventing back and forth communication between users on a domain with split routing. Every single solution to this problem merely changes the consequences of the actions taken, the only way you can do split routing with zero consequences is to fully control all servers involved.

