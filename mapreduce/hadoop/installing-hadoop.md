# Installing Apache Hadoop in Mac

- Install Java 21

  - ARM64 DMG Installer (Macs built on Apple Silicon) => https://download.oracle.com/java/21/latest/jdk-21_macos-aarch64_bin.dmg ([sha256](https://download.oracle.com/java/21/latest/jdk-21_macos-aarch64_bin.dmg.sha256))
  - \$ java -version
  - $ cd /Library/Java/JavaVirtualMachines
  -

- Install Hadoop

  - ```
    brew install hadoop
    ```

  - $ hadoop version

- Test with Haddop File Transfer

  - $ hadoop fs -mkdir -p ./destination
  - $ hadoop fs -put ./sample2.doc ./destination
  - $ hadoop fs -ls
