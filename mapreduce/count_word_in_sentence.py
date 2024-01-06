from colorama import Fore # Console output in Colors :)


def mapper(text):
    words = text.split(); # split a string into Dictoniary 
    print(Fore.MAGENTA + str(words)) # str() converts Dictonary to String
    word_count = {} # creating hashMap

    for word in words:
        print(word)
        word_count[word] = word_count.get(word, 0) + 1 # If the key has the word than increment or just initalize with Zero

    return word_count

print(mapper("This is an example of MapReduce, MapReduce is a programming model for data processing."))

print("______________________")

def reducer(word_count_pairs):
    word_count = {}

    for pair in word_count_pairs:
        # print(pair)
        word_key, count_value = pair
        word_count[word_key] = word_count.get(word_key, 0) + count_value
    
    return word_count.items()
    

print(reducer(mapper("This is an example of MapReduce, MapReduce is a programming model for data processing.")))