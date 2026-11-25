const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu");

menuButton?.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

const missionList = document.querySelector(".service-missions");
const missionFeedback = document.querySelector(".mission-feedback");

missionList?.addEventListener("click", (event) => {
  const button = event.target.closest(".mission-button");
  if (!button) return;

  const wasSelected = button.getAttribute("aria-pressed") === "true";
  missionList.querySelectorAll(".mission-button").forEach((mission) => {
    mission.setAttribute("aria-pressed", "false");
  });

  if (wasSelected) {
    missionFeedback.textContent = "Aucune mission sélectionnée.";
    return;
  }

  button.setAttribute("aria-pressed", "true");
  missionFeedback.textContent = `Mission sélectionnée : ${button.textContent.trim()}.`;
});

document.querySelector("#appointment-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
});