const otherCheckbox = document.querySelector("#class_1");
const otherText = document.querySelector("#CLASS1");
otherText.style.visibility = "hidden";

otherCheckbox.addEventListener("change", () => {
  if (otherCheckbox.checked) {
    otherText.style.visibility = "visible";
    //otherText.value = "";
  } else {
    otherText.style.visibility = "hidden";
  }
});