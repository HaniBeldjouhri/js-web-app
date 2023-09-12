export default function Notfound() {
    let thediv = document.createElement('div');
    let title = document.createElement('h1')
    title.textContent = "Not Found 404"
    title.className = "Not"
    thediv.appendChild(title);
    thediv.className="App" 
    document.body.appendChild(thediv);       
}