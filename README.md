# Personal Finance WebApp
A ReactJS Web application hosted on AWS using Cloudfront/S3/Lambda

#Deployment
To deploy the application:
    1. AWS configure to login to your AWS acct
    2. Navigate to personal-finance-serverside
    2. npm run deploy
        This will do the following
        - Deploy Artifacts Bucket for storing compile yml and         changesets
        - Package and deploy main.yml (and nested services.yml)
    3. Go to AWS - find API and grab URL
    4. Place url in .env file in personal-finance folder as            'REACT_APP_API_URL'

Run locally:
    1. Navigate to personal-finance
    2. Run 'npm start' to start local app (port 3000)

Access from AWS:
    1. Go to AWS Cloudfront
    2. Hit Distribution endpoint to access app

##Contents

###Budget
###Tax
###Investments
###Savings
###Loans
