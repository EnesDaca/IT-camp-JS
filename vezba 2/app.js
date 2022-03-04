// brojGodina = prompt("Unesi koliko imas godina");

// console.log(brojGodina);

// console.log(1 > 5);
// console.log(7 > 5);
// console.log(5 >= 5);
// console.log(4 <= 5);

// console.log(5 == "5");
// console.log(5 === "5");

// console.log("D" === "D");
// console.log("D" === "D");

// console.log(Boolean(0));
// console.log(Boolean(5));

// console.log(Boolean(""));
// console.log(Boolean("ASDFGHJKL"));

// var1 = true;

// var2 = false;

// null

// console.log(Boolean(NaN));

// && AND

// || OR

// false || false === false
// true || false === true
// true || true ===true
// false||true === true

// true && true === true;
// false && false === false;
// false && true === false;
// true && false === false;

// a = 5;
// b = 10;

// console.log(a < b);

// a = prompt("Unesi broj izmedju 1 i 10");

// console.log(a < 10 && a > 1 );

// console.log(true || (false && true));

// a = prompt("Unesi broj ");

// console.log(a % 2 === 0);

// a = 5;

// b = 3;

// c = a === b;

// console.log(c);

// console.log("Daris".length);

// a = "Daris";
// console.log(a.length);

// ime = prompt("Unesi ime");
// duzina = ime.length;

// console.log("Duzina vaseg imena je : ", duzina);

// ime = "Daris";
//     01234
// console.log(ime[5]);

// a = "Daris";
// console.log(a.toUpperCase());
// console.log(a.toLowerCase());
// console.log(a.concat("Nesto"));
// console.log("Darisa".indexOf("a"));
// console.log("Darisa".includes("g"));

// str = "Apple, Banana, Kiwi";
// part = str.slice(7, 13);

// console.log(part);

// str = "Apple, Banana, Kiwidsgfhghkjlkl";
// part = str.slice(7);

// console.log(part);

// text = "Please visit Microsoft!";

// newText = text.replace("Microsoft", "W3Schools");

// console.log(newText);

// text = "kiwi,banana,daris,kiwi";

// console.log(text.split(","));

// a = 5 + 2;

// console.log("Ovaj broj je", a, "i on je u stringu");
// console.log(`Ovaj broj je ${a} i on je u stringu`);

// a = Math.random() * 100;

// console.log(Math.round(a));

// if (5 > 2) {
//   console.log("tacno je");
// }

// console.log("ostali code");
// console.log("ostali code");

// a = 150;
// b = 20;

// if (a > b) {
//   console.log("A je vece");
// }

// if (b > a) {
//   console.log("B je vece");
// }

// a = prompt("Unesi broj 1-10: ");

// if (a > 1 && a < 10) {
//   console.log("Unos je tacan");
// }

// if (a < 1 || a > 10) {
//   console.log("Unos je POGRESAN");
// }

// if (5 > 1) {
//   console.log("IF JE TACAN");
// } else {
//   console.log("IF SE NIJE IZVRSI,IZVRSIO SE ELSE");
// }

//-----------------------------------------
//Domaci:
//Napisati program da proveri da li je uneti string "dupliran",EXAMPLE:
// "darisdaris"
// console.log("daris" === "daris");
//-----------------------------------------

// a = parseInt(prompt("UNesi broj izmedju 1-7"));
// switch (a) {
//   case 1:
//     console.log("Ponedeljak");
//     break;
//   case 2:
//     console.log("Utorak");
//     break;
//   case 3:
//     console.log("Sreda");
//     break;
//   case 4:
//     console.log("Cetvertak");
//     break;
//   case 5:
//     console.log("Petak");
//     break;
//   case 6:
//     console.log("Subota");
//     break;
//   case 7:
//     console.log("Nedelja");
//     break;
//   default:
//     console.log("Pogresan UNsos");
// }

// a = parseInt(prompt("Uneis broj izmedju 0 - 100"));

// switch (true) {
//   case a > 0 && a < 30:
//     console.log("LOW");
//     break;
//   case a > 30 && a < 60:
//     console.log("Medium");
//     break;
//   case a > 70 && a < 100:
//     console.log("HIGH");
//     break;
//   default:
//     console.log("Pogresan unos");
// }

// console.log("Daris");
//------------------------------------------------------------------------

// for (i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//----------------------------------------------------------
//----------------------------------------------------------
// pocetna = parseInt(prompt("Unesi pocetnu vrednost"));
// krajnja = parseInt(prompt("Unesi kranjnu vrednost"));

// for (i = pocetna; i <= krajnja; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//----------------------------------------------------------

// for (i = 0; i <= 15; i++) {
//   if (i % 2 === 0) {
//     console.log(`Broj ${i} je paran `);
//   } else {
//     console.log(`Broj ${i} je neparan `);
//   }
// }

