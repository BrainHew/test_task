const menuItems = document.querySelectorAll('.menu li a');

menuItems.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        menuItems.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

let dropdown = document.getElementById('contact-dropdown');

dropdown.addEventListener('change', function() {
    let selectedOption = dropdown.options[dropdown.selectedIndex].value;
    if (selectedOption === 'viber') {
        window.open('viber://chat?number=%2B375297704409', '_blank');
    } else if (selectedOption === 'whatsapp') {
        window.open('https://wa.me/375297704409', '_blank');
    }
});

function copyPhoneNumber() {
    let select = document.getElementById("contact-dropdown");
    let selectedOption = select.options[0].text;
    let tempInput = document.createElement("input");
    tempInput.value = selectedOption;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    let notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = "Номер скопирован!";
    document.body.appendChild(notification);

    setTimeout(function() {
        notification.parentNode.removeChild(notification);
    }, 600);
}

var select = document.getElementById("contact-dropdown");
select.addEventListener("mousemove", function() {
    select.style.backgroundColor = "#1e1520";
});