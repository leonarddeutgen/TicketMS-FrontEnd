import axios from "axios";
import { bigContainer } from "../main";
import { Iticket } from "../models/ITicket";

export const updateTicketList = () => {
  axios.get("http://localhost:3000/api/tickets").then((response) => {
    console.log(response.data);
    let ticketsList: Iticket[] = response.data;
    console.log(ticketsList);
    const ticketsContainer = document.createElement("div");
    ticketsContainer.className = "ticketsContainer";

    for (let i = 0; i < ticketsList.length; i++) {
      //Create
      const ticketBox = document.createElement("div");
      const ticketNavBar = document.createElement("div");
      const ticketTitle = document.createElement("p");
      const ticketStatusBtn = document.createElement("button");
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
      ticketStatusBtn.className = "navBar--statusBtn";

      ticketTextBox.className = "textBox";
      ticketText.className = "textBox--text";

      ticketFooter.className = "footer";
      ticketOrderNo.className = "footer--order";
      ticketItemNo.className = "footer--item";
      ticketPuoNo.className = "footer--puo";

      //InnerHTML
      ticketTitle.innerHTML = ticketsList[i].title;
      ticketStatusBtn.innerHTML = ticketsList[i].color;
      ticketText.innerHTML = ticketsList[i].description;
      ticketOrderNo.innerHTML = ticketsList[i].orderNo.toLocaleString();
      ticketItemNo.innerHTML = ticketsList[i].itemNo.toString();
      ticketPuoNo.innerHTML = ticketsList[i].name;

      //Append
      ticketsContainer.appendChild(ticketBox);
      //NavBar
      ticketBox.appendChild(ticketNavBar);
      ticketNavBar.appendChild(ticketTitle);
      ticketNavBar.appendChild(ticketStatusBtn);
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
