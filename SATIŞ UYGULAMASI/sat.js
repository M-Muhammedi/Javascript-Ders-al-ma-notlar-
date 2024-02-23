// --------------- LUKANTA SATIŞ UYGULAMASI ---------------------

/*
*
DÖNER ET = 80;
DÖNER TAVUK = 50;
PİZZA = 90;
KOLA = 15;
AYRAN =10;
SU =  5;
*
*/
let doner_et = 80,
  doner_tavuk = 50,
  pizza = 90,
  kola = 15,
  ayran = 10,
  su = 5;
const yenisatir = "\r\n";
const metin =
  "----------------- Menüsüye Hoş Geldiniz. -------------------" +
  yenisatir +
  "1- Siparişiniz için [ 1 ] Tuşlayın" +
  yenisatir +
  "*- Döner Et  80 TL" +
  yenisatir +
  "*- Döner Tavuk  50 TL " +
  yenisatir +
  "*- Pizza   90 TL" +
  yenisatir +
  "*- Kola  15 TL" +
  yenisatir +
  "*- Ayran  10 TL " +
  yenisatir +
  "*- Su  5 TL " +
  yenisatir +
  "Siparişiniz için 1 Sayı Giriniz : ";

let menu = prompt(metin);
if (menu == "1") {
  let doner_et_s = Number(prompt("Döner Et Sayısını Giriniz : "));
  let doner_tavuk_s = Number(prompt("Döner Tavuk Sayısını Giriniz :"));
  let pizza_s = Number(prompt("Pizza Sayısını Giriniz : "));
  let kola_s = Number(prompt("Kola Sayısını Giriniz : "));
  let ayran_s = Number(prompt("Ayran Sayısını Giriniz : "));
  let su_s = Number(prompt("Su Sayısını Giriniz : "));

  let toplam =
    (doner_et * doner_et_s) +
    (doner_tavuk * doner_tavuk_s) +
    (pizza * pizza_s) +
    (kola * kola_s) +
    (ayran * ayran_s) +
    (su * su_s);
  alert("Toplam Hesabınız : " + toplam);
} else {
  alert("Yanlış Sayı Girdiniz : ");
}