//----------------------------------------------------------

// pocetna = parseInt(prompt("Unesi pocetnu vrednost"));
// krajnja = parseInt(prompt("Unesi kranjnu vrednost"));

// for (i = pocetna; i <= krajnja; i++) {
//   if (i % 5 === 0 && i % 3 === 0) {
//     console.log("fizzbuzz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else {
//     console.log(i);
//   }
// }

//----------------------------------------------------------

// kolicina = parseInt(prompt("Koliko brojeve zelite da uneste"));
// sum = 0;
// for (i = 0; i < kolicina; i++) {
//   unos = parseInt(prompt("Unesi broj"));
//   sum += unos;
// }
// console.log(sum / kolicina);
//--------------------------
// pocetna = parseInt(prompt("Unesi pocetnu vrednost"));
// krajnja = parseInt(prompt("Unesi kranjnu vrednost"));

// sumP = 0;
// sumN = 0;

// for (i = pocetna; i < krajnja; i++) {
//   if (i % 2 === 0) {
//     sumP += i;
//   } else {
//     sumN += i;
//   }
// }

// console.log("Suma parnih je: ", sumP);
// console.log("Suma neparnih je: ", sumN);

//--------------------------------------
//Domaci:
//Uneti string i  za dati string ispisati svako slovo pojedinacno sa for petljom
//Example: unos: DARIS , izlaz: D A R I S
//--------------------------------------

// unos = prompt("Unesi rec");

// for (i = 0; i < unos.length; i++) {
//   console.log(unos[i]);
// }

//--------------------------------------

// for (i = 7; i > 0; i--) {
//   console.log(i);
// }

//--------------------------------------

// for (i = 0; i < 7; i++) {
//   for (j = 0; j < 7; j++) {
//     console.log("unutrasnja for", j);
//   }

//   console.log("spoljasnja for", i);
// }

//--------------------------------------

// for (i = 1; i <= 10; i++) {
//   for (j = 1; j <= 10; j++) {
//     console.log(i, "*", j, "=", i * j);
//   }
// }

//--------------------------------------

// sum = "";
// char = " *";
// for (i = 0; i < 5; i++) {
//   console.log((sum += char));
// }

//--------------------------------------

// unos = prompt("Unesi text");
// unosR = "";

// for (i = unos.length - 1; i >= 0; i--) {
//   unosR += unos[i];
// }
// if (unos === unosR) {
//   console.log("Vasa rec je palindrom");
// } else {
//   console.log("Vassa rec nije palindrom");
// }

//--------------------------------------

// unos = prompt("Unesi broj: ");

// for (i = 1; i <= unos; i++) {
//   sum = "";

//   for (j = 1; j <= i; j++) {
//     sum += i;
//   }
//   console.log(sum);
// }

//--------------------------------------
//DOmaci napraviti program da izracuna factorial unetog broja
//factorial od 5 = 1*2*3*4*5 = 120

// unos = parseInt(prompt("Unesite broj"));

// fact = 1;
// for (i = 1; i <= unos; i++) {
//   fact *= i;
// }
// console.log(fact);

// pocetna = parseInt(prompt("Unesi pocetnu vrednost"));
// krajnja = parseInt(prompt("Unesi kranjnu vrednost"));

// for (i = pocetna; i < krajnja; i++) {
//   console.log(i ** 3);
// }

// pocetna = parseInt(prompt("Unesi pocetnu vrednost"));
// krajnja = parseInt(prompt("Unesi kranjnu vrednost"));

// for (i = pocetna; i < krajnja; i++) {
//   delioci = 0;

//   for (j = 1; j <= i; j++) {
//     if (i % j === 0) {
//       delioci++;
//     }
//   }
//   if (delioci === 2) {
//     console.log(i);
//   }
// }

// prvi = parseInt(prompt("Unesi prvi broj"));
// drugi = parseInt(prompt("Unesi drugi broj"));

// for (i = prvi; i < 9000; i++) {
//   if (i % prvi === 0 && i % drugi === 0) {
//     console.log(i);
//     break;
//   }
// }

// kolicina = prompt("Unesite kolicinu:");
// sum = "";
// for (i = 0; i < kolicina; i++) {
//   unos = prompt("unesite slovo");
//   sum += unos;
// }
// console.log(sum);

// a = 6;

// sumFakt = 0;

// for (i=1; i <= a; i++) {
//     fakt = 1;

//     for (j = 1; j <=i; j++){
//     fakt = fakt * i;
// }
//     sumFakt += fakt;
// }

// console.log(sumFakt);

// ==============================================================

// for (i = 1; i <=10; i++) {
//     red = "";
//     for  (j =1; j <= 10; j++){
//     red += `${j * i} \t`;
// }   
//     console.log(red);
// }

// ====================================================================

