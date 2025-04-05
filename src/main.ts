function getDatoDallAPI(): unknown {
    return 'bob';
  }
  
  function stampaDato(dato: string | number | boolean | unknown) {
    if (typeof dato === "string") {
      console.log(dato.toUpperCase());
    } else if (typeof dato === "number") {
      console.log(dato * 2);
    } else if (typeof dato === "boolean") {
      console.log(dato ? "Sì" : "No");
    } else {
      console.log("Tipo non supportato");
    }
  }
  
  const dato = getDatoDallAPI();
  stampaDato(dato);
  