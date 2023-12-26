import {
  SQSClient,
  CreateQueueCommand,
  GetQueueAttributesCommand,
} from "@aws-sdk/client-sqs";
import {
  SNSClient,
  CreateTopicCommand,
  SubscribeCommand,
} from "@aws-sdk/client-sns"; // ES Modules import

// Set the AWS region
const region = "us-east-1"; // Replace with your AWS region

// Initialize the SQS and SNS clients
const sqsClient = new SQSClient({ region });
const snsClient = new SNSClient({ region });

// Create an SQS queue
const createQueue = async () => {
  try {
    const createQueueCommand = new CreateQueueCommand({
      QueueName: "MyQueue1",
    });
    const createQueueResponse = await sqsClient.send(createQueueCommand);

    const queueUrl = createQueueResponse.QueueUrl;

    const createTopicCommand = new CreateTopicCommand({ Name: "Channel1" });
    const createTopicResponse = await snsClient.send(createTopicCommand);
    const topicArn = createTopicResponse.TopicArn;

    // subscribe the topic to the SQS
    const getQueueAttributesCommand = new GetQueueAttributesCommand({
      QueueUrl: queueUrl,
      AttributeNames: ["QueueArn"],
    });
    const getQueueAttributesResponse = await sqsClient.send(
      getQueueAttributesCommand
    );

    const subscribeCommand = new SubscribeCommand({
      TopicArn: topicArn,
      Protocol: "sqs",

      Endpoint: getQueueAttributesResponse.Attributes?.QueueArn,
    });
    const subscribeResponse = await snsClient.send(subscribeCommand);

    console.log(
      "SQS queue subscribed to SNS topic:",
      subscribeResponse.SubscriptionArn
    );
  } catch (error) {
    console.error("Error:", error);
  }
};

createQueue();
