// Initialize the SQS client
const sqs = new AWS.SQS();

// Create an SQS queue
const params = {
  QueueName: "MyQueue",
};

sqs.createQueue(params, (queueErr, queueData) => {
  if (queueErr) {
    console.error("Error creating SQS queue:", queueErr);
  } else {
    const queueUrl = queueData.QueueUrl;

    // Get the ARN of the SNS topic
    const topicArn = "YOUR_SNS_TOPIC_ARN"; // Use the ARN obtained from the SNS creation step

    // Subscribe the SQS queue to the SNS topic
    sns.subscribe(
      {
        TopicArn: topicArn,
        Protocol: "sqs",
        Endpoint: queueUrl,
      },
      (subscribeErr, subscribeData) => {
        if (subscribeErr) {
          console.error(
            "Error subscribing SQS queue to SNS topic:",
            subscribeErr
          );
        } else {
          console.log(
            "SQS queue subscribed to SNS topic:",
            subscribeData.SubscriptionArn
          );
        }
      }
    );
  }
});
