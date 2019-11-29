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
        if (value != conf.value) return false;
        continue;
      case 'enum' :
        for (testedValue of conf.enum) {
          if (testedValue === value) return true;
          continue;
        }
        return false;
    }
  }
  return true;
}


function type_check_v3(value, conf) {

}
