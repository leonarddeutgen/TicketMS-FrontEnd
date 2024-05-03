import { bigContainer, headerContainer, navBar } from "../main";
import { selectedTicket, updateTicketList } from "./updateTicketList";

export const titleInput = document.createElement("input");
export const nameInput = document.createElement("input");
export const noBiggieStatus = document.createElement("input");
export const mightBeABiggieStatus = document.createElement("input");
export const totalyABiggieStatus = document.createElement("input");
export const textArea = document.createElement("textarea");
export const containerFooter = document.createElement("div");
export const orderInput = document.createElement("input");
export const itemInput = document.createElement("input");
export const puoInput = document.createElement("input");

export const createNewTicket = () => {
  if (headerContainer && bigContainer && navBar) {
    headerContainer.innerHTML = "";
    bigContainer.innerHTML = "";
    navBar.innerHTML = "";
  }
  const buttonContainer = document.createElement("div");
  const deleteBtn = document.createElement("button");
  const markAsDone = document.createElement("button");

  //Delete btn appears if we pressed edit
  if (selectedTicket !== null) {
    buttonContainer.className = "buttonContainer";
    deleteBtn.className = "buttonContainer--delete";
    markAsDone.className = "buttonContainer--markAsDone";
    deleteBtn.innerHTML = "Radera ticket";
    markAsDone.innerHTML = "Markera som klar";

    deleteBtn.addEventListener("click", async () => {
      const confirmMessage = "Är du säker på att du vill radera denna ticket?";
      if (confirm(confirmMessage)) {
        let url = "http://localhost:3000/api/tickets/" + selectedTicket?.id;
        let method = "DELETE";

        let response = await fetch(url, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: method,
          body: JSON.stringify(selectedTicket),
        });

        if (response.status == 404) {
          console.log("Can't find ticket");
        }
        updateTicketList();
      } else {
        createNewTicket();
      }
    });

    markAsDone.addEventListener("click", async () => {
      let url = "http://localhost:3000/api/editticket/" + selectedTicket?.id;
      let method = "PUT";

      let radioBtnValue = "";

      if (noBiggieStatus.checked) {
        radioBtnValue = "easy";
      }
      if (mightBeABiggieStatus.checked) {
        radioBtnValue = "medium";
      }
      if (totalyABiggieStatus.checked) {
        radioBtnValue = "hard";
      }

      let ticketValue = {
        title: titleInput.value,
        name: nameInput.value,
        description: textArea.value,
        orderNo: orderInput.value,
        itemNo: itemInput.value,
        puoNo: puoInput.value,
        color: radioBtnValue,
        done: true,
      };

      let response = await fetch(url, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: method,
        body: JSON.stringify(ticketValue),
      });

      if (response.status == 422) {
        console.log("Najs bra");
      }
      updateTicketList();
    });
  }

  //Cancel ticket button
  const cancelTicket = document.createElement("button");
  cancelTicket.className = "cancelTicket";
  cancelTicket.innerHTML = "Avbryt";

  cancelTicket.addEventListener("click", () => {
    updateTicketList();
  });
  navBar?.appendChild(cancelTicket);

  //Create tickeet button
  const createTicketBtn = document.createElement("button");
  createTicketBtn.className = "createTicketBtn";
  createTicketBtn.innerHTML = "Publish new ticket";
  createTicketBtn.type = "submit";
  headerContainer?.appendChild(createTicketBtn);

  //Ticket Container
  const ticketContainer = document.createElement("div");
  const containerNavBar = document.createElement("div");

  //Classes
  ticketContainer.className = "ticketContainer";
  containerNavBar.className = "containerNavBar";
  titleInput.className = "containerNavBar--title";
  nameInput.className = "containerNavBar--name";
  noBiggieStatus.className = "containerNavBar--easy";
  mightBeABiggieStatus.className = "containerNavBar--medium";
  totalyABiggieStatus.className = "containerNavBar--hard";

  noBiggieStatus.type = "radio";
  mightBeABiggieStatus.type = "radio";
  totalyABiggieStatus.type = "radio";
  noBiggieStatus.name = "statusCheck";
  mightBeABiggieStatus.name = "statusCheck";
  totalyABiggieStatus.name = "statusCheck";

  textArea.className = "textArea";

  containerFooter.className = "containerFooter";
  orderInput.className = "containerFooter--order";
  itemInput.className = "containerFooter--item";
  puoInput.className = "containerFooter--puo";

  //Inputs
  titleInput.placeholder = "Title of ticket";
  nameInput.placeholder = "Your name";
  orderInput.placeholder = "Order No";
  itemInput.placeholder = "Item No";
  puoInput.placeholder = "Puo No";

  //Append
  bigContainer?.appendChild(ticketContainer);
  ticketContainer.appendChild(containerNavBar);
  containerNavBar.appendChild(titleInput);
  containerNavBar.appendChild(nameInput);
  containerNavBar.appendChild(noBiggieStatus);
  containerNavBar.appendChild(mightBeABiggieStatus);
  containerNavBar.appendChild(totalyABiggieStatus);
  ticketContainer.appendChild(textArea);
  ticketContainer.appendChild(containerFooter);
  containerFooter.appendChild(orderInput);
  containerFooter.appendChild(itemInput);
  containerFooter.appendChild(puoInput);
  //Mark as done and delete ticket (Append)
  bigContainer?.appendChild(buttonContainer);
  buttonContainer?.appendChild(markAsDone);
  buttonContainer?.appendChild(deleteBtn);

  //AddEventListeners
  //Change color on container
  noBiggieStatus.addEventListener("click", () => {
    ticketContainer.classList.remove("mediumColor");
    ticketContainer.classList.remove("hardColor");
    ticketContainer.classList.add("easyColor");
  });
  mightBeABiggieStatus.addEventListener("click", () => {
    ticketContainer.classList.remove("easyColor");
    ticketContainer.classList.remove("hardColor");
    ticketContainer.classList.add("mediumColor");
  });
  totalyABiggieStatus.addEventListener("click", () => {
    ticketContainer.classList.remove("easyColor");
    ticketContainer.classList.remove("easyColor");

    ticketContainer.classList.add("hardColor");
  });

  // Publish ticket to database
  createTicketBtn.addEventListener("click", async (form) => {
    form.preventDefault();
    let url = "";
    let method = "";
    let radioBtnValue = "";

    if (noBiggieStatus.checked) {
      radioBtnValue = "easy";
    }
    if (mightBeABiggieStatus.checked) {
      radioBtnValue = "medium";
    }
    if (totalyABiggieStatus.checked) {
      radioBtnValue = "hard";
    }

    let ticketValue = {
      title: titleInput.value,
      name: nameInput.value,
      description: textArea.value,
      orderNo: orderInput.value,
      itemNo: itemInput.value,
      puoNo: puoInput.value,
      color: radioBtnValue,
      done: false,
    };

    //Check if we edit our create a new ticket
    if (selectedTicket === null) {
      url = "http://localhost:3000/api/newticket";
      method = "POST";
    } else {
      url = "http://localhost:3000/api/editticket/" + selectedTicket.id;
      method = "PUT";
      updateTicketList();
    }

    let response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: method,
      body: JSON.stringify(ticketValue),
    });

    if (response.status == 422) {
      console.log("Najs bra");
    }
    updateTicketList();
  });
};
