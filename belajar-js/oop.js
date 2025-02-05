// // factory function

// function convertColor(r, g, b) {

//     const color = {};

//     color.r = r;
//     color.g = g;
//     color.b = b;

//     color.rgb = function () {
//         return `rgb(${this.r}, ${this.g}, ${this.b})`;
//     };

//     color.hex = function () {
//         const { r, g, b } = this;
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }


//     return color;

// };

// function createPerson(name, age, live) {
//     const result = {};

//     result.name = name;
//     result.age = age;
//     result.live = live;

//     result.person = function () {
//         const { name, age, live } = this;
//         return `Hai Nama Saya ${name} Saya Berusia ${age} dan saya tinggal di ${live}`;
//     }


//     return result;
// };


// // constructor function

// function TheCar(name, brand, year) {

//     this.name = name;
//     this.brand = brand;
//     this.year = year;

// }

// TheCar.prototype.kijang = function (country) {
//     const { name, brand, year } = this;
//     return `${name}, ${brand}, ${year}, ${country}`;
// };

// function Color(r, g, b) {

//     this.r = r;
//     this.g = g;
//     this.b = b;

// };

// Color.prototype.rgb = function () {
//     return `rgb(${this.r}, ${this.g}, ${this.b})`;
// };


// Color.prototype.hex = function () {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };



// // class object function
// class Colors {
//     constructor(r, g, b, name) {

//         this.r = r;
//         this.g = g;
//         this.b = b;
//         this.name = name;

//     }

//     colorName() {
//         return `The Color Name is ${this.name}`;
//     }


//     rgb() {
//         const { r, g, b } = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     }

//     hex() {
//         const { r, g, b } = this;
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }

//     rgba(a = 1.0) {
//         const { r, g, b } = this;
//         return `rgb(${r}, ${g}, ${b}, (${a}))`;
//     }

//     hsl() {
//         const { h, s, l } = this;
//         return `hsl(${h}, ${s}%, ${l}%)`;
//     }

//     fulllySaturated() {
//         const { h, l } = this;
//         return `hsl(${h},100%, ${l}%)`;
//     }

//     opposite() {
//         const { h, s, l } = this;
//         const newHue = (h + 180) % 360;
//         return `hsl(${newHue},${s}%, ${l}%)`;
//     }

//     calcHSL() {
//         let { r, g, b } = this;
//         r /= 255;
//         g /= 255;
//         b /= 255;

//         let cmin = Math.min(r, g, b),
//             cmax = Math.max(r, g, b),
//             delta = cmax - cmin,
//             h = 0,
//             s = 0,
//             l = 0;
//         if (delta == 0) h = 0;
//         else if (cmax == r)
//             h = ((g - b) / delta) % 6;
//         else if (cmax == g)
//             h = (b - r) / delta + 2;
//         else h = (r - g) / delta + 4;

//         h = Math.round(h * 60);
//         l = (cmax + cmin) / 2;
//         s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

//         s = +(s * 100).toFixed(1);
//         l = +(l * 100).toFixed(1);
//         this.h = h;
//         this.s = s;
//         this.l = l;
//     }
// };

// new Color();



// class myData {
//     constructor(name, age, live) {

//         this.name = name;
//         this.age = age;
//         this.live = live;

//     }

//     man(gender = 'Man') {
//         const { name, age, live } = this;
//         return `Name: ${name} - Age: ${age} - From: ${live} || ${gender}`
//     }


//     Women(gender = 'Women') {
//         const { name, age, live } = this;
//         return `Name: ${name} - Age: ${age} - From: ${live} || ${gender}`
//     }
// };



// // OOP,EXtand dan fungsi Super

// class Peliharaan {

//     constructor(name, age) {

//         this.name = name;
//         this.age = age;

//     }

//     makan() {
//         return `${this.name} Lagi Makan`;
//     }

// };



// class Kucing extends Peliharaan {
//     meong() {
//         return `Meongg`;
//     }
// };


// class Anjeng extends Peliharaan {
//     gonGong() {
//         return `Guk Guk!!`;
//     }
// };