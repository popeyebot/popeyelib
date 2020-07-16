const shuffleArray = (a) => {
   var j,
      x,
      i;
   for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
   }
   return a;
}

const wait = (ms) => {
   return new Promise(resolve => setTimeout(resolve, ms));
}

const makeId = (length) => {
   var result = '';
   var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

const rNumber = (min, max) => {
   return (Math.floor(Math.random() * max) + min)
}

var oc = (str, target) => {
   return ((str.match(new RegExp(target, "gi")) || []).length)
}

var uniq = (arr) => {
   var obj = {};
   var ret_arr = [];
   for (var i = 0; i < arr.length; i++) {
      obj[arr[i]] = true;
   }
   for (var key in obj) {
      ret_arr.push(key);
   }
   return ret_arr;
}

exports.shuffleArray = shuffleArray;
exports.wait = wait;
exports.makeId = makeId;
exports.rNumber = rNumber;
exports.oc = oc;
exports.uniq = uniq;