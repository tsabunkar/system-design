# How to run the files in Sequence

- ![Pub-Sub Model](./img/pub-sub-basic-model.png)
- node send-message-sns.js
- node subscribe-sqs-queue.js
- node recieve-message-sqs-queue.js
- Change the Queue Policy
  - Amazon SQS > Queues > MyQueue1 > Edit
  - Update the above policy as mentioned here- ./Access-Policy-SQS.json
  - https://stackoverflow.com/questions/38754931/aws-sqs-not-receiving-sns-messages
