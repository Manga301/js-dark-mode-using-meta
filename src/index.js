import "./styles.css";

let modeSelect = document.getElementById("mode-select");
let metaSelect = document.querySelector('meta[name="color-scheme"]');

modeSelect.onchange = function () {
  let modeSelectIndex = modeSelect.selectedIndex;
  let modeOptionsValue = document.getElementsByTagName("option")[
    modeSelectIndex
  ].value;

  if (modeOptionsValue === "light-mode") {
    metaSelect.removeAttribute("content");
    metaSelect.setAttribute("content", "light");
    console.log("Light mode!");
  } else if (modeOptionsValue === "dark-mode") {
    metaSelect.removeAttribute("content");
    metaSelect.setAttribute("content", "dark");
    console.log("Dark Mode!");
  }
};
