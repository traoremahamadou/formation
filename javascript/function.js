 /**
  * Cree un post en utilisant l'API JSONPlaceholder et l'affiche dans la page HTML.
  * @param{{title:string, body:string}} post - Un objet contenant le titre et le corps du post à créer.
  * @returns {HTMLElementElement} - L'élément HTML représentant le post créé.
  */


 function createPostElement(post) {
    const postElement = document.createElement('div');
    postElement.append(createPostElementWith('h2', post.title),
     createPostElementWith('p', post.body));
    return postElement;
}

function createPostElementWith(tagned,contente) {
    const postElement = document.createElement(tagned);
    postElement.innerText = contente;
    return postElement;
}

 async function main() {
 
const lopper =document.querySelector('#lasPost');
const post = document.createElement('p');
post.innerText = 'chargement du post ...........';
lopper.append(post);
try {
const r = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
headers :{
    Accept : 'application/json'
    
};if (!r.ok) {
    throw new Error(`HTTP error! status: ${r.status}`);
  }
  const data = await r.json();
  lopper.removeChild(post);
  for (const postData of data) {
    const postElement = createPostElement(postData);
    lopper.appendChild(postElement);
  }
} catch (error) {
    lopper.innerText = 'Erreur lors du chargement du post : ' + error.message;
    lopper.style.color = 'red'; 
    return;
}
 }
 main();