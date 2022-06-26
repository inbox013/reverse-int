module.exports = function reverse (n) {
   let pos = Math.abs(n);
   let str = String(pos);
   let spl = str.split("");
   let rev = spl.reverse();
   let end = rev.join('')
   return (end);
}
