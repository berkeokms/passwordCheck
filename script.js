var t1 = document.getElementById("t1");
var t2 = document.getElementById("t2");
var sonuc = document.getElementById("sonuc");
var kontrol = document.getElementById("kontrol");

kontrol.onclick=hesapla;

function hesapla(){

if(t1.value!="" && t2.value !="" && t1.value==t2.value)
sonuc.innerHTML="Giriş yapılıyor"; 
else if (t1.value=="" || t2.value=="" )
sonuc.innerHTML="Şifre kısımları boş bırakılamaz";
else if(t1.value!=t2.value)
sonuc.innerHTML="Sifreler eşleşmiyor.";
}

 