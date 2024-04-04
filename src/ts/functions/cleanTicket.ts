import {
  itemInput,
  nameInput,
  orderInput,
  puoInput,
  textArea,
  titleInput,
} from "../createHTML/createNewTicket";

export const cleanTicket = () => {
  titleInput.value = "";
  nameInput.value = "";
  textArea.value = "";
  orderInput.value = "";
  itemInput.value = "";
  puoInput.value = "";
};
