/**
 * @author Jericho Ampo <sijiboko@gmail.com>
 */

const _ = require('lodash');

function convertKeysToCamelCase(object) {
    let newObject = {};
  
    for(key in object) {
        let value = object[key];
     
        if (isValueObject(value)) {
            newObject[_.camelCase(key)] = isValueNull(value) ? value : convertKeysToCamelCase(value);
            continue;
        }
      
        newObject[_.camelCase(key)] = value;
    }
  
    if (isObjectConvertibleToArray(newObject)) {
        return convertObjectToArray(newObject);
    }
  
    return newObject;
}

function convertObjectToArray(object) {
    let arr = [];
    
    for (k in object) {
        arr.push(object[k]);
    }
    
    return arr;
}

function isValueNull(value) {
  return !value;
}

function isValueObject(value) {
  return typeof value === 'object';
}

function isObjectConvertibleToArray(object) {
  let keys = Object.keys(object);
  let total = keys.reduce((total, v) => total+v);
  
  return !isNaN(total);
}

module.exports = convertKeysToCamelCase;
