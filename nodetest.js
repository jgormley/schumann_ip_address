var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1"
});

var docClient = new AWS.DynamoDB.DocumentClient();

function pad(raw){
  var input = raw.toString();
  var output = input.length == 1 ? "0" + input : input;
  return output;
}

var now = new Date(Date.now());
var table = "schumann_ip_address_v5";
var timestamp = new Date(Date.now()).getTime();
var date = parseInt(now.getFullYear() + "" + pad(now.getMonth()+1) + "" + pad(now.getDate()));

var params = {
    TableName: table,
    Item:{
        "date": date,
        "timestamp": timestamp,
        "ipaddress": event.ipaddress
    }
};

console.log("Adding a new item: " + JSON.stringify(params));
docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});