// for (i = 1; i <= 3; i++) {
//     unos = parseInt(prompt('Unesite broj:'));
//     sum = "";
//     unos += sum;
// }
// console.log(unos += sum);


// unos = prompt('Unesite rec END:');

// while (unos !== "END") {
//     unos = prompt ('Unesite rec')
// }
// console.log(unos);

// ===============================================================

// unos = parseInt(prompt("Unesite broj: "));
// sum = 0;
// while (unos >= 0) {
//   sum += unos;
//   unos = parseInt(prompt("Unesite broj opet: "));
// }

// console.log(sum);

// ===============================================================

// unos = prompt('Unesite ime')

// while (unos.toUpperCase() !== "END") {
//     console.log(unos);
//     unos = prompt('Unesite ime')
// }
// console.log('I am done');

// ============================================================

// ocena = parseInt(prompt("Unesi ocenu 1-5"));
// zbir = 0;
// kolicina = 0;

// while (ocena >= 1 && ocena <= 5) {
//   zbir += ocena;
//   kolicina++;
//   ocena = parseInt(prompt("Unesi ocenu 1-5"));
// }

// console.log("Sredina je: ", zbir / kolicina);

// ==============================================================

// broj = Math.round(Math.random() * 10);
// unos = parseInt(prompt("Unesi broj"));

// while (unos !== broj) {
//   if (unos > broj) {
//     unos = parseInt(prompt("Broj je too high try again"));
//   } else {
//     unos = parseInt(prompt("Broj je too small try again"));
//   }
// }

// console.log("Pogodili ste broj");


//Domaci:Napraviti kalkulator koji ce sve dok korisnik ne unese STOP pitati za operaciju +,-,*,/ i nakon odabira
//pitati za dva broja na koje ce se primeniti operacija i ispisati rezultat i sve se ponoviti


// while (operator !== "STOP") {
//   prviBroj = parseInt(prompt("Unesite prvi broj"));
//   drugiBroj = parseInt(prompt("Unesite drugi broj"));
//   if (operator === "+") {
//     console.log(prviBroj + drugiBroj);
//   } else if (operator === "-") {
//     console.log(prviBroj - drugiBroj);
//   } else if (operator === "*") {
//     console.log(prviBroj * drugiBroj);
//   } else if (operator === "/") {
//     console.log(prviBroj / drugiBroj);
//   }
//   operator = prompt("Unesi operaciju");
// }

// ==================================================================

// tezina = parseInt(prompt('Unesite tezinu: '))
// visina = parseInt(prompt('Unesite visinu: '))
// bmi = tezina / visina ** 2;

// if (bmi <= 18.5){
//     console.log("Underweight");
// }
// else if (bmi <=25) {
//     console.log("Normal");
// }
// else if (bmi <=30) {
//     console.log("Overweight");
// }
// else if (bmi > 30) {
//     console.log("Obese");
// }

//======================================= 

// n = parseInt(prompt("Unesi krajnji broj"));
// brojac = 1;

// while (brojac <= n) {
//   if (brojac % 2 !== 0) {
//     console.log(brojac);
//   }
//   brojac++;
// }

// ======================================

// unos = prompt("Unesite nesto");

// while (unos !== "STOP") {
//   if (unos == 0) {
//     console.log("ZERO");
//   } else if (unos > 0) {
//     console.log("POSITIVE");
//   } else if (unos < 0) {
//     console.log("NEGATIVE");
//   }
//   unos = prompt("Unesite nesto opet");
// }

// =============================================

// pocetna = prompt("Unesi pocetnu vrednost");
// krajnju = prompt("Unesi krajnju vrednost");

// for (i = pocetna; i <= krajnju; i++) {
//   if (i % 4 === 0) {
//     console.log(i);
//   }
// }

// ===========================================

// broj = parseInt(prompt("Unesi broj"));
// brojac = 1;
// factorial = 1;

// while (brojac <= broj) {
//   factorial *= brojac;
//   brojac++;
// }
// console.log(factorial);

// =================================

// unos = prompt("Unesite rec");
// newString = unos.slice(1) + unos[0];
// console.log(newString);

// ==========================================

// a = "enes";
// a2 = a.charAt(0).toUpperCase()+a.slice(1);
// console.log(a2);

// const b = 'svako pocetno slovo je veliko';
// const arr = b.split(" ");

// for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

// }


// const b2 = arr.join(" ");
// console.log(b2);

// =======================================================

// unos = prompt ('Unesite string')
// novi = ""
// for (i=0;i.lenght-1;i++){
//     if(i===0){
//         novi+=unos[0].toUpperCase()
//     }
//     if (unos[i]==" ") {
//         novi+=unos[i+1].toUpperCase()
//     }
//     else {
//         novi+=unos[i+1]
//     }
// }
// console.log(novi);

// ==========================================

