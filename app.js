let vardas = "jonas";
let pavarde = "petraitis";
let asmensKodas = "33317131234";

if (vardas.length >= 3 && pavarde.length >= 5){
    console.log("Tinkamas vardas ir pavarde")
}else {
    console.log("Netinkamas vardas arba pavarde")
}

vardas = vardas[0].toUpperCase() + vardas.slice(1).toLowerCase();{
    console.log(vardas);
}

pavarde = pavarde.toUpperCase();{
    console.log(pavarde);
}

let pirmasSkaitmuo = asmensKodas[0];
let gimimoMetai = asmensKodas.slice(1, 3);
let gimimoMenesis = asmensKodas.slice(3, 5);
let gimimoDiena = asmensKodas.slice(5, 7);

let simtmetis = (asmensKodas[0] == '1' || asmensKodas[0] == '2') ? "18" :
(asmensKodas[0] == '3' || asmensKodas[0] == '4') ? "19" :
(asmensKodas[0] == '5' || asmensKodas[0] == '6') ? "20" :
"neteisingas";

if (simtmetis !== "Neteisingas asmens kodas"){
    console.log(`Gimimo data ${simtmetis+gimimoMetai}-${gimimoMenesis}-${gimimoDiena}`);
} else {
    console.log("Neteisingas asmens kodas");
}

let treciasSkaitmuo = asmensKodas[3];
let gimimoVieta = "Gimimo vieta: Nezinoma";
switch(treciasSkaitmuo){
    case '1':
    case '2':
        gimimoVieta = "Gimimo vieta: Lietuva";
        break;
    case '3':
        gimimoVieta = "Gimimo vieta: Uzsienis";
        break;
}
console.log(gimimoVieta);

if (asmensKodas.length === 11 && Number(asmensKodas)){
    console.log("Asmens kodas yra teisingas");
}else{
    console.log("Asmens kodas yra neteisingas");
}