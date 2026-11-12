// Personal details: replace these values before publishing.
const PROFILE = {
  email: "swayamshakti1609@gmail.com",
  linkedin: "https://www.linkedin.com/in/swayamshakti-samal-436ba8362/"
};

const navLinks = [...document.querySelectorAll(".nav-link")];
const pages = [...document.querySelectorAll(".page")];

function showPage(pageId, updateHash = true) {
  const target = document.getElementById(pageId);
  if (!target || !target.classList.contains("page")) return;
  pages.forEach(page => page.classList.toggle("active", page === target));
  navLinks.forEach(link => link.classList.toggle("active", link.dataset.page === pageId));
  if (updateHash && location.hash !== `#${pageId}`) history.pushState(null, "", `#${pageId}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

navLinks.forEach(link => link.addEventListener("click", event => {
  event.preventDefault();
  showPage(link.dataset.page);
}));

document.querySelectorAll("[data-go]").forEach(link => link.addEventListener("click", event => {
  event.preventDefault();
  showPage(link.dataset.go);
}));

window.addEventListener("popstate", () => showPage(location.hash.slice(1) || "home", false));
window.addEventListener("load", () => showPage(location.hash.slice(1) || "home", false));

function setContactLinks() {
  document.querySelectorAll('[data-config-link="email"]').forEach(link => {
    if (PROFILE.email) {
      link.href = `mailto:${PROFILE.email}`;
      link.removeAttribute("data-config-link");
      const label = link.querySelector("b") || document.getElementById("email-label");
      if (label) label.textContent = PROFILE.email;
    } else {
      link.addEventListener("click", event => {
        event.preventDefault();
        alert("Add your email address in script.js (PROFILE.email) to activate this link.");
      });
    }
  });
  document.querySelectorAll('[data-config-link="linkedin"]').forEach(link => {
    if (PROFILE.linkedin) {
      link.href = PROFILE.linkedin;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.removeAttribute("data-config-link");
      const label = link.querySelector("b") || document.getElementById("linkedin-label");
      if (label) label.textContent = PROFILE.linkedin.replace(/^https?:\/\/(www\.)?/, "");
    } else {
      link.addEventListener("click", event => {
        event.preventDefault();
        alert("Add your LinkedIn URL in script.js (PROFILE.linkedin) to activate this link.");
      });
    }
  });
}
setContactLinks();

const searchInput = document.getElementById("project-search");
const filterButtons = [...document.querySelectorAll(".filter")];
const projectItems = [...document.querySelectorAll(".project-item")];
const emptyState = document.getElementById("empty-state");
let activeFilter = "all";

function filterProjects() {
  const term = (searchInput.value || "").trim().toLowerCase();
  let visible = 0;
  projectItems.forEach(item => {
    const categoryMatch = activeFilter === "all" || item.dataset.category.split(" ").includes(activeFilter);
    const textMatch = `${item.dataset.search} ${item.innerText}`.toLowerCase().includes(term);
    const show = categoryMatch && textMatch;
    item.hidden = !show;
    if (show) visible++;
  });
  emptyState.hidden = visible !== 0;
}
searchInput.addEventListener("input", filterProjects);
filterButtons.forEach(button => button.addEventListener("click", () => {
  activeFilter = button.dataset.filter;
  filterButtons.forEach(item => item.classList.toggle("active", item === button));
  filterProjects();
}));

document.getElementById("year").textContent = new Date().getFullYear();
