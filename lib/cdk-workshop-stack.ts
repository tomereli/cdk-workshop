import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda'
import { HttpLambdaIntegration } from '@aws-cdk/aws-apigatewayv2-integrations-alpha';
import { HttpApi, HttpMethod } from '@aws-cdk/aws-apigatewayv2-alpha';

export class CdkWorkshopStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset('lambda'), // relative path from where we run `cdk`
      handler: 'hello.handler' // file is 'hello', function is 'handler'
    });

    const helloIntegration = new HttpLambdaIntegration('helloIntegration', hello)
    const httpApi = new HttpApi(this, 'cdk-workshop-http-api');
    httpApi.addRoutes({
      path: '/hello',
      methods: [HttpMethod.GET],
      integration: helloIntegration
    });
    
  }
}
