const database = {
  ["index.html"]: "<html>Hello user, I am from DB!</html>",
};

export function get(key, callback) {
  setTimeout(() => callback(database[key]), 1000);
}
