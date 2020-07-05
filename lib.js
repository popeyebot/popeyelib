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

exports.shuffleArray = shuffleArray;
exports.wait = wait;
exports.makeId = makeId;