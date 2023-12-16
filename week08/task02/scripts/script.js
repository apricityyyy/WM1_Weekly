let elements = $('li');
console.log(elements);

for (let i = 0; i < elements.length; i++) {
    if (i % 2 == 0) {
        console.log(elements[i]);
        elements[i].style.fontStyle = "italic";
    } else {
        elements[i].style.fontWeight = "bold";
    }
}