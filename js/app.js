window.addEventListener('DOMContentLoaded', () => {
    const time = new Date().getHours();
    const assistantText = document.getElementById('assistant-text');
  
    if (time >= 5 && time <= 11) {
      assistantText.textContent = "Good morning! Ready to explore?";
    } else if (time >= 12 && time <= 17) {
      assistantText.textContent = "Good afternoon! Check out my projects.";
    } else {
      assistantText.textContent = "Good evening! Relax and enjoy the design.";
    }
  });

  
  