/*
A google drive területen található a települések.txt és a városok.txt, a továbbiakban ezeket használjuk kiinduló adatnak.
A feladatok megoldásánál használja a nyíl operátort és a tömbkezelő függvényeket!*/

/* 1. feladat
A települések között "Berettyóújfalu" hanyadik helyen van? */

var strTelep =
    "Álmosd,Ártánd,Bagamér,Bakonszeg,Balmazújváros,Báránd,Bedő,Berekböszörmény,Berettyóújfalu,Bihardancsháza,Biharkeresztes,Biharnagybajom,Bihartorda,Bocskaikert,Bojt,Csökmő,Darvas,Debrecen,Derecske,Ebes,Egyek,Esztár,Folyás,Földes,Furta,Fülöp,Gáborján,Görbeháza,Hajdúbagos,Hajdúböszörmény,Hajdúdorog,Hajdúhadház,Hajdúnánás,Hajdúsámson,Hajdúszoboszló,Hajdúszovát,Hencida,Hortobágy,Hosszúpályi,Kaba,Kismarja,Kokad,Komádi,Konyár,Körösszakál,Körösszegapáti,Létavértes,Magyarhomorog,Mezőpeterd,Mezősas,Mikepércs,Monostorpályi,Nádudvar,Nagyhegyes,Nagykereki,Nagyrábé,Nyírábrány,Nyíracsád,Nyíradony,Nyírmártonfalva,Pocsaj,Polgár,Püspökladány,Sáp,Sáránd,Sárrétudvari,Szentpéterszeg,Szerep,Téglás,Tépe,Tetétlen,Tiszacsege,Tiszagyulaháza,Told,Újiráz,Újléta,Újszentmargita,Újtikos,Vámospércs,Váncsod,Vekerd,Zsáka";

    
    var arrTelep = strTelep.split(',');


/* 2. feladat
A települések között "Lánycsók" hanyadik helyen van? */

var soBer = arrTelep.indexOf('Berettyóújfalu')+1;
console.log(soBer);

var soBer = arrTelep.indexOf('Lánycsók')+1;
console.log('Lánycsók');

/* 3. feladat
Mennyi a legrövidebb település név? */

var minKar = Number.MAX_VALUE;

arrTelep.forEach((item)=>{
    (item.length < minKar) ? minKar = item.length : minKar = minKar;
    return minKar;}
    );

    console.log("Lekisebb " + minKar + "\n");

/* forach item -> funkció a => ezzel adjuk át a tömbelemet az utána lévő függvénynek  */

/* 4. feladat
Mennyi a leghosszabb település név? */

var maxKar = Number.MIN_VALUE;

arrTelep.forEach((item)=>{
    (item.length > maxKar) ? maxKar = item.length : maxKar = maxKar;
    return maxKar;}
    );

    console.log("Legnagyobb " + maxKar + "\n");

/* 5. feladat
Írassa ki a legrövidebb nevű településeket! */

arrTelep.forEach((item)=>{
    if( item.length == minKar) console.log(item);
});

/* 6. feladat
Írassa ki a leghosszabb nevű településeket! */

arrTelep.forEach((item)=>{
    if( item.length == maxKar) console.log(item);
});

/* 7. feladat
Hozzon létre új tömböt a legrövidebb nevű településekből! */

var minNames = arrTelep.filter((item)=>(item.length == minKar));
console.log(minNames);

/* 8. feladat
Hozzon létre új tömböt a leghosszabb nevű településekből! */

var maxNames = arrTelep.filter((item)=>(item.length == maxKar));
console.log(maxNames);

/* 9. feladat
A városok listából készítsen tömböt! */

strVarosok = "Balmazújváros Berettyóújfalu Biharkeresztes Debrecen Derecske Hajdúböszörmény Hajdúdorog Hajdúhadház Hajdúnánás Hajdúsámson Hajdúszoboszló Kaba Komádi Létavértes Nádudvar Nyíradony Polgár Püspökladány Téglás Tiszacsege Vámospércs";

arrVarosok = strVarosok.split(' ');
console.log(arrVarosok);

/* 10. feladat
Számolja meg, hogy a települések között hánynak a neve rövidebb mint 10 karakter és hánynak nem! */

var telNev9 = arrTelep.reduce((prev, item) => {
    if(item.length < 10) {return prev = prev+1;}
    return prev;
},0);

console.log("Rövidebb mint 10 karakter: " + telNev9);

//a prev az egy gyüjtőmező, nulláról indul, ebbe lehet számolni a feltétel szerint
//a ,0) a végén fontos, a kezdeti értékét tudom vele beállitani a prev-nek

var telNev9 = arrTelep.reduce((prev, item) => {
    if(item.length > 10) {return ++prev;}
    return prev;
},0);

console.log("Hosszab mint 10 karakter: " + telNev9); //a ++prev rövid alak is müködik, itt a

/* 11. feladat
A települések tömbből szedje ki a városokat! */

arrTelep.forEach((item, index, arr)=> {
    if(arrVarosok.find((item2) => (item == item2)))
    delete arr[index];
});

console.log(arrTelep);

/* 12. feladat
A településekből készitsen listát, ahol az elemek elválasztója:"; " !*/

var lstTelep = arrTelep.join('; ');
console.log(lstTelep);

/* 13. feladat
Ellenőrizze, hogy minden településnév hosszabb mint 3 karakter! */

var lenName = arrTelep.every((item)=>(item.length>3));
console.log(lenName); //false lesz mivel leelenőrizte és nem mindegyik hoszabb mint 3 karakter

/* 14. feladat
Nézze meg, hogy van e olyan település, melynek a neve legalább 15 karakter! */

var name15 = arrTelep.some((item)=>(item.length>14));
console.log(name15); 

/* 15. feladat
Készítsen új tömböt azokból a településekből, amelyekben nem szerepel magyar ékezetes karakter! */

/*
var engTelep = arrTelep.filter((item)=> {
    var regexp=/felsokalap \w* dollarjel/ig;
    return(regexp.test(item));
});

ezt kikommenteltem mert a felsokalap meg dollarjelet nem kerestem ki
*/