// Receive messages from the SQS queue
const receiveParams = {
  QueueUrl: "YOUR_QUEUE_URL", // Use the URL of the SQS queue obtained from the creation step
  MaxNumberOfMessages: 1,
  WaitTimeSeconds: 20, // Long polling for messages
};

const receiveMessages = () => {
  sqs.receiveMessage(receiveParams, (receiveErr, receiveData) => {
    if (receiveErr) {
      console.error("Error receiving messages from SQS:", receiveErr);
    } else {
      if (receiveData.Messages && receiveData.Messages.length > 0) {
        receiveData.Messages.forEach((message) => {
          console.log("Received message:", message.Body);

          // Delete the received message from the queue
          const deleteParams = {
            QueueUrl: receiveParams.QueueUrl,
            ReceiptHandle: message.ReceiptHandle,
          };

          sqs.deleteMessage(deleteParams, (deleteErr) => {
            if (deleteErr) {
              console.error("Error deleting message:", deleteErr);
            } else {
              console.log("Message deleted from queue");
            }
          });
        });
      } else {
        console.log("No messages received.");
      }
      // Receive more messages if available
      receiveMessages();
    }
  });
};

receiveMessages();
