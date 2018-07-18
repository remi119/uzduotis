

// Galerijos 1, 2, 3 puslapis
function replace( hide, show ) {
  document.getElementById(hide).style.display="none";
  document.getElementById(show).style.display="block";
}




var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = '/img/gallery/boat.jpg';

imgArray[1] = new Image();
imgArray[1].src = '/img/gallery/moon.jpg';

imgArray[2] = new Image();
imgArray[2].src = '/img/gallery/moon1.jpg';

imgArray[3] = new Image();
imgArray[3].src = '/img/gallery/moon2.jpg';

imgArray[4] = new Image();
imgArray[4].src = '/img/gallery/moon3.jpg';

imgArray[5] = new Image();
imgArray[5].src = '/img/gallery/moon4.jpg';

imgArray[6] = new Image();
imgArray[6].src = '/img/gallery/moon5.jpg';

imgArray[7] = new Image();
imgArray[7].src = '/img/gallery/moon6.jpg';



function nextImage(i)
{
    var zet = document.getElementById("img01").src = imgArray[i-1].src;

    for(var i = 0; i < imgArray.length;i++)
    {
        if(imgArray[i].src == zet.src)
        {
            if(i === imgArray.length){
                document.getElementById(element).src = imgArray[0].src;
                break;
            }
            document.getElementById(element).src = imgArray[i+1].src;
            break;
        }
    }
}

var belekas = 1;
function clickas(i){
    nextImage(belekas += i);
}


function onClick(element) {
    document.getElementById("modal01").style.display = "block";
    document.getElementById("img01").src = element.src;
}
function closeBtn() {
    document.getElementById("modal01").style.display = "none";
}
