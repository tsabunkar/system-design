const AWS = require("aws-sdk");

// Set the region for AWS services
AWS.config.update({ region: "YOUR_REGION" });

// Initialize the SNS client
const sns = new AWS.SNS();

// Create an SNS topic
sns.createTopic({ Name: "MyTopic" }, (err, data) => {
  if (err) {
    console.error("Error creating SNS topic:", err);
  } else {
    const topicArn = data.TopicArn;

    // Publish a message to the topic
    sns.publish(
      {
        TopicArn: topicArn,
        Message: "Hello from SNS!",
      },
      (publishErr, publishData) => {
        if (publishErr) {
          console.error("Error publishing message:", publishErr);
        } else {
          console.log("Message published:", publishData.MessageId);
        }
      }
    );
  }
});
