function type_check_v1(value, type) {
  type = type.toLowerCase();
  switch (type) {
    case 'array':
      return Array.isArray(value);
    case 'null':
      return !value;
    case 'undefined':
      return value === undefined;
    case 'object':
      if (!value || Array.isArray(value)) return false;
      return typeof value === type;
    default:
      return typeof value === type;
  }
}

console.log(type_check_v1({test: 'test'}, 'object'))
console.log(type_check_v1(['amin'], 'array'))

function type_check_v2(value, conf) {

}

function type_check_v3(value, conf) {

}
