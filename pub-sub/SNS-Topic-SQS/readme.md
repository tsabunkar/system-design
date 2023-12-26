# Using AWS to create the Pub-Sub Model

## SNS and Topic

- Combining Amazon SNS (Simple Notification Service) with Amazon SQS (Simple Queue Service) creates a scenario where SNS acts as a publisher to a topic, and SQS queues subscribe to that topic to receive messages
- SDK for JavaScript installed (npm install aws-sdk) this is for Version-2. But for Version-3 use => @aws-sdk/client-sns, @aws-sdk/client-sqs
- ![A2A Pub-Sub Model](./img/image.png)

## SQS

- for Amazon SQS- A message queuing service
- Amazon SQS provides queues for high-throughput, system-to-system messaging. You can use queues to decouple heavyweight processes and to buffer and batch work. Amazon SQS stores messages until microservices and serverless applications process them.
- ![Alt text](./img/sqs.png)

---

# Monitoring Amazon SNS topics using CloudWatch

- To monitor the messages that are sent from SNS Publisher to Topic -> Use Cloud Watch
- https://docs.aws.amazon.com/sns/latest/dg/sns-monitoring-using-cloudwatch.html
- Goto Cloud watch, with Right Region [Cloud-Watch](https://us-east-1.console.aws.amazon.com/cloudwatch/home?region=us-east-1#home)
- Metric > All Metric > SNS > Topic Metric

---

# How to run the files in Sequence

- ![Pub-Sub Model](./img/pub-sub-basic-model.png)
- node send-message-sns.js
- node subscribe-sqs-queue.js
- node recieve-message-sqs-queue.js
- Change the Queue Policy
  - Amazon SQS > Queues > MyQueue1 > Edit
  - Update the above policy as mentioned here- ./Access-Policy-SQS.json
  - https://stackoverflow.com/questions/38754931/aws-sqs-not-receiving-sns-messages
