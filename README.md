# convertObjectKeysToCamelCase
Converts object keys to camelCase format using Lodash.

## Usage

```
const convertKeysToCC = require('objectkeystoccformat');

const data = [
  {
    "a_b": 1, 
    "a_c": ["123"], 
    "a_d": [
      {"a":1, "b":2}, 
      {"a": 2, "b":1}
    ]
  }, 
  {
    "a_b": 2, 
    "b_B": { 
      "b_b-a": "123", 
      "b_b-b": { 
        "b_b-bA": 1 
      },
      "b_b-c": [ 
        [{"b_a": 1}],
        [{"b_c": null}]
      ]
    }
  }
];

console.log(convertKeysToCC(data));
```
