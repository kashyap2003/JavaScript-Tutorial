// alert("Hello")
// console.log("Hello")

// ! Challange 2: Cat Generator 

function generateCat()
{
    let image = document.createElement("img"); // This will create an element which is <img>
    let div = document.getElementById("flex-cat-gen"); // This will act on Id = "flex-cat-gen"
    // This is the source of image that will be displayed in the site
    image.src = "https://media.tenor.com/images/5e43669b9573fea08ede20a5bbbbe2df/tenor.gif"
    div.appendChild(image);
}