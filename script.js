document.addEventListener("DOMContentLoaded", function () {
    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.length > 1) {
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // Validación de formulario y Modal
    const contactForm = document.getElementById("contactForm");
    const modalElement = document.getElementById("modalConfirmacion");
    const modalInstance = new bootstrap.Modal(modalElement);
    const formError = document.getElementById("formError");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const nombre = document.getElementById("nombre").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!nombre || !emailRegex.test(email) || !mensaje) {
                formError.textContent = "Por favor, completa todos los campos con un correo válido.";
                formError.classList.remove("d-none");
                return;
            }

            formError.classList.add("d-none");
            modalInstance.show();
            contactForm.reset();
        });
    }
});