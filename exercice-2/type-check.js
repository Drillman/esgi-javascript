function type_check_v1(value, type) {
  switch (type) {
    case 'array':
      return Array.isArray(value);
    case 'null':
      return !value;
    case 'undefined':
      return value === undefined;
    default:
      return typeof value === type;
  }
}

console.log(type_check_v1(1, 'number'))
console.log(type_check_v1(['amin'], 'array'))

function type_check_v2(value, conf) {

}

function type_check_v3(value, conf) {

}
