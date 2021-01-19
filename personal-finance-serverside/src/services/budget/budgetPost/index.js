const { v4: uuidv4 } = require('uuid');
var AWS = require('aws-sdk');
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});


exports.handler = async (event) => {
    try {
        
            var obj = JSON.parse(event.body);
        
        
            var ID = uuidv4();
            var NAME = obj.name;
        
        
            var params = {
                TableName:'budget',
                Item: {
                 id : {S: ID}, 
                 name : {S: NAME}
                }
            
            };
        
            var data;
            var msg;
            
            try{
                data = await ddb.putItem(params).promise();
                console.log("Item entered successfully:", data);
                msg = 'Item entered successfully';
            } catch(err){
                console.log("Error: ", err);
                msg = err;
            }
        
        
            var response = {
                'headers': {
                    "Access-Control-Allow-Origin" : "*"
                },
                'statusCode': 200,
                'body': JSON.stringify({
                    message: msg
            })
        };
    } catch (err) {
        console.log(err);
        return err;
    }

    return response;
};