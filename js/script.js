function empty_cart () {
    alert("Your Cart is empty");
}

function cambia_imagen(elemento_img) {
    elemento_img.src = "images/assets/succulents-2.jpg";
}

function regresa_imagen(elemento_img) {
    elemento_img.src = "images/assets/succulents-1.jpg";
}

function eliminar_alerta() {
    var cookie = document.querySelector(".alert");
    cookie.remove();
}

