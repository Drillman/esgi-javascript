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

function type_check_v2(value, conf) {
  for (tested of Object.keys(conf)) {
    switch (tested) {
      case 'type' :
        if (!type_check_v1(value, conf.type)) return false;
        continue;
      case 'value' :
        if (value.toString() != conf.value.toString()) return false;
        continue;
      case 'enum' :
        for (testedValue of conf.enum) {
          if (testedValue.toString() == value.toString()) return true;
          continue;
        }
        return false;
    }
  }
  return true;
}
console.log(type_check_v2({test: 'test'}, {value: {test: 'test'}}))

function type_check_v3(value, conf) {

}
