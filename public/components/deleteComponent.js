export default function deleteComponent(p) {
    let element = document.querySelector(p);
    while (element) {
       element.remove();
       element = document.querySelector(p);
    }        
}