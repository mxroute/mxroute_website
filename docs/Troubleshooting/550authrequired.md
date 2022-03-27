# 550 AUTHENTICATION REQUIRED

This error means that the server which received your email has not been configured to accept email for the recipient domain. That can come from many reasons. If your DNS has been configured for at least an hour and you are consistently receiving this message when sending to your domain, from multiple locations, most likely this article explains the fix.

First, [log in to DirectAdmin](https://mxroute.com/docs/login-to-directadmin/). Next, select the domain in question from the dropdown box at the top right of the screen. After doing that, look in the menus on the left side for “Email Routing.” Click that, and look for a checkbox that says “Use this server to handle my e-mails” next to it. Put a check in the box. This should solve the issue.

