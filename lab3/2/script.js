function random() {    
    // var randomindex = Math.floor(Math.random() * 10);
    // let text = '<img src="http://webdev.it.kmitl.ac.th/labdocs/lab3/images/' + randomindex + '.png" alt="' + randomindex + '"/>';
    // console.log(text);
    for (let i = 1; i <= 6; i++) {
        const randomIndex = Math.floor(Math.random() * 10);
        document.getElementById("image" + i).innerHTML = `<img src="http://webdev.it.kmitl.ac.th/labdocs/lab3/images/${randomIndex}.png" style="width:150px; height=fit-content"alt="${randomIndex}"/>`;
    }
}