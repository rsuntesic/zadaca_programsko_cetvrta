//Osmisli i oblikuj objekt po vlastitom odabiru koji sadrži barem jednu agregaciju i kompoziciju,
//te veze na jedan i na više .
let pjevac = {
    ime: "Mladen",
    prezime: "Grdovic",
    rodni_grad: {
         naziv: "Zadar",
         zemlja: "Hrvatska"
    },
    pjevaci_iz_zadra: ["Tomislav_Ivčić", "Đani_Maršan", "Emilija_Kokić","Natali_Dizdar"],
    koncerti: [
    {
         datum: "26.09.2020.",     
         grad: "PULA",
         klub: "PRIVAT EVENT"
    },
    {
         datum: "20.11.2020.",  
         grad: "ZAGREB",
         klub: "CLUB ROKO"
    }
    ]
   }