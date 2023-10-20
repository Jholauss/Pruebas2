const users = [
    { username: "usuario1", password: "123" },
    { username: "usuario2", password: "1234" },
    // Agrega más usuarios aquí
];

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const message = document.getElementById("message");
    const toast = document.getElementById("toast");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Verificar el usuario y la contraseña ingresados
        const user = users.find((u) => u.username === username);

        if (user && user.password === password) {
            // Inicio de sesión exitoso, mostrar toast
            showToast();
            // Espera 5 segundos antes de redirigir a la página de dashboard
            setTimeout(function () {
                window.location.href = "main.html";
            }, 2000); // Espera 5 segundos antes de redirigir
        } else {
            message.textContent = "Credenciales incorrectas. Intente nuevamente.";
        }
    });

    function showToast() {
        toast.classList.add("show");

        setTimeout(function () {
            toast.classList.remove("show");
        }, 3000); // Oculta el toast después de 3 segundos
    }
});
