function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

let lowercase = 'hello';
let uppercase = 'HELLO';
let mixed = 'I love you, Grandma.'

function sayHiToGrandma(string) {
    if (string === string.toLowerCase())
      return 'I can\'t hear you!';

        if (string === string.toUpperCase());
          return 'YES INDEED!';

        if (string === mixed.lowercase())
          return 'I love you, too.';
}
