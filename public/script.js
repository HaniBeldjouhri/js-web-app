import Home from "./components/Home.js";
import Users from "./components/Users.js";
import Contact from "./components/Contact.js";
import Notfound from "./components/Notfound.js";
import deleteComponent from "./components/deleteComponent.js";

let postData;
let postData1;

async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
    const responseImages = await fetch('https://jsonplaceholder.typicode.com/photos/');
    const data = await response.json();
    const data2 = await responseImages.json();
    postData1 = data2;
    postData = data;
    console.log(postData)
    App();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

async function App() {

  let HomeClick = document.querySelector("#Home");
  let UsersClick = document.querySelector("#Users");
  let ContactClick = document.querySelector("#Contact");

  
  function updateURL(path) {
    history.pushState({}, '', path);
  }

  function handleRouteChange(route) {
    deleteComponent(".App");

    if (route === '/home') {
      Home(postData); 
    } else if (route === '/users') {
      Users(postData1);
    } else if (route === '/contact') {
      Contact()
    }else{
      Notfound()
    }
  }

  HomeClick.onclick = () => {
    deleteComponent(".App");
    updateURL('/home');
    handleRouteChange('/home');
  };

  UsersClick.onclick = () => {
    deleteComponent(".App");
    updateURL('/users');
    handleRouteChange('/users');
  };

  ContactClick.onclick = () => {
    deleteComponent(".App");
    updateURL('/contact');
    handleRouteChange('/contact');
  };

  
  window.onpopstate = function() {
    const currentPath = window.location.pathname;
    handleRouteChange(currentPath);
  };

  
  const initialPath = window.location.pathname;
  handleRouteChange(initialPath);
}


fetchData();

