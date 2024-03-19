import "../sass/style.css";
import { updateTicketList } from "./createHTML/updateTicketList";

//Update page
updateTicketList();

export const headerContainer = document.getElementById("header");
export const bigContainer = document.getElementById("main");

const mainCreateHTML = () => {
  const createTicketBtn = document.createElement("button");

  createTicketBtn.className = "createTicketBtn";

  createTicketBtn.innerHTML = "Create new ticket";

  headerContainer?.appendChild(createTicketBtn);
};

mainCreateHTML();
