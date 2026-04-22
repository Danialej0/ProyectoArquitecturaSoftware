document.addEventListener("DOMContentLoaded", () => {

    // Lógica del Ojito
    const togglePassword = document.querySelector("#togglePassword");
    const passwordInput = document.querySelector("#password");

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener("click", function () {
            const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
            passwordInput.setAttribute("type", type);
            this.classList.toggle("fa-eye");
            this.classList.toggle("fa-eye-slash");
        });
    }

    // Lógica del Botón Entrar
    const loginForm = document.querySelector("#loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", async function(event) {
            event.preventDefault(); 

            const email = document.querySelector("#email").value;
            const password = document.querySelector("#password").value;

            try {
                const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });

                const data = await response.json();

                if (data.success) {
                    alert( data.message); 
                } else {
                    alert(+ data.message);
                }
            } catch (error) {
                console.error("Error al intentar conectar:", error);
                alert("Error de conexión con el servidor.");
            }
        });
    }
});