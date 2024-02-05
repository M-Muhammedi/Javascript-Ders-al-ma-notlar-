

// ------------- Aritmetik Operatörler ------------

var x = 5;
var y = 2;

console.log(x + y); // Toplama: 7
console.log(x - y); // Çıkarma: 3
console.log(x * y); // Çarpma: 10
console.log(x / y); // Bölme: 2.5
console.log(x % y); // Modül (kalan): 1

// ------------- Atama Operatörleri ------------

var a = 10;
var b = 5;

a += b; // a = a + b;
console.log(a); // 15

// ------------- Karşılaştırma Operatörleri ------------

var c = 10;
var d = "10";

console.log(c == d); // İki değer eşit mi? true
console.log(c === d); // Değerler ve tipler eşit mi? false
console.log(c !== d); // Değerler veya tipler eşit değil mi? true

// ------------- Mantıksal Operatörler ------------

var e = true;
var f = false;

console.log(e && f); // Mantıksal "ve" (AND): false
console.log(e || f); // Mantıksal "veya" (OR): true
console.log(!e); // Mantıksal "değil" (NOT): false

// ------------- Artırma ve Azaltma Operatörleri ------------

var g = 5;

g++; // g = g + 1;
console.log(g); // 6

g--; // g = g - 1;
console.log(g); // 5

// ------------- Üçlü (Ternary) Operatörü ------------

var h = 10;
var sonuc = (h > 5) ? "Büyük" : "Küçük";
console.log(sonuc); // Büyük