// function NumToTime(num) { 
//     var hours = Math.floor(num / 60);  
//     var minutes = num % 60;
//     if (minutes + ''.length < 2) {
//       minutes = '0' + minutes; 
//     }
//     return hours + ":" + minutes;
//   }
  
//   console.log(NumToTime(60));
//   console.log(NumToTime(61));
//   console.log(NumToTime(1236));

// ===========================================

// unos = parseInt(prompt('Unesite broj:'))

// sati = Math.floor(unos / 60)
// minuti = sati % 60;

// console.log("Sati", sati);
// console.log("Minute", minuti);
// 
// ============================================
// ARRAYS /////////// ARRAYS //////////////////
// ============================================

// unos = parseInt(prompt('Unos:'))
// arr = [];

// for (i=0;i<unos; i++){
    
//     unos2 = prompt('Unesite rec:');
//     arr[i] = unos2;
// }
// console.log(arr);

// ==========================================

// unos = parseInt(prompt("unos:"))

// arr = []

// for (i=0; i < unos; i++){
//     unos2 = prompt('Unesite array:');
//     arr[i] = unos2;
// }
// console.log(arr);

// for (i=arr.lenght - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }

// ============================================

// unos = parseInt(prompt("Unesite kolicinu:"))

// arr = []

// for (i=0; i < unos; i++){
//     unos2 = parseInt(prompt('Unesite element:'));
//     arr[i] = unos2;
// }
// sum = 0;
// for (i=0; i < arr.length; i++){
//     sum += arr[i];
// }
// console.log('Suma je:', sum);

// ================================================

// arr = [2, 12, 1, 7, 19, 74, 23, 4, 3];
// max = arr[0]

// for (i=0; i <= arr.length; i++) {
//     if (max < arr[i]){
//         max = arr[i];
//     }
// }
// console.log(max);

//============================================================

// fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits);

// newLength = fruits.push("NEW");

// console.log(fruits);
// console.log("newLength", newLength);

//============================================================

// fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits);
// returnValue = fruits.pop();
// console.log(fruits);

// console.log("RETURN=VALUE:", returnValue);

//============================================================

// fruits = ["Banana", "Orange", "Apple", "Mango"];

// strinfOfFruits = fruits.join("+");

// console.log(fruits);
// console.log(strinfOfFruits);

//============================================================

// fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits);
// a = fruits.shift();
// console.log(fruits);
// console.log(a);

//===================================================

// fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits);
// a = fruits.unshift("NOVI");
// console.log(fruits);
// console.log(a);

//===================================================

// fruits = ["Banana", "Orange", "Apple", "Mango"];

// nesto = [true, 2, "ccc", "asdsa"];

// noviAr = fruits.concat(nesto, [2, "Novi", "Treci"]);

// console.log(noviAr);

//===================================================

// fruits = ["Banana", "Orange", "Apple", "Mango"];
// deletedItems = fruits.splice(1, 2, "NOVIIII", "Nesto");

// console.log(fruits);
// console.log(deletedItems);

//===================================================

// fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// a = fruits.slice(1, 4);
// console.log(fruits);
// console.log(a);

//===================================================

// food1 = ["Noodle", "Pasta", "Ice-cream"];
// food2 = ["Fries", "Ice-cream", "Pizza"];

// sameFood = [];

// for (i = 0; i < food1.length; i++) {
//   for (j = 0; j < food2.length; j++) {
//     if (food1[i] === food2[j]) {
//       sameFood.push(food1[i]);
//     }
//   }
// }

// console.log(sameFood);

//===================================================

// fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// for (fruit of fruits) {
//   console.log(fruit);
// }

//===================================================

// data = [0, 1, false, 2, undefined, 3, "", null];
// newData = [];
// for (i = 0; i < data.length; i++) {
//   if (data[i]) {
//     newData.push(data[i]);
//   }
// }

// console.log(data);
// console.log(newData);

// ========================================================

// kolicina = parseInt(prompt("Koliko zelite elemenate"));
// elements = [];
// for (i = 0; i < kolicina; i++) {
//   el = prompt("Unesi element");
//   elements.push(el);
// }
// console.log(elements);

// odabir = prompt("da li je ok?");

// while (odabir !== "0") {
//   promena = prompt("Unesite 1 da dodate element ili 2 da maknete element!");
//   inx = parseInt(prompt("Unesite index"));
//   if (promena === "1") {
//     noviEl = prompt("Unesite element");
//     elements.splice(inx, 0, noviEl);
//   } else if (promena === "2") {
//     elements.splice(inx, 1);
//   }
//   console.log(elements);
//   odabir = prompt("da li je ok?");
// }

// =====================================================

// data = [3, 21, 32, 36, 37, 56, 8, 12, 16, 18, 20, 68, 69];

// unos = parseInt(prompt("Unesite zeljeni broj: "));

