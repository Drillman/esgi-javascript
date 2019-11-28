function formatString(input) {
  return input.trim().toLowerCase();
}

function ucfirst(input) {
  if (!input || !input || typeof input != 'string') return ""
  input = input.split("")
  input[0] = input[0].toUpperCase()
  return input.join("");
}
// console.log(ucfirst('hello world'))
// console.log(ucfirst(null))
// console.log(ucfirst({test: 'hello world'}))

function capitalize(input) {
  if (!input || typeof input != 'string') return ""
  return input.toLowerCase().split(' ').map(word => {
    word = word.split("")
    word[0] = word[0] ? word[0].toUpperCase() : word[0];
    return word.join('');
  }).join(' ')
}
// console.log(capitalize(' test'))
// console.log(capitalize('_hello world'))

function camelCase(input) {
  if (!input || typeof input != 'string') return ""
  return formatString(input).replace('_', ' ').split(' ').map(word => {
    word = word.split("")
    word[0] = word[0].toUpperCase();
    return word.join('');
  }).join("")
}
// console.log(camelCase('hello world'))

function snake_case(input) {
  if (!input || typeof input != 'string') return ""
  return input.toLowerCase().split(" ").join("_")
}
// console.log(snake_case('hello world'))

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
// console.log(leet('anaconda'))

function verlan(input) {
  if (!input || typeof input != 'string') return ""
  return input.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}
// console.log(verlan('hello world'))

function yoda(input) {
  if (!input || typeof input != 'string') return ""
  return input.split(' ').reverse().join(' ')
}
// console.log(yoda('Hello world'))

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
// console.log("hna prueul xqrs prof lknqxi ohmr due no ieqt kewqsylrnp rsrn zibh gcy g dft fucge qn dhwv")
// console.log(vig('une phrase tres tres longue mais qui ne veut absolument rien dire car c est juste un test','nawakdecheznawak'))
// console.log(vig('wikipedia is shit', 'crypto'))
// console.log(vig('antiConstiTutioNnellement','foo'))

function prop_access(object, path) {
  if (!path || path.length == 0) return object;
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
// prairie = {
//   animal: { type: { name: 'chien'}}
// }
// console.log(prop_access(prairie, 'animal.type.name'))
// console.log(prop_access(prairie, 'animal.type'))
// console.log(prop_access(prairie, 'animal.gender'))
// console.log(prop_access(prairie, null))
