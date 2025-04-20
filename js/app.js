const hour = new Date().getHours();
if (hour >= 19 || hour < 7) {
  document.body.classList.add("dark-theme");
} else {
  document.body.classList.remove("dark-theme");
}