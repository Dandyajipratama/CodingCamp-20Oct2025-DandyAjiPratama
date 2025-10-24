function insertName() {
    const name = prompt("Masukan nama Anda:");
    const nameElement = document.getElementById("welcomeName");
    nameElement.textContent = name;
}

function sendMessage() {
    const message = document.getElementById("message").value;
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;

    const genderEl = document.querySelector('input[name="gender"]:checked');
    const gender = genderEl ? genderEl.value : null;

    if (!name || !date || !gender || !message) {
        alert("Harap lengkapi form.");
        return;
    }

    document.getElementById("emailTime").innerText = new Date().toLocaleTimeString();
    document.getElementById("emailName").innerText = name;
    document.getElementById("emailBirth").innerText = date;
    document.getElementById("emailGender").innerText = gender;
    document.getElementById("emailMessage").innerText = message;
}

document.addEventListener("DOMContentLoaded", function () {
    insertName();

    document.getElementById("sendButton").addEventListener("click", sendMessage);

    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
});
