var AWS = require('aws-sdk');
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

exports.handler = async (event) => {
    try {    
            var ID = event.pathParameters.id;
        
            var params = {
                TableName:'budget',
                Key: {
                 id : {S: ID}
                }
            
            };
        
            var data;
            
            try{
                data = await ddb.getItem(params).promise();
                console.log("Item read successfully:", data);
            } catch(err){
                console.log("Error: ", err);
                data = err;
            }
        
        
            var response = {
                'headers': {
                    "Access-Control-Allow-Origin" : "*"
                },
                'statusCode': 200,
                'body': JSON.stringify({
                    message: data
            })
        };
    } catch (err) {
        console.log(err);
        return err;
    }

    return response;
};