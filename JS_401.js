// Sastavi listu od 10 studenata sa sljedećim svojstvima: ime , prezime , upisan
//(Boolean true / false ). Vrijednosti svojstava proizvoljno odaberi. Sastavi funkciju
//provjeri(lista, pojam) koja vraća true ukoliko postoji student na lista čije ime ili
//prezime je baš pojam , a upisan je.
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

function provjeri(studneti,pojam){
    
    let d=studneti.length
    let odgovor = false
   
    for(let i=0; i<d; i++){
      
       let ime = studneti[i].ime
       let prezime =studneti[i].prezime
      
       if ((ime == pojam || prezime == pojam) && studneti[i].upisan == true ) {

              odgovor = true

        }
    }
    return odgovor
}

console.log(provjeri(studneti, "Predrag")) //->true
console.log(provjeri(studneti, "Antic")) //->false
console.log(provjeri(studneti, "Kumerle")) //->true
console.log(provjeri(studneti, "Ante")) //->false