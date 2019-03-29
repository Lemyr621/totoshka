function getUserProfileFromObj(object) {
  if (typeof(object) == "object" && object != null) {
    if ((typeof object['username'] == "string") && (typeof object['email'] == "string")) {
      return {
        username: object.username,
        email: object.email,
      };
    }
  }
  return false;
}

console.log(getUserProfileFromObj({
  id: 1,
  username: 'Vasya',
  email: 'user@mail.ru'
}));
console.log(getUserProfileFromObj({
  uwsername: 'Vasya',
  email: 'user@mail.ru'
}));
console.log(getUserProfileFromObj({}));
console.log(getUserProfileFromObj());
console.log(getUserProfileFromObj(1));
