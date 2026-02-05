<script>
/* ===== BOTÃO NÃO (FUJÃO MASTER) ===== */
const btnNo = document.querySelector(".no");

const moveButton = () => {
  const maxX = window.innerWidth - btnNo.offsetWidth;
  const maxY = window.innerHeight - btnNo.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  btnNo.style.position = "absolute";
  btnNo.style.left = `${x}px`;
  btnNo.style.top = `${y}px`;
  btnNo.style.transition = "all 0.2s ease";
};

btnNo.addEventListener("mouseover", moveButton);
btnNo.addEventListener("click", moveButton);

/* ===== BOTÃO SIM (FINAL FELIZ) ===== */
const btnYes = document.getElementById("yes");

btnYes.addEventListener("click", () => {
  Swal.fire({
    title: "💖",
    html: "<strong>Nada mais que a obrigação,<br>te amo ❤️</strong>",
    timer: 2500,
    timerProgressBar: true,
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
    }
  }).then(() => {
    // 👉 REDIRECIONA DEPOIS
    window.location.href = "SEU_LINK_AQUI";
  });
});
</script>
