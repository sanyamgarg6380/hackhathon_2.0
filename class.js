const otherCheckbox1 = document.querySelector("#class_1");
const otherText1 = document.querySelector("#CLASS1");
otherText1.style.visibility = "hidden";

otherCheckbox1.addEventListener("change", () => {
  if (otherCheckbox1.checked) {
    otherText1.style.visibility = "visible";
    //otherText.value = "";
  } else {
    otherText1.style.visibility = "hidden";
  }
});

const otherCheckbox2 = document.querySelector("#class_2");
const otherText2 = document.querySelector("#CLASS2");
otherText2.style.visibility = "hidden";

otherCheckbox2.addEventListener("change", () => {
  if (otherCheckbox2.checked) {
    otherText2.style.visibility = "visible";
    //otherText.value = "";
  } else {
    otherText2.style.visibility = "hidden";
  }
});