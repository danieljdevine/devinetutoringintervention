# Devine Tutoring Intervention Website

This is a static site created with Nuxt framework, using Vue as the frontend and serverless framework to deploy static site to AWS in s3 and using cloudfront for content delivery

## Deployment Instructions
1. Ensure all packages are installed with `npm install` and run `npm run build` to generate static files for production
2. Populate .env file with the variables:
    - AWS_REGION: the region to deploy to
    - ACCOUNT_ID: the AWS account ID to use
    - KMS_KEY: the ARN of the KMS key used for s3 bucket encryption (this should be created manually)
    - OAC_ID: the ID of the origin access control for cloudfront (this should also be created manually)
    - DOMAIN_NAME: domain or subdomain name to deploy to
    - HOSTED_ZONE_ID: Id of Route 53 hosted zone for domain
    - ACM_CERTIFICATE_ARN: arn of acm certificate for the domain
3. Run `serverless deploy` to deploy resources and `serverless s3deploy` to upload static files to s3
