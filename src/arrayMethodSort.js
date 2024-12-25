'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;

    const sortFunction = (a, b) => {
      const strA = String(a);
      const strB = String(b);

      if (strA < strB) {
        return -1;
      }

      if (strA > strB) {
        return 1;
      }

      return 0;
    };

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (compareFunction === undefined) {
          if (sortFunction(arr[j], arr[j + 1]) > 0) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
        } else {
          if (compareFunction(arr[j], arr[j + 1]) > 0) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          }
        }
      }
    }

    return arr;
  };
}

module.exports = applyCustomSort;
