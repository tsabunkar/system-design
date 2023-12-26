import {
  SNSClient,
  PublishCommand,
  CreateTopicCommand,
} from "@aws-sdk/client-sns";

// Set the AWS region
const region = "us-east-1"; // N.Virinia

// Initialize the SNS client
const snsClient = new SNSClient({ region });

// Create an SNS topic and publish a message
const createTopicAndPublish = async () => {
  try {
    const createTopicCommand = new CreateTopicCommand({ Name: "Channel1" });
    const createTopicResponse = await snsClient.send(createTopicCommand);
    const topicArn = createTopicResponse.TopicArn;

    const messageToSend = "Hello from SNS Publisher send from Mbp!";
    const publishCommand = new PublishCommand({
      TopicArn: topicArn,
      Message: messageToSend,
    });

    // Publish a message to the topic
    const publishResponse = await snsClient.send(publishCommand);

    console.log(
      "Message published:",
      publishResponse,
      "with Message - ",
      messageToSend
    );
  } catch (error) {
    console.error("Error:", error);
  }
};

createTopicAndPublish();