// for (i=0;i<data.length;i++) {

// if (data[i] === unos){
//     console.log("Vas broj", unos, "je na indeksu", i);
//     break;
//  }
// }

// ===========================================

// arr1 = [3, 21, 32, 36, 37, 56];
// arr2 = [3, 21, 31, 36, 37, 56, 2];
// tacnost = true;

// if (arr1.length !== arr2.length) {
//   console.log("Nisu isti");
//   tacnost = false;
// } else if (tacnost) {
//   for (i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       tacnost = false;
//       break;
//     }
//   }

//   if (tacnost) {
//     console.log("Isti su");
//   } else {
//     console.log("Nisu");
//   }
// }

//==============================================================

// a = 5;
// b = 5;

// console.log(a === b);

// a = [1, 2, 3];
// b = [1, 2, 3];

// console.log(a === b);

// a = [1, 2, 3];

// b = a;

// a.pop();

// console.log(b);

// a = 5;
// b = a;
// a = 4;
// console.log(b);

// a = [3, 6, 23, 9, 44, 14, 83, 22, 5, 1];
// sum = 0;
// for (i = 0; i < a.length; i++) {
//   sum += a[i];
// }

// console.log(sum / a.length);

//==============================================

// arr = [3, 6, 0, 23, 0, 9, 44, 14, 0, 83, 22, 5, 0, 1];

// for (i = 0; i < arr.length; i++) {
//   if (arr[i] === 0) {
//     arr.splice(i, 1);
//     arr.push(0);
//   }
// }

// console.log(arr);

//==============================================

// arr = [3, 6, 23, 9, 44, 14, 0, 83, 22, 5];

// min = arr[0];
// max = arr[0];

// for (el of arr) {
//   if (el > max) {
//     max = el;
//   } else if (min > el) {
//     min = el;
//   }
// }

// console.log("Razlika je: ", max - min);

//==============================================

// arr = [3, 6, 23, 9, 44, 14, 0, 83, 22, 5];

// sadrzi = false;

// for (el of arr) {
//   if (el === 3 || el === 87) {
//     sadrzi = true;
//   }
// }

// console.log(sadrzi);

//==============================================

// arr = [3, 6, 23, 9, 44, 14, -254, 0, 83, 22, 5];

// max = arr[0];

// for (el of arr) {
//   if (Math.abs(el) > Math.abs(max)) {
//     max = el;
//   }
// }

// console.log(max);

//==============================================

// arr = [3, 6, 23, 9, 44, 14, -254, 0, 83, 22, 5];
// min1 = arr[0];
// min2 = arr[0];

// for (el of arr) {
//   if (el < min1) {
//     min1 = el;
//   } else if (el < min2 && el > min1) {
//     min2 = el;
//   }
// }

// console.log("Najmanji je", min1);
// console.log("drugi manji je", min2);

//==============================================

// function find(niz) {
//   min1 = niz[0];
//   min2 = niz[0];

//   for (el of niz) {
//     if (min1 > el) {
//       min1 = el;
//     } else if (min2 > el && min1 < el) {
//       min2 = el;
//     }
//   }
//   console.log("Najmanji je: ", min1);
//   console.log("Drugi Najmanji je: ", min2);
// }

// find([3, 5, 1, 9, 4, 2]);

//=================================================

// function find(niz) {
//   max = niz[0];
//   for (el of niz) {
//     if (Math.abs(max) <= Math.abs(el)) {
//       max = el;
//     }
//   }
//   console.log("Broj sa najvise cifara je : ", max);
// }

// find([3, 23, 843, 41, -1233, 1233]);

//========================================

// data = [3, 0, 24, 54, 0, 123, 0, 32, 63];

// function sort(niz) {
//   for (i = 0; i < niz.length; i++) {
//     if (niz[i] === 0) {
//       niz.splice(i, 1);
//       niz.push(0);
//     }
//   }
//   console.log(niz);
// }

// sort(data);

//===================================
// data = [3, 24, 54, 123, 32, 63];

// function calculateAverage(niz) {
//   sum = 0;
//   for (el of niz) {
//     sum += el;
//   }
//   console.log("Average is: ", Math.ceil(sum / niz.length));
// }

// calculateAverage(data);

// //Domaci:
// data = [3,0, 24,1, 54,0, 123,1, 32, 63];
//jedinice pomeriti na pocetak a nule na kraj
// ===============================================

// function sum (){
//    unos1 = parseInt(prompt('Unesite prvi broj:'))
//    unos2 = parseInt(prompt('Unesite drugi broj:'))
//    console.log(unos1 + unos2);
// }
// sum();
//==================================================

// function sayHello(ime){
//   console.log("Hello, ", ime);
// }
// sayHello("Enes!");

// function sum(a,b) {
//   console.log(a + b);
// }
// sum(2,3);

// ==================================================
// CODEWARSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS

