export default function Users(p) {
    let App = document.createElement('div');
    let thediv1 = document.createElement('div');
    for (let index = 0; index < 10; index++) {
        let d = document.createElement('div');
        let Image = document.createElement('img');
        let username = document.createElement("p"); 
        username.appendChild(document.createTextNode(`User ${index+1}`))
        d.appendChild(username)
        Image.src = p[index].url;
        Image.style= "max-width: 100%;  height: auto;  margin-top: 10px;  border-radius: 5px;"
        username.style = "margin: 0;"; 
        d.className = "element"
        d.appendChild(Image)
        thediv1.appendChild(d)
   }
   App.className="App"
   thediv1.className="Users"
   App.appendChild(thediv1) 
   document.body.appendChild(App);
}