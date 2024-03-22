import axios from "axios";
import { bigContainer } from "../main";
import { Iticket } from "../models/ITicket";
import {
  createNewTicket,
  itemInput,
  nameInput,
  orderInput,
  puoInput,
  textArea,
  titleInput,
} from "./createNewTicket";

export let ticketsList: Iticket[];
export let editedTicketID: Iticket | null = null;

export const updateTicketList = () => {
  if (bigContainer) {
    bigContainer.innerHTML = "";
  }
  axios.get("http://localhost:3000/api/tickets").then((response) => {
    console.log(response.data);
    ticketsList = response.data;
    console.log(ticketsList);
    const ticketsContainer = document.createElement("div");
    ticketsContainer.className = "ticketsContainer";

    for (let i = 0; i < ticketsList.length; i++) {
      //Create
      const ticketBox = document.createElement("div");
      const ticketNavBar = document.createElement("div");
      const ticketTitle = document.createElement("h4");
      const editBtn = document.createElement("button");
      const nameTag = document.createElement("p");
      const ticketTextBox = document.createElement("div");
      const ticketText = document.createElement("p");
      const ticketFooter = document.createElement("div");
      const ticketOrderNo = document.createElement("p");
      const ticketItemNo = document.createElement("p");
      const ticketPuoNo = document.createElement("p");

      //Classes
      ticketBox.className = "ticketBox";

      ticketNavBar.className = "navBar";
      ticketTitle.className = "navBar--title";
      editBtn.className = "navBar--edit";
      nameTag.className = "navBar--nameTag";

      ticketTextBox.className = "textBox";
      ticketText.className = "textBox--text";

      ticketFooter.className = "footer";
      ticketOrderNo.className = "footer--order";
      ticketItemNo.className = "footer--item";
      ticketPuoNo.className = "footer--puo";

      //Check status on ticket
      if (ticketsList[i].color === "easy") {
        ticketNavBar.classList.add("easyColor");
        ticketFooter.classList.add("easyColor");
      }
      if (ticketsList[i].color === "medium") {
        ticketNavBar.classList.add("mediumColor");
        ticketFooter.classList.add("mediumColor");
      }
      if (ticketsList[i].color === "hard") {
        ticketNavBar.classList.add("hardColor");
        ticketFooter.classList.add("hardColor");
      }

      //InnerHTML
      ticketTitle.innerHTML = ticketsList[i].title;
      editBtn.innerHTML = "Edit";
      nameTag.innerHTML = ticketsList[i].name;
      ticketText.innerHTML = ticketsList[i].description;
      ticketOrderNo.innerHTML = ticketsList[i].orderNo.toString();
      ticketItemNo.innerHTML = ticketsList[i].itemNo.toString();
      ticketPuoNo.innerHTML = ticketsList[i].puoNo;

      //Edit button AddEventListener
      editBtn.addEventListener("click", () => {
        const selectedTicket = ticketsList[i];

        titleInput.value = selectedTicket.title;
        nameInput.value = selectedTicket.name;
        textArea.value = selectedTicket.description;
        orderInput.value = selectedTicket.orderNo.toString();
        itemInput.value = selectedTicket.itemNo.toString();
        puoInput.value = selectedTicket.puoNo;

        editedTicketID = selectedTicket;
        createNewTicket();
      });

      //Append
      ticketsContainer.appendChild(ticketBox);
      //NavBar
      ticketBox.appendChild(ticketNavBar);
      ticketNavBar.appendChild(ticketTitle);
      ticketNavBar.appendChild(editBtn);
      ticketNavBar.appendChild(nameTag);
      //TextBox
      ticketBox.appendChild(ticketTextBox);
      ticketTextBox.appendChild(ticketText);
      //Footer
      ticketBox.appendChild(ticketFooter);
      ticketFooter.appendChild(ticketOrderNo);
      ticketFooter.appendChild(ticketItemNo);
      ticketFooter.appendChild(ticketPuoNo);
    }
    bigContainer?.appendChild(ticketsContainer);
  });
};