// function reverseWords(str) {
//   reversedStr = "";
//   for (i=str.length; i<0; i--){
//       reversedStr += str[i];
//   }
//   return reversedStr
// }
// ==================================================


  // function boolToWord ( bool) {
  //     if bool {
  //       return "Yes"
  //     }else {
  //       return "No"
  //     }
  //   }

  // ===========================================

// function noSpace(x){
//    return x.split(' ').join('');
// }

// =============================================

// function century(year){
//   return Math.ceil(year/100)
// }

// ================================================

// function findNeedle(haystack) {
//     return 'found the needle at position ' + haystack.IndexOf('needle');
// }
// 
// ================================================

// function basicOp(operation, value1, value2)
// {
//   if (operation === '+'){
//       return value1 + value2;
//       }
//   else if (operation === '*'){
//            return value1 * value2;
//            }
//   else if (operation === '/'){
//            return value1 / value2;
//            }
//   else if (operation === '-'){
//            return value1 - value2;
//            }
// }

// ===================================================

// function reverseWords (str){
//   return str.reverse();
// }

// function reverseWords (str){
//   for (i=0; i<=str.length; i++){
//     return str[i].reverse();
//   }
// }

//=================================================

// function monkeyCount(n) {
//   monkeys = [];
//   for(var i=1; i<n+1; i++){
//     monkeys.push(i)
//   }
//   return monkeys;
//  }

// =================================

// function remove(strong) {
//   newString=""
//   for(i=0;i<String.length;i++){
//     if (string[i]!== "!")
//     {
//       newString+=string[i]
//     }
//   }
//   newString += "!"
//   return newString; 
// }
// 
// ================================


// const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump <= mpg * fuelLeft ? true : false
// function getAverage(marks){
//   calculates total number of marks
//   var total = 0;
//   for(var i = 0; i < marks.length; i++){
//     total += marks[i];
//   }
  
  /* returns total number of marks divided by number of marks
     rounded down to nearest integer */
//   return Math.floor(total / marks.length);
// }

// ====================================

// var library = [
//   {
//     author: "Bill Gates",
//     title: "The road ahead",
//     readingStatus: true,
//   },
//   {
//     author: "Steve Jobs",
//     title: "Apple guy",
//     readingStatus: true,
//   },
//   {
//     author: "Suzane jrad",
//     title: "Girlon",
//     readingStatus: false,
//   },
// ];

// for (let i=0; i<library.length;i++){
//   console.log(library[i].title, library[i].readingStatus);
// }


// ===================================================

// function creatingUser (){
//    const ime = prompt("Unesite ime:");
//    const prezime = prompt("unesite prezime:");
//    const godina = prompt("godine:");
//    const visina = parseInt(prompt("Unesite visinu "));
//    return {
//      ime: ime,
//      prezime: prezime,
//      godina: godina,
//      visina: visina,
//    }
// } 
// console.log(creatingUser());

// ==========================================

// const car = {
//   name: "Audi",
//   model: "A7",
// };

// const keys = Object.keys(car);

// for (let key of keys){
//   console.log(car[key]);
// }

// =========================================

// var student = {
//   name: "David Razz",
//   class: "Vi",
//   rollno: 12,
//   };

//   const keys = Object.keys(student);

//   for (let key of keys){
//     console.log(key);
//   }

// ======================================

// const student = {
//   name: "david",
//   class: "VI",
//   rollno: 2,
// };

// const keys = Object.keys(student);
// for (let key of keys){
//   console.log(key.length);
// }

// =================================

// const students = [{
//   name: "Aldin",
//   height:187,
//   gender: "male",
//   age: 28,
// },
// {
//   name: "Enes",
//   height: 197,
//   gender: "male",
//   age: 33,
// },
// {
//   name: "Medzid",
//   height: 163,
//   gender: "male",
//   age: 6,
// },
// {
//   name: "Almir",
//   height: 180,
//   gender: "male",
//   age: 17,
// },
// ];

// function filterByAge(arr) = {
//     const noviArr = [];
//      for (let el of arr){
//       if(el.age > 18){
//         noviArr.push(el);
//       }
//     }
//     return noviArr;
//    }
//    console.log(filterByAge(students));

// ======================================
// KOPIRANJE ... ADD I DODELA pROpeRTIJA SA DRUGOG oBJEKTA

// const o2 = {... o1};
// console.log(o1);
// console.log(o2);

// o2.name = "enes";
// o1.age = 21;

// console.log(o1);

// =====================================

// const data = [{
//   name: "Enes",
//   age: "12",
// },
// {
//   name: "Jasmin",
//   age: "18",
// },
// {
//   name: "Alir",
//   age: "29",
// }]

// function makePairs () {
//   const noviArr = [];
//   const keys = Object.keys(data);
//   for (let key of keys){
//     noviArr.push(key);
//   }
//   return noviArr;
// };
// console.log(makePairs());


