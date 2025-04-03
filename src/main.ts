// Messaggio tipizzato
const message: string = "Ciao TypeScript!";

// Mostra il messaggio nella pagina
const app = document.getElementById('app') as HTMLDivElement;
app.innerHTML = `<h1>${message}</h1>`;