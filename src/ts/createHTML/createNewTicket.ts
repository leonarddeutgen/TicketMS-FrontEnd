import { bigContainer, headerContainer } from "../main";

const createNewTicket = () => {
  if (headerContainer && bigContainer) {
    headerContainer.innerHTML = "";
    bigContainer.innerHTML = "";
  }

  const createTicketBtn = document.createElement("button");
  createTicketBtn.className = "createTicketBtn";
  createTicketBtn.innerHTML = "Publish new ticket";
  headerContainer?.appendChild(createTicketBtn);

  const ticketContainer = document.createElement("div");
  const containerNavBar = document.createElement("div");
  const titleInput = document.createElement("input");
  const noBiggieStatus = document.createElement("input");
  const mightBeAbiggie = document.createElement("input");
  const totalyIsAbiggie = document.createElement("input");
};
