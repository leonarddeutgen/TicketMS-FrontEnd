import { navBar } from "../main";
import { updateTicketList } from "./updateTicketList";

export const menu = () => {
  console.log("Funktion körs");
  //Create
  const menuBtnBox = document.createElement("div");
  const menuSpan1 = document.createElement("span");
  const menuSpan2 = document.createElement("span");
  const menuSpan3 = document.createElement("span");
  const menuContainer = document.createElement("div");
  const doneCategory = document.createElement("div");
  const doneText = document.createElement("p");
  const germanCategory = document.createElement("div");
  const germanText = document.createElement("p");
  const totalCategory = document.createElement("div");
  const totalText = document.createElement("p");

  //classes
  menuBtnBox.className = "menuBtnBox";
  menuSpan1.className = "menuBtnBox--bar";
  menuSpan2.className = "menuBtnBox--bar";
  menuSpan3.className = "menuBtnBox--bar";
  menuContainer.className = "menuContainer";
  doneCategory.className = "menuContainer--category";
  germanCategory.className = "menuContainer--category";
  totalCategory.className = "menuContainer--category";

  //InnerHtml
  doneText.innerHTML = "Slutförda";
  germanText.innerHTML = "Tyskland";
  totalText.innerHTML = "Pågående";

  //AddEventListener
  menuBtnBox.addEventListener("click", () => {
    menuBtnBox.classList.toggle("active");
    menuContainer.classList.toggle("active");
  });
  totalCategory.addEventListener("click", () => {
    updateTicketList();
  });

  //Append
  navBar?.appendChild(menuBtnBox);
  menuBtnBox.appendChild(menuSpan1);
  menuBtnBox.appendChild(menuSpan2);
  menuBtnBox.appendChild(menuSpan3);
  navBar?.appendChild(menuContainer);
  menuContainer.appendChild(doneCategory);
  doneCategory.appendChild(doneText);
  menuContainer.appendChild(germanCategory);
  germanCategory.appendChild(germanText);
  menuContainer.appendChild(totalCategory);
  totalCategory.appendChild(totalText);
};
