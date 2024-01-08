# Use a base Hadoop image or build your own Hadoop image
FROM your_hadoop_image:latest

# Copy the file to be uploaded into the container
COPY local_file.txt /tmp/local_file.txt

# Run the commands to put the file into HDFS
RUN /usr/local/hadoop/bin/hadoop fs -put /tmp/local_file.txt /path/in/hdfs/uploaded_file.txt

# Optional: Print the contents of the directory to verify the upload
RUN /usr/local/hadoop/bin/hadoop fs -ls /path/in/hdfs/

# Cleanup (optional)
RUN rm /tmp/local_file.txt

# Command to start the container (if needed)
CMD ["your_start_command"]