// const keys = Object.keys(student);
// for (let key of keys){
//   console.log(key.length);
// }

// ==========================

// CALLBACK FUNKCIJE


// const numbers = [45, 4, 9, 15, 25];
// numbers.forEach((el) =>{
//   console.log(el **2);
// });

// const numbers = [42,4,9,15,25,13,38,50];
// numbers.forEach((el) => {
//   if (el % 2 === 0){
//     console.log(el);
//   }
// });

// ===============================


// const numbers = [45, 4, 9, 16, 25, 13, 38, 60, 61, 52, 29];
// const evenNumbers = [];

// numbers.forEach((el) => {
//   if (el > 20) {
//     evenNumbers.push(el);
//   }
// });

// ====================================

// let str = "the quick brown fox";

// let nStr = "";
// str = str.split("");
// str.forEach((el, i) => {
//   if (i % 2 === 0) {
//     nStr += el.toLowerCase();
//   } else {
//     nStr += el.toUpperCase();
//   }
// });

// console.log(nStr);

// ===================================

// const data = [NaN, 0, 15, false, -22, "", undefined, 47, null];
// let brojac = 0;
// data.forEach((el) => {
//   if (!Boolean(el)) {
//     brojac++;
//   }
// });
// console.log(brojac);

// ==================================

// const a = [45, 4, 25, 13, 38, 29];

// const quad = numbers.map((number) => {
//     return number ** 2;
//  });

//  console.log(quad);

//  ==================================

// function stringitUp((el) => {
//   return Array.map((el);
//   return el.toUpperCase;
//   });

// console.log(stringitUp(2,5,100));

// ==============================

// function capitalizeNames(arr){
//   return arr.map((el) =>{
//     el.toLowerCase()
//     el = el[0].toUpperCase() +el.slice(1);
//     return el;
//   });
// }

// console.log(capitalizeNames(["John","Jackob", "Jingleheimer", "schmitd"]));

// =========================
// MAPOVANJE

// function namesOnly(arr){
//         return arr.map((el)=>{
//         return el.name;
//        })
//       }

// console.log(namesOnly([
//   {
//     name: "Angelina Jolie",
//     age:20
//   },
//   {
//     name: "Eric JAmes",
//     age: 2
//   },
//   {
//     name: "Kanye West",
//     age: 30
//   }
// ]));

// ============================ISPRAVI

// function makeString(arr){
//       return arr.map((el)=>{
//         if (el.age> 18){
//           return el.name + "Farese";
//         }else {
//           return el.name + "MOBE";
//         }
//       })
// }
// console.log(namesOnly([
//     {
//       name: "Angelina Jolie",
//       age:20
//     },
//     {
//       name: "Eric JAmes",
//       age: 2
//     },
//     {
//       name: "Kanye West",
//       age: 30
//     }
//   ]));

// ==========================
// function readyToPutInTheDom(arr){
//             return arr.map((el)=>{
//             return "<h1>" + el.name + "</h1>" + "<h2>" + el.age +"</h2>";

// });
// };

// console.log(readyToPutInTheDom([
//       {
//         name: "Angelina Jolie",
//         age:20
//       },
//       {
//         name: "Eric JAmes",
//         age: 2
//       },
//       {
//         name: "Kanye West",
//         age: 30
//       }
//     ]));
  
// ============================

// function sbortText (str) {
//   str = str.split (" ");
//   const newArr = str.map((el)=>{
//     return el[0];
//   })
//    return newArr.join(".");
//   }
 
// console.log(shortText("George Raymond Diamond"));
// 
// ===========================

// const numbers = [45, 4, 9, 16, 25, 13, 38, 60, 61, 52];

// const filtered = numbers.filter((el)=>{
//   return el > 18;
// });

// console.log(filtered);

// const numbers = [45, 4, 9, 16, 25, 13, 38, 60, 61, 52];

// PRO CODE >>>>>>>>>>>>
// const even = numbers.filter((number) => number % 2 ===0);


// NOOB CODE>>>>>>>>>>>
// const parnibrojevi= numbers.filter((el)=>{
//   if (el % 2 === 0){
//     return el;
//   }
// });

// console.log(parnibrojevi);
// 
// =========================================

// const numbers = [45, 4, 9, 16, 25, 13, 38, 60, 61, 52];

// var arr = [];
// function fiveAndGreaterOnly (arr) {
//   const filtered = arr.filter((number) => number >= 5);
// }

// console.log([3,6,8,2]);

// ==========================================

// var arr = [];
// function fiveCharactersOfFewerOnly (arr) {
//  return arr.filter((el) => el.length <= 5);
// }

// console.log(fiveCharactersOfFewerOnly (["dog", "cougar", "family", "wolf", "cat"]));

