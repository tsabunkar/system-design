Apache Hadoop

- Hadoop is often used for distributed file storage and processing of large datasets.
- For transferring large files within a Hadoop cluster, the Hadoop Distributed File System (HDFS) is commonly employed
- Uploading a File to HDFS:

```
hadoop fs -put /path/to/local/large_file.txt /path/in/hdfs/large_file.txt
```

- Checking file in Hadoop file system

```
hadoop fs -ls /path/in/hdfs/
```

- Retrieve a file from Hadoop Distributed File System (HDFS) and transfer it to a target destination in your local file system

```
hadoop fs -get /path/in/hdfs/large_file.txt /path/in/local/target_destination.txt

```
