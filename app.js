import Circle from "./js/circle.js";
import Canvas from "./js/canvas.js";

window.addEventListener("DOMContentLoaded", () => {
  const btnCalc = document.getElementById("calc");

  const circle = new Circle();
  const canvas = new Canvas(circle);

  const btnCanvasGrid = document.getElementById("btn-canvas-grid");
  const inputCanvasGrid = document.getElementById("input-canvas-grid");
  inputCanvasGrid.value = canvas.gridCanvas;

  btnCalc.onclick = () => {
    circle.positions = [];
    canvas.draw()
  };

  const btnSidebarOpen = document.getElementById("btn-sidebar-open");
  const btnSidebarClose = document.getElementById("btn-sidebar-close");
  const sidebar = document.getElementById("sidebar"); let show = false;

  const sidebarHandleClick = () => {
    if (!show) {
      sidebar.style.right = "0px";
      show = true;
    } else {
      sidebar.style.right = "-420px";
      show = false;
    }
  }

  btnSidebarOpen.addEventListener("click", sidebarHandleClick);
  btnSidebarClose.addEventListener("click", sidebarHandleClick);
  btnCanvasGrid.addEventListener("click", () => {
    const alertSidebar = document.getElementById("alert-sidebar");
    // Canvas size squares controller
    if (inputCanvasGrid.value < 10) {
      alertSidebar.innerText = "El número debe ser mayor a 10 metros."
      alertSidebar.classList.remove("d-none");
    } else {
      canvas.gridCanvas = parseInt(inputCanvasGrid.value);
      canvas.clearContext();
      alertSidebar.classList.add("d-none");
    }
  });
});
