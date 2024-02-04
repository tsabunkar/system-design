class WriteAroundCache:
    def __init__(self, capacity):
        self.capacity = capacity #capcity of the cache
        self.cache = {} #in-memory cache
        self.mainDB = {} #Main Storage
    
    def get(self, key):
        if key in self.cache:
            return self.cache[key] #provide the value of the key
        else:
            # Simulating reading from main storage in case of a cache miss
            # In a real-world scenario, you would fetch the data from the main storage here
            print(f"Reading from main storage for key: {key}")
            self.updateCache(self, key, value)
            return None

    
    def put(self, key, value):
        # Simulating writing to main storage in a write-Around manner
        print(f"Writing to main storage for key: {key}, value: {value}")
        self.mainDB[key] = value  # write the data to the main storage here
        
    def updateCache(self, key, value):
         # Update the cache
        self.cache[key] = value
            
        # Ensure the cache does not exceed its capacity
        if len(self.cache) > self.capacity:
            oldest_key = next(iter(self.cache))
            del self.cache[oldest_key]

# Example usage:
cache = WriteThroughCache(3)

# Writing to the cache triggers write-through to main storage
cache.put("key1", "value1")
cache.put("key2", "value2")

# Reading from the cache (no write-through as it's a cache hit)
result = cache.get("key1")
print(f"Value for key1: {result}")

# Writing to the cache triggers write-through to main storage
cache.put("key3", "value3")

# Reading from the cache (no write-through as it's a cache hit)
result = cache.get("key2")
print(f"Value for key2: {result}")

# Reading from the cache (cache miss, triggers read from main storage)
result = cache.get("key4")
print(f"Value for key4: {result}")
