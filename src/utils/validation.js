//Email validate
export function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Url validation
export function validURL(string) {
  var res = string.match(
    /(http(s)?:\/\/.)+(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  return res !== null;
}

// Check if the input is empty
export const isEmpty = (data) => (data.length === 0 ? true : false);

// Check two inputs if they match
export const isMatching = (match1, match2) =>
  match1 === match2 ? true : false;
