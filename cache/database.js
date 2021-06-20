const database = {
  ["index.html"]: "<html>Hello world</html>", // think that this is html page of you are website
};

// custom method call -> get()
module.exports.get = (key, callback) => {
  setTimeout(() => {
    callback(database[key]);
  }, 3000); // emulating async behaviour of db read
};
