import { navBar } from "../main";

export const menu = () => {
  console.log("Funktion körs");
  //Create
  const menuBtnBox = document.createElement("div");
  const menuSpan1 = document.createElement("span");
  const menuSpan2 = document.createElement("span");
  const menuSpan3 = document.createElement("span");
  const menuContainer = document.createElement("div");

  //classes
  menuBtnBox.className = "menuBtnBox";
  menuSpan1.className = "menuBtnBox--bar";
  menuSpan2.className = "menuBtnBox--bar";
  menuSpan3.className = "menuBtnBox--bar";
  menuContainer.className = "menuContainer";

  //AddEventListener
  menuBtnBox.addEventListener("click", () => {
    menuBtnBox.classList.toggle("active");
    menuContainer.classList.toggle("active");
  });

  //Append
  navBar?.appendChild(menuBtnBox);
  menuBtnBox.appendChild(menuSpan1);
  menuBtnBox.appendChild(menuSpan2);
  menuBtnBox.appendChild(menuSpan3);
  navBar?.appendChild(menuContainer);
};
