// SNACK 1 
function stampaDato(dato: unknown): void {
  if (dato === null) {
    console.log("Il dato è vuoto");
  } else if (Array.isArray(dato)) {
    console.log(`Array di lunghezza: ${dato.length}`);
  } else if (dato instanceof Promise) {
    dato
      .then((valoreRisolto) => {
        console.log("Promise risolta con:", valoreRisolto);
      })
      .catch((errore) => {
        console.log("Promise rifiutata con errore:", errore);
      });
  } else if (typeof dato === "string") {
    console.log(dato.toUpperCase());
  } else if (typeof dato === "number") {
    console.log(dato * 2);
  } else if (typeof dato === "boolean") {
    console.log(dato ? "Sì" : "No");
  } else {
    console.log("Tipo non supportato");
  }
}

stampaDato("ciao");                
stampaDato(21);                   
stampaDato(false);                 
stampaDato({});               
stampaDato(null);                
stampaDato([1, 2, 3]);              
stampaDato(Promise.resolve("ok")); 
stampaDato(Promise.reject("errore")); 
  
// SNACK 2
type Dipendente = {
    nome: string;             
    cognome: string;           
    annoNascita: number;        
    sesso: "m" | "f";            
    anniDiServizio: number[];     
    emailAziendale: string;       
    contratto: "indeterminato" | "determinato" | "freelance"; 
  };
  
  const marco: Dipendente = {
    nome: "Marco",
    cognome: "Verdi",
    annoNascita: 1990,
    sesso: "m",
    anniDiServizio: [2018, 2019, 2020, 2022],
    emailAziendale: "marco.verdi@azienda.com",
    contratto: "indeterminato"
  };
  
// SNACK 3
type Developer = Dipendente & {
    livelloEsperienza: "Junior" | "Mid" | "Senior";
    linguaggi?: string[];
    certificazioni: string[];
  };
  
  type ProjectManager = Dipendente & {
    teamSize: number | null;
    budgetGestito?: number;
    stakeholderPrincipali: string[];
  };
  
  const giulia: Developer = {
    nome: "Giulia",
    cognome: "Neri",
    annoNascita: 1992,
    sesso: "f",
    anniDiServizio: [2020, 2021, 2022],
    emailAziendale: "giulia.neri@azienda.com",
    contratto: "determinato",
    livelloEsperienza: "Mid",
    linguaggi: ["TypeScript", "Python"],
    certificazioni: ["AWS Certified Developer"]
  };
  
  const luca: ProjectManager = {
    nome: "Luca",
    cognome: "Bianchi",
    annoNascita: 1985,
    sesso: "m",
    anniDiServizio: [2015, 2016, 2017, 2018, 2019],
    emailAziendale: "luca.bianchi@azienda.com",
    contratto: "indeterminato",
    teamSize: 8,
    stakeholderPrincipali: ["CEO", "CTO"]
  };

  console.log(marco);
console.log(giulia);
console.log(luca);

  