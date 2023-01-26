const trDefault = document.querySelector("tbody tr:nth-child(1)");
const trHover = document.querySelector("tbody tr:nth-child(2)");
const trFocus = document.querySelector("tbody tr:nth-child(3)");
const trDisabled = document.querySelector("tbody tr:nth-child(4)");
const trLoading = document.querySelector("tbody tr:nth-child(5)");
const trMovable = document.querySelector("tbody tr:nth-child(6)");
const wrapperResult = document.querySelector(".wrapper-result");

let buttonState = "";

trHover.addEventListener("click", () => {
  buttonState = "hover";
  wrapperResult.innerHTML = `
  <button class="${buttonState}-primary">
  INTERAJA COMIGO
  </button>
  <button class="${buttonState}-secondary">
  INTERAJA COMIGO</button>
  <button class="${buttonState}-tertiary">
  INTERAJA COMIGO
  </button>
  `;
});
trFocus.addEventListener("click", () => {
  buttonState = "focus";
  wrapperResult.innerHTML = `
      <button class="${buttonState}-primary ${buttonState}">
      INTERAJA COMIGO
      </button>
      <button class="${buttonState}-secondary ${buttonState}">
      INTERAJA COMIGO</button>
      <button class="${buttonState}-tertiary ${buttonState}">
    INTERAJA COMIGO
    </button>
    `;
});
trDisabled.addEventListener("click", () => {
  buttonState = "disabled";
  wrapperResult.innerHTML = `
    <button class="${buttonState}-primary" ${buttonState}>
    INTERAJA COMIGO
    </button>
    <button class="${buttonState}-secondary" ${buttonState}>
    INTERAJA COMIGO</button>
    <button class="${buttonState}-tertiary" ${buttonState}>
    INTERAJA COMIGO
    </button>
    `;
});
trLoading.addEventListener("click", () => {
  buttonState = "loading";
  wrapperResult.innerHTML = `
      <button class="${buttonState}-primary ${buttonState}">
      <i class="ph-circle-notch"></i>
      
      INTERAJA COMIGO
      </button>
      <button class="${buttonState}-secondary ${buttonState}">
      <i class="ph-circle-notch"></i>
      INTERAJA COMIGO</button>
      <button class="${buttonState}-tertiary ${buttonState}">
      <i class="ph-circle-notch"></i>
      INTERAJA COMIGO
      </button>
      `;
});
trMovable.addEventListener("click", () => {
  buttonState = "movable";
  wrapperResult.innerHTML = `
  <button class="${buttonState}-primary ${buttonState}">
  <i class="ph-list"></i>    
  INTERAJA COMIGO
  </button>
  <button class="${buttonState}-secondary ${buttonState}">
  <i class="ph-list"></i>
  INTERAJA COMIGO</button>
  <button class="${buttonState}-tertiary ${buttonState}">
  <i class="ph-list"></i>
  INTERAJA COMIGO
  </button>
  `;
});
trDefault.addEventListener("click", () => {
  buttonState = "default";
  wrapperResult.innerHTML = `
      <button class="${buttonState}-primary ${buttonState}">
      INTERAJA COMIGO
      </button>
      <button class="${buttonState}-secondary ${buttonState}">
      INTERAJA COMIGO</button>
      <button class="${buttonState}-tertiary ${buttonState}">
      INTERAJA COMIGO
      </button>
      `;
});
console.log(buttonState);
// function loading(event) {
//   const button = event.currentTarget;
//   button.classList.add("loading");
//   const text = button.textContent;
//   button.innerHTML = `
//   <i class="ph-circle-notch"></i>
//   ${text}
//   `;
// }
