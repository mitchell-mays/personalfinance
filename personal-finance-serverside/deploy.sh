aws cloudformation deploy \
    --stack-name artifacts-bucket \
    --template ./artifact-bucket.yml \
    --parameter-overrides \
        DeployBucket=mitchellmays-artifact-bucket \
    --capabilities CAPABILITY_IAM CAPABILITY_NAMED_IAM \
    --no-fail-on-empty-changeset

sam validate --template main.yml

sam package \
    --template-file ./main.yml \
    --s3-bucket mitchellmays-artifact-bucket \
    --s3-prefix test/test \
    --output-template-file main.compiled.yml

sam deploy \
  --template-file main.compiled.yml \
  --stack-name edge-sam-lambda \
  --region us-east-1 \
  --capabilities CAPABILITY_IAM CAPABILITY_NAMED_IAM CAPABILITY_AUTO_EXPAND \
  --parameter-overrides \
        NameOfBucket=mitchellmays-apps-finance-sam \
  --no-fail-on-empty-changeset