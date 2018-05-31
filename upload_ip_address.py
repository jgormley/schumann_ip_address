# This Node script calls an API Gateway menthod with the computer's current IP address
# fancy? no.  Effective? yes

# requires requests
# sudo pip install requests

# get the ip address

# call the API Gateway endpoint to save the IP address


#import requests library for making REST calls
import requests
import json

#specify url
url = 'https://9uynal2hed.execute-api.us-east-1.amazonaws.com/prod/schumann_ip_address_updater'

data = {"ipaddress":"192.168.2.1"}

headers = {'Content-Type': 'application/json'}


#Call REST API
response = requests.put(url, data=data, headers=headers)

#Print Response
print(response.text)
