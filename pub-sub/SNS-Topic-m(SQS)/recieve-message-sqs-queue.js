// Receive messages from the SQS queue

// To receive messages from an SQS queue using AWS SDK v3, refer to the SDK documentation for specific methods and usage.
// Example code might resemble this logic (not the exact implementation):

import {
  ReceiveMessageCommand,
  DeleteMessageCommand,
  SQSClient,
} from "@aws-sdk/client-sqs";

const region = "us-east-1";

const sqsClient = new SQSClient({ region });
const queueUrl = "https://sqs.us-east-1.amazonaws.com/494039644227/MyQueue1";

const receiveMessages = async () => {
  try {
    const receiveMessageCommand = new ReceiveMessageCommand({
      QueueUrl: queueUrl, // Replace with your SQS queue URL
      MaxNumberOfMessages: 2,
      WaitTimeSeconds: 20, // Long polling for messages
    });
    const receiveMessageResponse = await sqsClient.send(receiveMessageCommand);
    if (
      receiveMessageResponse.Messages &&
      receiveMessageResponse.Messages.length > 0
    ) {
      receiveMessageResponse.Messages.forEach(async (message) => {
        console.log("Received message:", message.Body);

        const deleteMessageCommand = new DeleteMessageCommand({
          QueueUrl: queueUrl, // Replace with your SQS queue URL
          ReceiptHandle: message.ReceiptHandle,
        });
        await sqsClient.send(deleteMessageCommand);

        console.log("Message deleted from queue");
      });
    } else {
      console.log("No messages received.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

receiveMessages();
