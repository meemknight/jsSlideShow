// sursa de date pe care o primim impreuna cu imaginile din directorul img
const images = [
    { "src": "img1.jpg", "alt": "1 Nature" },
    { "src": "img2.jpg", "alt": "2 Fjords" }, 
    { "src": "img3.jpg", "alt": "3 Mountains" },
    { "src": "img4.jpg", "alt": "4 Lights" }
];


let index = 0;
let image = document.getElementById("slide");
let menu = document.getElementById("meniu");

function showImage()
{
    image.src = "img//" + images[index].src;
    image.alt = images[index].alt;

    for(a = 0; a< menu.childElementCount; a++)
    {
        if(a == index)
        {
           // menu.children[a].classList = ["biluta", "activ"];
            menu.children[a].className = "biluta activ";
        }else
        {
            menu.children[a].className = "biluta";
        }

    }

}


function createBall(i)
{
    let c = document.createElement("span");
    c.className = "biluta";
    c.addEventListener("click", () => 
    {
        index = i;
        showImage();
    }
    );


    menu.appendChild(c);
}




for(i=0; i<images.length; i++)
{
    createBall(i);
}
showImage();


document.getElementById("inainte").addEventListener("click", () =>
{
    index++;
    if(index >= images.length)
    {
        index = 0;
    }

    showImage();
});

document.getElementById("inapoi").addEventListener("click", () =>
{
    index--;
    if(index < 0)
    {
        index = images.length - 1;
    }

    showImage();
});

