let sayi = Number(prompt("1 - 7 Bir sayı giriniz :"));

switch (sayi) {
  case 1:
    console.log("Pazartesi");
    break;
  case 2:
    console.log("Salı");
    break;
  case 3:
    console.log("Çarşemba");
    break;
  case 4:
    console.log("Perşebe");
    break;
  case 5:
    console.log("Cuma");
    break;
  case 6:
    console.log("Cumartesi");
    break;
  case 7:
    console.log("Pazar");
    break;
  default:
    alert("Yanlış Girdiniz Lütfen Kontrol ederek Tekrar deneyin...");
    break;
}
