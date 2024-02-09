
// ------------- SINAV NOT HARFLARI ---------------------

// AA: 90 - 100 / Başarılı
// BA: 80 - 89 / Başarılı
// BB: 75 - 79 / Başarılı
// CB: 70 - 74 / Başarılı
// CC: 60 - 69 / Başarılı
// DC: 50 - 59 / Koşullu Başarılı - Başarısız.
// DD: 40 - 49 / Başarısız.
// FD: 30 - 39 / Başarısız.
// FF: 0  - 29 / Başarısız.

let vize = Number(prompt("Vize Notunuzu giriniz :"));
let final = Number(prompt("Final Notunuzu giriniz :"));

ortalama = (vize*0.40) + (final*0.60);

if(ortalama > 90){
    console.log("Harf Notunuz AA Başarılı Ortalama Notunuz :" + ortalama);
    if(ortalama > 90){
        alert("Başarılarınızın devamını diler, her zaman en iyisi için çalışmanızı ve hedeflerinize ulaşmanızı umarız.");
    }
}
else if(ortalama >= 80 && ortalama <= 89){
    console.log("Harf Notunuz BA Başarılı Ortalama Notunuz :" + ortalama);
    if(ortalama >= 80 && ortalama <= 89){
        alert("Başarılarınızın devamını diler, her zaman en iyisi için çalışmanızı ve hedeflerinize ulaşmanızı umarız.");
    }
}
else if(ortalama >= 75 && ortalama <= 79){
    console.log("Harf Notunuz BB Başarılı Ortalama Notunuz :" + ortalama);
    if(ortalama >= 80 && ortalama <= 89){
        alert("Başarılarınızın devamını diler, her zaman en iyisi için çalışmanızı ve hedeflerinize ulaşmanızı umarız.");
    }
}
else if(ortalama >= 70 && ortalama <= 74){
    console.log("Harf Notunuz CB Başarılı Ortalama Notunuz :" + ortalama);
    if(ortalama >= 80 && ortalama <= 89){
        alert("Başarılarınızın devamını diler, her zaman en iyisi için çalışmanızı ve hedeflerinize ulaşmanızı umarız.");
    }
}
else if(ortalama >= 60 && ortalama <= 69){
    console.log("Harf Notunuz CC Başarılı Ortalama Notunuz :" + ortalama);
    if(ortalama >= 80 && ortalama <= 89){
        alert("Başarılarınızın devamını diler, her zaman en iyisi için çalışmanızı ve hedeflerinize ulaşmanızı umarız.");
    }
}
else if(ortalama >= 50 && ortalama <= 59){
    console.log("Harf Notunuz DC Koşullu Başarılı - Başarısız Ortalama Notunuz :" + ortalama);
}
else if(ortalama >= 40 && ortalama <= 49){
    console.log("Harf Notunuz DD Başarısız Ortalama Notunuz :" + ortalama);
    if(ortalama >= 80 && ortalama <= 89){
        alert("Başarısızlığın sadece bir adım olduğunu unutmayın, önemli olan yeniden denemektir.");
    }
}
else if(ortalama >= 30 && ortalama <= 39){
    console.log("Harf Notunuz FD Başarısız Ortalama Notunuz :" + ortalama);
    if(ortalama >= 80 && ortalama <= 89){
        alert("Başarısızlığın sadece bir adım olduğunu unutmayın, önemli olan yeniden denemektir.");
    }
}
else if(ortalama <= 29){
    console.log("Harf Notunuz FF Başarısız Ortalama Notunuz :" + ortalama);
    if(ortalama >= 80 && ortalama <= 89){
        alert("Başarısızlığın sadece bir adım olduğunu unutmayın, önemli olan yeniden denemektir.");
    }
}