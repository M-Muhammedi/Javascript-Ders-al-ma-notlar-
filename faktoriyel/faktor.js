// -------------- FAKTORİYEL HESAPLAMA ------------------

/*

 Örnek

5 = 5.4.3.2.1 = 120
6 = 6.5.4.3.2.1 = 720

*/

let sayi = Number(prompt("Bir sayı giriniz : "));
let carpim = 1;

for(let i =1 ; i <= sayi ; i++){
    carpim=carpim*i;
}
alert("Sonuç : "+ carpim);