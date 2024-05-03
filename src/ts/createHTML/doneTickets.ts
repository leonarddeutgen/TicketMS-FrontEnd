import axios from "axios";
import { bigContainer, headerContainer, navBar } from "../main";
import { Iticket } from "../models/ITicket";
import { menu } from "./sideMenu";

export const doneTicket = () => {
  if (bigContainer && headerContainer && navBar) {
    headerContainer.innerHTML = "";
    bigContainer.innerHTML = "";
    navBar.innerHTML = "";
  }
  menu();
  let doneTicketList: Iticket[] = [];
  let ticketChecker: Iticket[] = [];

  axios.get("http://localhost:3000/api/tickets").then((response) => {
    ticketChecker = response.data;

    for (let i = 0; i < ticketChecker.length; i++) {
      if (ticketChecker[i].done == true) {
        doneTicketList.push(ticketChecker[i]);
      }
    }

    const ticketsContainer = document.createElement("div");
    ticketsContainer.className = "ticketsContainer";

    for (let i = 0; i < doneTicketList.length; i++) {
      //Create
      const ticketBox = document.createElement("div");
      const ticketNavBar = document.createElement("div");
      const ticketTitle = document.createElement("h4");
      const nameTag = document.createElement("p");
      const ticketTextBox = document.createElement("div");
      const ticketText = document.createElement("p");
      const ticketFooter = document.createElement("div");
      const orderDiv = document.createElement("div");
      const ticketOrderNo = document.createElement("p");
      const itemDiv = document.createElement("div");
      const ticketItemNo = document.createElement("p");
      const puoDiv = document.createElement("div");
      const ticketPuoNo = document.createElement("p");

      //Classes
      ticketBox.className = "ticketBox";

      ticketNavBar.className = "navBar";
      ticketTitle.className = "navBar--title";
      nameTag.className = "navBar--nameTag";

      ticketTextBox.className = "textBox";
      ticketText.className = "textBox--text";

      ticketFooter.className = "footer";
      ticketOrderNo.className = "footer--order";
      ticketItemNo.className = "footer--item";
      ticketPuoNo.className = "footer--puo";

      orderDiv.className = "footer--numberDiv";
      itemDiv.className = "footer--numberDiv";
      puoDiv.className = "footer--numberDiv";

      if (doneTicketList[i].puoNo === null) {
        puoDiv.className = "footer--none";
      }

      //Check status on ticket
      if (doneTicketList[i].color === "easy") {
        ticketNavBar.classList.add("easyColor");
        ticketFooter.classList.add("easyColor");
      }
      if (doneTicketList[i].color === "medium") {
        ticketNavBar.classList.add("mediumColor");
        ticketFooter.classList.add("mediumColor");
      }
      if (doneTicketList[i].color === "hard") {
        ticketNavBar.classList.add("hardColor");
        ticketFooter.classList.add("hardColor");
      }

      //InnerHTML
      ticketTitle.innerHTML = doneTicketList[i].title;
      nameTag.innerHTML = doneTicketList[i].name;
      ticketText.innerHTML = doneTicketList[i].description;
      orderDiv.innerHTML = "Order No:";
      ticketOrderNo.innerHTML = doneTicketList[i].orderNo.toString();
      itemDiv.innerHTML = "Item No:";
      ticketItemNo.innerHTML = doneTicketList[i].itemNo.toString();
      puoDiv.innerHTML = "Puo No:";
      ticketPuoNo.innerHTML = doneTicketList[i].puoNo;

      //Append
      ticketsContainer.appendChild(ticketBox);
      //NavBar
      ticketBox.appendChild(ticketNavBar);
      ticketNavBar.appendChild(ticketTitle);
      ticketNavBar.appendChild(nameTag);
      //TextBox
      ticketBox.appendChild(ticketTextBox);
      ticketTextBox.appendChild(ticketText);
      //Footer
      ticketBox.appendChild(ticketFooter);
      ticketFooter.appendChild(orderDiv);
      orderDiv.appendChild(ticketOrderNo);
      ticketFooter.appendChild(itemDiv);
      itemDiv.appendChild(ticketItemNo);
      ticketFooter.appendChild(puoDiv);
      puoDiv.appendChild(ticketPuoNo);
    }
    bigContainer?.appendChild(ticketsContainer);
  });
};
