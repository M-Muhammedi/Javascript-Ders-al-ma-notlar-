let yas = Number(prompt("Yaşımızı giriniz : "));
let ucret = Number(prompt("ödediniz ücret : "));
console.log(typeof yas);
console.log(typeof ucret);
if(yas>=18 && ucret >= 3000){
    alert("Ehliyet sınavına girebilirsiniz.");
}else{
    alert("Ehliyet sınavına giremezsiniz..");
}