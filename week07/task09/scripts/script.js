let elements = document.querySelectorAll('li')

for (let i = 0; i < elements.length; i++) {
    if (i % 2 == 0) {
        elements[i].style.fontStyle = "italic";
    } else {
        elements[i].style.fontWeight = "bold";
    }
}