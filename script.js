  const modal = document.getElementById("myModal");
  const openBtn = document.getElementById("openModalBtn");
  const closeBtn = document.getElementById("closeModalBtn");
  const video = document.getElementById("modalVideo");

  // Open modal
  openBtn.onclick = function () {
    modal.style.display = "flex";
    video.currentTime = 0;
    video.play();
  };

  // Close modal by button
  closeBtn.onclick = function () {
    modal.style.display = "none";
    video.pause();
  };

// Close modal by clicking outside
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    video.pause();
  }
};

// Ensure video click works (mobile-friendly)
video.addEventListener("click", function (e) {
  e.stopPropagation(); // Prevent click from bubbling up to window
  window.open("https://t.me/Naga78Kh", "_blank");
});

//popup text middle screen 
// window.addEventListener('load', function () {
//     setTimeout(function () {
//       const overlay = document.getElementById('congratsOverlay');
//       overlay.style.display = 'none';
//     }, 5500); // Match this to the total animation time
//   });
 window.addEventListener('load', () => {
    const duration = 4 * 1000; // 4 seconds
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 20, spread: 360, ticks: 60, zIndex: 9999 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 10 * (timeLeft / duration);

      // Top center fall
      confetti(Object.assign({}, defaults, {
        particleCount,
        origin: { x: Math.random(), y: 0 }
      }));
    }, 250);
  });
  (function startConfettiRain() {
    const duration = Infinity; // run forever
    const interval = 200; // how often to shoot confetti (ms)
    const defaults = {
      origin: { y: 0 },
      angle: 90,
      spread: 120,
      startVelocity: 30,
      gravity: 0.7,
      ticks: 200,
      zIndex: 1,
    };

    setInterval(() => {
      confetti({
        ...defaults,
        particleCount: 5 + Math.floor(Math.random() * 5), // 5–10 particles per burst
        origin: { x: Math.random(), y: 0 }
      });
    }, interval);
  })();

  document.getElementById("openModalBtn").addEventListener("click", function () {
  const modal = document.getElementById("myModal");
  const video = document.getElementById("modalVideo");

  modal.style.display = "flex";
  video.currentTime = 0;
  video.play(); // With sound
});

//popup text middle screen 
// window.addEventListener('load', function () {
//     setTimeout(function () {
//       const overlay = document.getElementById('congratsOverlay');
//       overlay.style.display = 'none';
//     }, 5500); // Match this to the total animation time
//   });
 window.addEventListener('load', () => {
    const duration = 4 * 1000; // 4 seconds
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 20, spread: 360, ticks: 60, zIndex: 9999 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 10 * (timeLeft / duration);

      // Top center fall
      confetti(Object.assign({}, defaults, {
        particleCount,
        origin: { x: Math.random(), y: 0 }
      }));
    }, 250);
  });
  (function startConfettiRain() {
    const duration = Infinity; // run forever
    const interval = 200; // how often to shoot confetti (ms)
    const defaults = {
      origin: { y: 0 },
      angle: 90,
      spread: 120,
      startVelocity: 30,
      gravity: 0.7,
      ticks: 200,
      zIndex: 1,
    };

    setInterval(() => {
      confetti({
        ...defaults,
        particleCount: 5 + Math.floor(Math.random() * 5), // 5–10 particles per burst
        origin: { x: Math.random(), y: 0 }
      });
    }, interval);
  })();

  document.getElementById("openModalBtn").addEventListener("click", function () {
  const modal = document.getElementById("myModal");
  const video = document.getElementById("modalVideo");

  modal.style.display = "flex";
  video.currentTime = 0;
  video.play(); // With sound
});