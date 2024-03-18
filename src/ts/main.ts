import "../sass/style.css";



const headerContainer = document.getElementById("header");
//const mainContainer = document.getElementById("main");

const mainCreateHTML = () => {
  const createTicketBtn = document.createElement("button");

  createTicketBtn.className = "createTicketBtn";

  createTicketBtn.innerHTML = "Create new ticket";

  headerContainer?.appendChild(createTicketBtn);
};

mainCreateHTML();
