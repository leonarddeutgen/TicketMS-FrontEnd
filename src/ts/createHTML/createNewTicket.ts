import { bigContainer, headerContainer } from "../main";
import { updateTicketList } from "./updateTicketList";

export const createNewTicket = () => {
  if (headerContainer && bigContainer) {
    headerContainer.innerHTML = "";
    bigContainer.innerHTML = "";
  }

  const createTicketBtn = document.createElement("button");
  createTicketBtn.className = "createTicketBtn";
  createTicketBtn.innerHTML = "Publish new ticket";
  createTicketBtn.type = "submit";
  headerContainer?.appendChild(createTicketBtn);

  //Ticket Container
  const ticketContainer = document.createElement("div");
  const containerNavBar = document.createElement("div");
  const titleInput = document.createElement("input");
  const nameInput = document.createElement("input");
  const noBiggieStatus = document.createElement("input");
  const mightBeABiggieStatus = document.createElement("input");
  const totalyABiggieStatus = document.createElement("input");
  const textArea = document.createElement("textarea");
  const containerFooter = document.createElement("div");
  const orderInput = document.createElement("input");
  const itemInput = document.createElement("input");
  const puoInput = document.createElement("input");

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

  // Publish ticket to database
  createTicketBtn.addEventListener("click", async (form) => {
    form.preventDefault();
    let url = "";
    let method = "";
    let radioBtnValue = "";

    if (noBiggieStatus.checked) {
      radioBtnValue = "easy";
      console.log(radioBtnValue);
    }
    if (mightBeABiggieStatus.checked) {
      radioBtnValue = "medium";
      console.log(radioBtnValue);
    }
    if (totalyABiggieStatus.checked) {
      radioBtnValue = "hard";
      console.log(radioBtnValue);
    }

    let ticketValue = {
      title: titleInput.value,
      name: nameInput.value,
      description: textArea.value,
      orderNo: orderInput.value,
      itemNo: itemInput.value,
      puoNo: puoInput.value,
      color: radioBtnValue,
    };

    url = "http://localhost:3000/api/newticket";
    method = "POST";

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
