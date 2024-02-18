class WriteAroundCache:
    def __init__(self):
        self.cache = {}
        self.storage = {}

    def read(self, key):
        if key in self.cache:
            print("Reading from cache...")
            return self.cache[key]
        else:
            print("Reading from storage...")
            if key in self.storage:
                # Cache miss, fetch from storage
                self.cache[key] = self.storage[key]
                return self.cache[key]
            else:
                return None  # Key not found in storage

    def write(self, key, value):
        print("Writing to storage...")
        self.storage[key] = value
        # Remove key from cache to ensure fresh data is fetched on next read
        if key in self.cache:
            del self.cache[key]

# Example usage:
cache = WriteAroundCache()

# Write data directly to storage
cache.write('key1', 'value1')
cache.write('key2', 'value2')

# Read data (first read should fetch from storage)
print(cache.read('key1'))  # Output: Reading from storage... value1

# Subsequent reads should fetch from cache
print(cache.read('key1'))  # Output: Reading from cache... value1
print(cache.read('key2'))  # Output: Reading from Storage... value2

# Overwrite data
cache.write('key1', 'new_value1')

# Cache should be updated with new value
print(cache.read('key1'))  # Output: Reading from Storage... new_value1
