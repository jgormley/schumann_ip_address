This is a project for using a Raspberry pi with camera as a surveilance camera that streams video over the internet.


Components:
* Raspberry pi
* Camera
* Router
* API Gateway
* Lambda
* Dynamo DB
* yellowbikestudio.com hosting


*** Get IP address ***

curl -s checkip.dyndns.org | sed -e 's/.*Current IP Address: //' -e 's/<.*$//'


*** Call the API Gateway endpoint ***

https://9uynal2hed.execute-api.us-east-1.amazonaws.com/prod/schumann_ip_address_updater
{"ipaddress": "192.168.0.2"}
curl -X PUT -H "Content-Type: application/json" -d '{"ipaddress":"192.168.1.4"}' https://9uynal2hed.execute-api.us-east-1.amazonaws.com/prod/schumann_ip_address_updater



