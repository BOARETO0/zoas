<script>
document.addEventListener("DOMContentLoaded", () => {
  /* ===== BOTÃO NÃO (FUJÃO MASTER) ===== */
  const btnNo = document.querySelector(".no");

  const moveButton = () => {
    if (!btnNo) return;

    const padding = 10; // margem pra não encostar na borda
    const maxX = Math.max(0, window.innerWidth - btnNo.offsetWidth - padding);
    const maxY = Math.max(0, window.innerHeight - btnNo.offsetHeight - padding);

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    btnNo.style.position = "fixed"; // melhor que absolute pra tela inteira
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
    btnNo.style.transition = "all 0.12s ease";
  };

  if (btnNo) {
    // foge assim que chega perto 😈
    btnNo.addEventListener("mouseenter", moveButton);
    btnNo.addEventListener("mouseover", moveButton);
    btnNo.addEventListener("click", (e) => {
      e.preventDefault();
      moveButton();
    });
  } else {
    console.warn("Botão .no não encontrado no HTML.");
  }

  /* ===== BOTÃO SIM (FINAL FELIZ) ===== */
  const btnYes = document.getElementById("yes");

  if (btnYes) {
    btnYes.addEventListener("click", (e) => {
      e.preventDefault();

      // Se o SweetAlert não estiver carregado, faz fallback
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
  } else {
    console.warn('Botão #yes não encontrado no HTML.');
  }
});
</script>
