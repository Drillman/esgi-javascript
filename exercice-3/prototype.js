function formatString(input) {
  return input.trim().toLowerCase();
}

function ucfirst(input) {
  if (!input || !input || typeof input != 'string') return ""
  input = input.split("")
  input[0] = input[0].toUpperCase()
  return input.join("");
}
String.prototype.ucfirst = () => ucfirst(this)

function capitalize(input) {
  if (!input || typeof input != 'string') return ""
  return input.toLowerCase().split(' ').map(word => {
    word = word.split("")
    word[0] = word[0] ? word[0].toUpperCase() : word[0];
    return word.join('');
  }).join(' ')
}
String.prototype.capitalize = () => capitalize(this)

function camelCase(input) {
  if (!input || typeof input != 'string') return ""
  return formatString(input).replace('_', ' ').split(' ').map(word => {
    word = word.split("")
    word[0] = word[0].toUpperCase();
    return word.join('');
  }).join("")
}
String.prototype.camelCase = () => camelCase(this)

function snake_case(input) {
  if (!input || typeof input != 'string') return ""
  return input.toLowerCase().split(" ").join("_")
}
String.prototype.snake_case = () => snake_case(this)

function leet(input) {
  if (!input || typeof input != 'string') return ""
  vowel = {
    'a': 4,
    'e': 3,
    'i': '1',
    'o': '0',
    'u': '(_)',
    'y': 7
  };
  return input.split('').map(
    letter => {
      return vowel[letter.toLowerCase()] ? vowel[letter.toLowerCase()] : letter
    }
  ).join('')
}
String.prototype.leet = () => leet(this)

function verlan(input) {
  if (!input || typeof input != 'string') return ""
  return input.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}
String.prototype.verlan = () => verlan(this)

function yoda(input) {
  if (!input || typeof input != 'string') return ""
  return input.split(' ').reverse().join(' ')
}
String.prototype.yoda = () => yoda(this)

function vig(input, key) {
  if (!input || typeof input != 'string') return ""
  alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
  input = input.toLowerCase().split(' ')
  key = formatString(key)
  output = ''
  keyIndex = 0
  return input.map(word => {
    output = ''
    for (i = 0; i < word.length; i++) {
      inputLetter = word[i];
      keyLetter = key[keyIndex % key.length];
      keyIndex ++
      alphabetIndex = alphabet.indexOf(inputLetter) + alphabet.indexOf(keyLetter)
      output += alphabet[alphabetIndex % alphabet.length]
    }
    return output
  }).join(' ')
}
String.prototype.yoda = (key) => yoda(this,key)


function prop_access(object, path) {
  if (!path || path.length == 0) return object;
  if (!object) return console.log(`${path} not exist`);
  splittedPath = path.split('.');
  function testKey(currentObject, value) {
    if (typeof currentObject !== 'object') return false;
    return Object.keys(currentObject).includes(value);
  }
  var testedObject = object;
  var testedKeys = []
  for (var key of splittedPath) {
    testedKeys.push(key);
    if (testKey(testedObject, key)) {
      if (typeof testedObject[key] == 'object') {
        testedObject = {...testedObject[key]}
      }
    } else {
      return console.log(`${testedKeys.join('.')} not exist`);
    }
  }
  return testedObject[key] ? testedObject[key] : testedObject
}
Object.prototype.prop_access = (path) => prop_access(this.path)
