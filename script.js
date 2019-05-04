document.querySelector('body > header > div > h1').addEventListener("onload", fadeFunction)

function fadeFunction() {
    $('body').fadeIn(500);

}


document.querySelector('body > header').addEventListener()



//toggle drop down 
function myFunction() {
    let x = document.querySelector('body > div.intro > div')
    if (x.style.display === "block") {
        x.style.display = "none"
    } else {
        x.style.display = "block"
    }
}

//mouse over the drop down button
function mOver(obj) {
    obj.innerHTML = "Drop Down on Click"
}

function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
}