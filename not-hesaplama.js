// vize,final,donemNotu , harfNotu nu boş bırak puanlar arası  değişkenlerini tanımla
let vize = 100;
let final = 100;
let donemNotu = vize*0.3+final*0.7;
let harfNotu;

//harfNotu nu belirlemek için if else if kullan 
if (donemNotu>=90 && donemNotu<=100)
  harfNotu = "A";
else if (donemNotu>=80 && donemNotu<90)
  harfNotu = "B";
else if (donemNotu>=70 && donemNotu<80)
  harfNotu = "C";
else if (donemNotu>=60 && donemNotu<70)
  harfNotu = "D";
else if (donemNotu>=50 && donemNotu<60)
  harfNotu = "E";
else if (donemNotu<50 && donemNotu>=0)
  harfNotu = "F";

console.log("Dönem Notu: " + donemNotu);
console.log("Harf Notu: " + harfNotu