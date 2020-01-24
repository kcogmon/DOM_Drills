// Listens for the page to load, then runs a function().
document.addEventListener("DOMContentLoaded", function() {
    let div = document.createElement("div"); // Creates <div> tag.
    div.className = "header-container"; // Gives a class name / applies styling via Bootstrap 4.
    document.body.appendChild(div); // Places the <div class="header-container"> tag into the <body> element.

    let h1 = document.createElement("h1"); // Creates an <h1> element.
    let h1Txt = document.createTextNode("This is an h1!"); 
    h1.appendChild(h1Txt); 
    h1.className = "h1"; 
    div.appendChild(h1); 

    let h2 = document.createElement("h2"); 
    let h2Txt = document.createTextNode("This is an h2!"); // Creates textual content. 
    h2.appendChild(h2Txt); 
    h2.className = "h2"; 
    div.appendChild(h2); 

    let h3 = document.createElement("h3"); 
    let h3Txt = document.createTextNode("This is an h3!");
    h3.appendChild(h3Txt); // Places the textual content into the <h3> element.
    h3.className = "h3"; 
    div.appendChild(h3);

    let h4 = document.createElement("h4"); 
    let h4Txt = document.createTextNode("This is an h4!");
    h4.appendChild(h4Txt);
    h4.className = "h4"; // Assigns a class of "h4".
    div.appendChild(h4);

    let h5 = document.createElement("h5");
    let h5Txt = document.createTextNode("This is an h5!");
    h5.appendChild(h5Txt);
    h5.className = "h5"; 
    div.appendChild(h5); // Places the <h5> element into the <div class="header-container"> tag.

    let h6 = document.createElement("h6"); 
    let h6Txt = document.createTextNode("This is an h6!");
    h6.appendChild(h6Txt);
    h6.className = "h6";
    div.appendChild(h6);

    // The array of 'myColors'.
    let myColors = [
        "#007bff", // Primary (Blue)
        "#6c757d", // Secondary (Dark Grey)
        "#28a745", // Success (Green)
        "#dc3545", // Danger (Red)
        "#ffc107", // Warning (Yellow)
        "#17a2b8", // Info (Teal)
        "#f8f9fa", // Light (Light Grey)
        "#343a40" // Dark (Black)
    ];

    // Creates getRandomColor() function.
    function getRandomColor() {
        // Randomly selects an item from 'myColors'.
        let myRandomColor = myColors[Math.floor(Math.random()*myColors.length)];
        // console.log(myNewColor); // Should print - Each item (hexadecimal color values).
        return myRandomColor; // Returns hexadecimal color value.
    };

    // Listens for the <h1> to be clicked, then runs a function().
    h1.addEventListener("click", function() {
        let myRandomColor = getRandomColor();
        h1.style.color = myRandomColor;
    });
    // Listens for the <h2> to be clicked, then runs a function().
    h2.addEventListener("click", function() {
        let myRandomColor = getRandomColor();
        h2.style.color = myRandomColor;
    });
    // Listens for the <h3> to be clicked, then runs a function().
    h3.addEventListener("click", function() {
        let myRandomColor = getRandomColor();
        h3.style.color = myRandomColor;
    });
    // Listens for the <h4> to be clicked, then runs a function().
    h4.addEventListener("click", function() {
        let myRandomColor = getRandomColor();
        h4.style.color = myRandomColor;
    });
    // Listens for the <h5> to be clicked, then runs a function().
    h5.addEventListener("click", function() {
        let myRandomColor = getRandomColor();
        h5.style.color = myRandomColor;
    });
    // Listens for the <h6> to be clicked, then runs a function().
    h6.addEventListener("click", function () {
        let myRandomColor = getRandomColor();
        h6.style.color = myRandomColor;
    });

    let btn = document.createElement("button"); 
    let btnTxt = document.createTextNode("Click to add new list item"); 
    btn.appendChild(btnTxt);
    btn.className = "btn btn-lg btn-outline-secondary my-2";
    div.appendChild(btn);

    let ul = document.createElement("ul"); 
    div.appendChild(ul); 

    let liCount = 0; // Creates 'liCount' with an initial value of 0.

    // Creates addToList() function.
    function addToList() {
        liCount++; // Adds +1 to 'liCount' with each iteration / every time the function() is called.
        let li = document.createElement("li"); 
        let liTxt = document.createTextNode("This is list item " + liCount);
        li.appendChild(liTxt);
        ul.appendChild(li);

        // Listens for the <li> to be clicked, then runs a function().
        li.addEventListener("click", function() {
            let myRandomColor = getRandomColor();
            li.style.color = myRandomColor;
        });

        // Listens for the <li> to be double clicked, then runs a function().
        li.addEventListener("dblclick", function() {
            this.remove();
        });
    };

    // Listens for the <button> to be clicked, then runs  addToList() function.
    btn.addEventListener("click", addToList);
});