// =================================================

// function peopleWhoBelongToTHeIlluminati(arr){
//   return arr.filter((el) => el.member);
// };

// console.log(peopleWhoBelongToTHeIlluminati([
//   {name : "Angelina jolie" , member: true},
//   {name : "Eric Jones", member: false},
//   {name : "Kanye West", member: true},
//   {name : "Paris Hilton", member: false},
//   {name : "Bob Ziroll", member: true}
// ]));

// =========================================

// function peopleWhoBelongToTHeIlluminati(arr){
//   return arr.filter((el) => el.age >= 18);
// };

// console.log(peopleWhoBelongToTHeIlluminati([
//   {name : "Angelina jolie" , age: 12},
//   {name : "Eric Jones", age: 22},
//   {name : "Kanye West", age: 18},
//   {name : "Paris Hilton", age: 2},
//   {name : "Bob Ziroll", age: 32}
// ]));

// ====================================

// const data = ["dog", "cougar", "family", "wolf", "cat"];

// const evenIndex = data.filter((el, i) => !(i % 2)) /*i % 2 === 0 */;

// console.log(evenIndex);


// ======================================

// const numbers = [45, 4, 9, 16];

// const isAllHigh = numbers.every((value)=> {
//   return value >18;
// });

// console.log(isAllHigh);

// =====================================

// const numbers = [44, 4, 8, 16];

// const isAllEven = numbers.every((value)=> {
//   return value % 2 === 0;
// });

// console.log(isAllEven);

// =================================


// const peoples = [
//     {name : "Angelina jolie" , age: true},
//     {name : "Eric Jones", age: false},
//     {name : "Kanye West", age: true},
//     {name : "Paris Hilton", age: false},
//     {name : "Bob Ziroll", age: true}
//   ];
  
// const isAllmembers = peoples.every((people)=> people.member);

// console.log(isAllmembers);

// ======================================

// const numbers = [45, 4, 9, 16, 25];

// const isAnyHigh = numbers.some((number) => {
//   return number> 18;
// });

// console.log(isAnyHigh);

// ========================================

// const numbers = [45, 4, 9, 13, 25];

// const isAnyEven = numbers.some((number) => {
//   return number % 2 === 0;
// });

// console.log(isAnyEven);

// =========================================
// // STRING REPEAT
// function repeatStr (n, s) {
//   return s.repeat(n);
// }

// // or

// function repeatStr (n, s) {
//   let newString = ''
//   while(n-- > 0) newString += s
//   return newString
// }
// =============================
// DISEMVOWEL TROLLS

// function disemvowel(str) {
//   var vowels = ['a', 'e', 'i', 'o', 'u'];
//   return str.split('').filter(el => vowels.indexOf(el.toLowerCase()) == -1).join('');
// }

// console.log(disemvowel('This website is for losers LOL!'));
// ===============================================================

// DESCENDING ORDER

// function descendingOrder(n){

//   return parseInt(String(n).split('').sort().reverse().join(''))

// }
// ===================================================================

// Get the Middle Character

// function getMiddle(str) {
//   var position;
//   var length;
//   if(str.length % 2 == 1) {
//       position = str.length / 2;
//       length = 1;
//   } else {
//       position = str.length / 2 - 1;
//       length = 2;
//   }

//   return str.substring(position, position + length)
// }

// console.log(getMiddle("Back2back"));

// =================================================
// Convert boolean values to strings 'Yes' or 'No'.

// function boolToWord( bool ){
//   if (bool) {
//     return 'Yes';
//   } else {
//     return 'No';
//   }
// }

// ========================================
// COUNT SHEEPS...


// function countSheeps(arrayOfSheep) {
//   return arrayOfSheep.filter(item => item === true).length
// }

// ===========================================
// SQUARE EVERY DIGIT

// function squareDigits(num){
//   let result = num
//     .toString()                     // turn number to string
//     .split("")                      // turn string into array
//     .map( num => parseInt(num) )    // map each index and return a number, now you have a number array
//     .map( num => num * num )        // map the number array and return the square of each number
//     .join("")                       // turn the number array into a string
   
//   return parseInt(result)           // turn the string into a number
// }

// =======================================
// SQUARE (N) SUM

// function squareSum(numbers) {
//   let sum = 0
//   numbers.forEach( number => {
//       sum += (number * number)
//   })
//   return sum
// }

// =====================================

// ONE ONE ONE


// function consecutiveOnes(nums) {
//   var max = 0;
//   var counter = 0;
//   for (let i=0; i <nums.length;i++ ){
//     if (nums[i] === 1){
//       counter ++;
//     } else {
//       result = Math.max(max, counter);
//     }
//   }
//   return Math.max(max, counter)
// }

// consecutiveOnes([1,1,1,0,0,1,1,0,1,0,1,1,1,1,1]);

// ====================================
