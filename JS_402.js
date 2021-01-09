// Nadogradi prethodni zadatak na način da ime i prezime ne moraju biti istovjetni pojmu, već
//je dovoljno da taj pojam sadržavaju. Neka pretraga bude neosjetljiva na velika i mala slova. Dodaj u tu
//funkciju još jedan parametar status na način da funkcija provjerava jeli student.status
//istovjetan primljenom parametru status . Drugim riječima, ne provjerava samo upisane studente
//nego se može specificirati status upisa.
let studneti=[
    {
     ime: "Ana",
     prezime: "Anić",
     upisan: true
    },
    {
     ime: "Milan",
     prezime: "Krivic",
     upisan: false
    },
    {
     ime: "Matej",
     prezime: "Peric", 
     upisan: true  
    },
    {
     ime: "Zvonko",
     prezime: "Milic",
     upisan: true
    },
    {
     ime: "Matko",
     prezime: "Kozic",
     upisan: false
    },
    {
     ime: "Filip",
     prezime: "Krajacic",
     upisan: false
    },
    {
     ime: "Anita",
     prezime: "Orelj",
     upisan: false
    },
    {
     ime: "Milivoj",
     prezime: "Babic",
     upisan: true
    },
    {
     ime: "Robert",
     prezime: "Kumerle",
     upisan: true
    },
    {
     ime: "Predrag",
     prezime: "Bunjac",
     upisan: true
    }
];
function provjeri(studneti,pojam,status){
    
    let d=studneti.length
    let odgovor = false
    pojam = pojam.toLowerCase()

    for(let i=0; i<d; i++){
      
       let ime = studneti[i].ime.toLowerCase()
       let prezime =studneti[i].prezime.toLowerCase()
      
       let varijabla1 = ime.search(pojam)
       let varijabla2 = prezime.search(pojam)

       if ((varijabla1 != -1 || varijabla2 != -1) && studneti[i].upisan == status ) {
        odgovor = true
        }
    }
    return odgovor
}

console.log(provjeri(studneti, "Pred",true)) //->true
console.log(provjeri(studneti, "Anti",false)) //->false
console.log(provjeri(studneti, "umerle",true)) //->true
console.log(provjeri(studneti, "nte",false)) //->false