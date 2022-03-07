# Welcome to your CDK TypeScript project

You should explore the contents of this project. It demonstrates a CDK app with an instance of a stack (`CdkWorkshopStack`)
which contains an Amazon SQS queue that is subscribed to an Amazon SNS topic.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

## Install extra cdk packages

By default, cdk comes with the main package, `aws-cdk-lib` as a result of `cdk init`.
"Experimental" AWS Construct Library modules, where higher-level constructs are still under development, are named like @aws-cdk/SERVICE-NAME-alpha.
The service name has an aws- prefix. If you're unsure of a module's name, search for it on [NPM](https://www.npmjs.com/search?q=%40aws-cdk).

To install extra packages for apigatewayv2 (take off from the original tutorial), run:

```bash
npm install @aws-cdk/aws-apigatewayv2-integrations-alpha
npm install @aws-cdk/aws-apigatewayv2-alpha
npm update
```
