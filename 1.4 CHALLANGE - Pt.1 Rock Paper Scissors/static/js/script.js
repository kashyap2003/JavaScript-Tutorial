// alert("Hello")
// console.log("Hello")

// ! Challang 1 : Your age in Days

function AgeInDays()
{
    let birthYear = prompt('What year were you born... Good friend?')
    let ageInDays = (2022 - birthYear) * 365

    // Creates an instance of the element the specified tag.
    let b = document.createElement('h1') // It's just the inputing type of element(Header1) like <P>, <div>, etc.

    // Creates a text string from the specified value.
    let textAnswer = document.createTextNode('You are ' + ageInDays + ' days old')

    b.setAttribute("id", "AgeInDays") // This will set h1 tag an id which is AgeInDays.  TODO: SEE INSPECT.

    b.appendChild(textAnswer); // This will add text from textAnswer to b
 
    // IN fels-box-result id it will show what's inside b.
    document.getElementById("flex-box-result").appendChild(b); 
}

function reset()
{
    // SEE we have add here AgeInDays instead of flex-box-result Because we have inputed an Id="AgeInDays" in h1 tag.
    // From function AgeinDays()
    // Remenber if you write flex-box-result insted of AgeInDays then it will remove the whole box and we cann't
    // display our next term in screen (Because flex_box was removed).
    document.getElementById('AgeInDays').remove();
}



// ! Challange 2: Cat Generator 

function generateCat()
{
    let image = document.createElement("img"); // This will create an element which is <img>
    let div = document.getElementById("flex-cat-gen"); // This will act on Id = "flex-cat-gen"
    // This is the source of image that will be displayed in the site
    image.src = "https://media.tenor.com/images/5e43669b9573fea08ede20a5bbbbe2df/tenor.gif"
    div.appendChild(image);
}


// ! Challange 3 : Rock, Paper and SCissors

