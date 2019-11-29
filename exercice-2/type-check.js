function type_check_v1(value, type) {
  if (!value || !type) return false
  return type == 'array' ? Array.isArray(value) : typeof value === type
}

console.log(type_check_v1(1, 'number'))
console.log(type_check_v1(['amin'], 'array'))

function type_check_v2(value, conf) {

}
function type_check_v3(value, conf) {

}
