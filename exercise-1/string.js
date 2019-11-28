function ucfirst(input) {
  if (typeof input != 'string') return input
  input = input.toLowerCase().split("")
  input[0] = input[0].toUpperCase()
  return input.join("");
}
console.log(ucfirst('hello world'))
console.log(ucfirst(null))
console.log(ucfirst({test: 'hello world'}))

function capitalize(input) {
  if (typeof input != 'string') return input
  return input.toLowerCase().split(' ').map(word => {
    word = word.split("")
    word[0] = word[0].toUpperCase();
    return word.join('');
  }).join(' ')
}
console.log(capitalize('hello world'))
console.log(capitalize('_hello world'))

function camelCase(input) {
  if (typeof input != 'string') return input
  return input.split(' ').map(word => {
    word = word.split("")
    word[0] = word[0].toUpperCase();
    return word.join('');
  }).join("")
}
console.log(camelCase('hello world'))

function snake_case(input) {
  if (typeof input != 'string') return input
  return input.split(" ").join("_")
}
console.log(snake_case('hello world'))

function leet(input) {
  if (typeof input != 'string') return input
  vowel = {
    'a': 4,
    'e': 3,
    'i': '1',
    'o': '0',
    'u': '(_)',
    'y': 7
  };
  return input.replace(' ','').split('').map(
    letter => {
      return vowel[letter.toLowerCase()] ? vowel[letter.toLowerCase()] : letter
    }
  ).join('')
}
console.log(leet('anaconda'))

function verlan(input) {
  if (typeof input != 'string') return input
  return input.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}
console.log(verlan('hello world'))

function yoda(input) {
  if (typeof input != 'string') return input
  return input.split(' ').reverse().join(' ')
}
console.log(yoda('Hello world'))

function vig(input, key) {
  if (typeof input != 'string') return input
  alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
  output = ''
  for (i = 0; i < input.length; i++) {
    inputLetter = input[i];
    keyLetter = key[i % key.length];
    alphabetIndex = alphabet.indexOf(inputLetter) + alphabet.indexOf(keyLetter)
    output += alphabet[alphabetIndex % alphabet.length]
  }
  return output
}
console.log(vig('wikipedia', 'crypto'))

function prop_access(object, path) {
  if (!path || path.length == 0) return object;
  splittedPath = path.split('.');
  function testKey(currentObject, value) {
    if (typeof currentObject !== 'object') return false;
    return Object.keys(currentObject).includes(value);
  }
  var testedObject = object;
  var testedKeys = []
  for (key of splittedPath) {
    testedKeys.push(key);
    if (testKey(testedObject, key)) {
      if (typeof testedObject[key] == 'object') {
        testedObject = {...testedObject[key]}
      }
    } else {
      return `${testedKeys.join('.')} not exist`;
    }
  }
  return testedObject[splittedPath[splittedPath.length - 1]];
}
prairie = {
  animal: { type: { name: 'chien'}}
}
console.log(prop_access(prairie, 'animal.type.name'))
console.log(prop_access(prairie, 'animal.gender'))
console.log(prop_access(prairie, null))
