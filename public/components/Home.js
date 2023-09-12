export default function Home(data) {
    let thediv = document.createElement('div');
    for (let index = 0; index < data.length; index++) {
        let d = document.createElement('div');
        let btn = document.createElement('button');
        
        let show = true;
        let di;
        btn.onclick = _ => {
            if (show) {
                di = document.createElement('div');
                let text = document.createElement('p');
                text.appendChild(document.createTextNode(`${index+1} : ${data[index].body}`))
                di.appendChild(text)
                di.className = "element"
                d.appendChild(di)
                btn.textContent = '-'
                show = false;                 
            }else {
                di.remove();
                btn.textContent = '+'
                show = true;
            }
        
        }
        d.appendChild(document.createTextNode(`${index+1} : ${data[index].title}`))
        btn.textContent = '+'
        d.appendChild(btn)
        d.className = "element"
        btn.className = "btn"
        thediv.appendChild(d)
   }
   thediv.className="App" 
   document.body.appendChild(thediv);       
}