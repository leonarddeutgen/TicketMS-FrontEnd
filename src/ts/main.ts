import "../sass/style.css";
import { createNewTicket } from "./createHTML/createNewTicket";
import { updateTicketList } from "./createHTML/updateTicketList";

//Update page
export const navBar = document.getElementById("navbar");
export const headerContainer = document.getElementById("header");
export const bigContainer = document.getElementById("main");

export const mainCreateHTML = () => {
  const createTicketBtn = document.createElement("button");

  createTicketBtn.className = "createTicketBtn";
  createTicketBtn.innerHTML = "Create new ticket";

  createTicketBtn.addEventListener("click", () => {
    createNewTicket();
  });

  headerContainer?.appendChild(createTicketBtn);
};

mainCreateHTML();
updateTicketList();
