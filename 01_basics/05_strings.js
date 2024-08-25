const name = "Sarthak "
const repocount = 50
console.log(name + repocount + " Value ");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

// the key left to '1' key and tab key

const gamename = new String("sarthak-rawat-com")
console.log(gamename[0]);
console.log(gamename.__proto__);



console.log(gamename.length);
console.log(gamename.toUpperCase())
console.log(gamename.charAt(0));
console.log(gamename.indexOf('t'));
console.log(gamename.indexOf('-'));

const newstr = gamename.substring(0,4)
console.log(newstr);


const anotherstr = gamename.slice(-14,7)
console.log(anotherstr);


const newstr1 = "     hitesh      "
console.log(newstr1.trim());

const url = "https://sarthak.com/sarthak%20rawat"
console.log(url.replace('%20','-'))


console.log(url.includes("sarthak"));
console.log(gamename.split('-'));

console.log(gamename.split(''));





