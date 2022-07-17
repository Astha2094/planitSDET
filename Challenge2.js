const fnMax = str => {
  let lcStr = str.toLowerCase(), count = 0, res = '';
  lcStr.toLowerCase().split('').forEach(function (char) {
    let len = lcStr.split(char).length;
    if (count < len) {
      count = len;
      res = char;
    }
  });
  return 'Most repeated character in string ' + lcStr + ' is ' + res;
};

console.log(fnMax('console'));