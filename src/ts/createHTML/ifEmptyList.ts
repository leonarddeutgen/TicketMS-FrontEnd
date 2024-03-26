import { bigContainer } from "../main";

export const TicketsListEmpty = () => {
  if (bigContainer) {
    bigContainer.innerHTML = "";
  }

  const title = document.createElement("h1");
  title.innerHTML = "Alla tickets är lösta!";
  bigContainer?.appendChild(title);
};
