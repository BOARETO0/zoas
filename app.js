document.addEventListener("DOMContentLoaded", () => {
  const btnNo = document.querySelector(".no");
  const btnYes = document.getElementById("yes");

  // --- NÃO fujão master 😈 ---
  const moveButton = () => {
    if (!btnNo) return;

    const padding = 20;
    const maxX = Math.max(0, window.innerWidth - btnNo.offsetWidth - padding);
    const maxY = Math.max(0, window.innerHeight - btnNo.offsetHeight - padding);

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    btnNo.style.position = "fixed";
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
    btnNo.style.transition = "all 0.12s ease";
    btnNo.style.zIndex = 9999;
  };

  if (btnNo) {
    btnNo.addEventListener("mouseenter", moveButton);
    btnNo.addEventListener("mouseover", moveButton);
    btnNo.addEventListener("click", (e) => {
      e.preventDefault();
      moveButton();
    });
  }

  // --- SIM com SweetAlert + redirect 💖 ---
  if (btnYes) {
    btnYes.addEventListener("click", (e) => {
      e.preventDefault();

      // fallback caso SweetAlert não carregue
      if (typeof Swal === "undefined") {
        alert("Nada mais que a obrigação, te amo ❤️");
        window.location.href = "SEU_LINK_AQUI";
        return;
      }

      Swal.fire({
        title: "💖",
        html: "<strong>Nada mais que a obrigação,<br>te amo ❤️</strong>",
        timer: 2200,
        timerProgressBar: true,
        showConfirmButton: false,
      }).then(() => {
        window.location.href = "https://www.youtube.com/watch?v=-dy1uuJa-vw";
      });
    });
  }

  // Só pra você ver no console que carregou ✅
  console.log("JS carregou certinho ✅", { btnNo, btnYes, Swal: typeof Swal });
});
