



// definiamo un array con gli elementi della lista della spesa
const listaSpesa = [
  "Latte",
  "Pane",
  "Burro",
  "Uova",
  "Formaggio",
  "Sale",
  "verdura",
  "frutta",
  "Legumi",
  "Nutella",
];

// selezioniamo l'elemento <ul> della lista nella pagina HTML
const listaHTML = document.getElementById("lista");

// assegnamo a "i" il valore 0 
let i = 0;

// eseguiamo il ciclo while finché "i" non è inferiore alla lista 
while (i < listaSpesa.length) {
  // creiamo un nuovo elemento <li> per ogni elemento dell'array
  let nuovoElemento = document.createElement("li");
  // impostiamo il contenuto del nuovo elemento con l'elemento dell'array corrente
  nuovoElemento.innerHTML = listaSpesa[i];
  // aggiungiamo il nuovo elemento alla lista HTML
  listaHTML.appendChild(nuovoElemento);
  // incrementiamo l'indice del ciclo while
  i++;
}
