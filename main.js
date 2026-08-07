const bg = document.querySelector(".bg");
const hoverTargets = document.querySelectorAll(".btn, .project-grid .card, .now-item, .contact-card, .tab");

for (const el of hoverTargets) {
	el.addEventListener("mouseenter", () => bg.classList.add("dimmed"));
	el.addEventListener("mouseleave", () => bg.classList.remove("dimmed"));
}
