exports.handler = (event, context, callback) => {
    const request = event.Records[0].cf.request;
    const response = event.Records[0].cf.response;

    if (response.status >= 400 && response.status <= 599) {
        if (request.method === 'POST') {
            /* HTTP body is always passed as base64-encoded string. Decode it. */
            const body = Buffer.from(request.body.data, 'base64').toString();
    
            /* HTML forms send the data in query string format. Parse it. */
            const params = querystring.parse(body);
    
            /* For demonstration purposes, we only log the form fields here.
            * You can put your custom logic here. For example, you can store the 
            * fields in a database, such as AWS DynamoDB, and generate a response
            * right from your Lambda@Edge function.
            */
            for (let param in params) {
                console.log(`For "${param}" user submitted "${params[param]}".\n`);
            }

            response.status = 200;
            response.statusDescription = 'OK';
            response.body = 'Body generation example';
        }
    }

    return callback(null, response);
};