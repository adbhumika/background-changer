document.getElementById('red').onclick=switchToRed;
document.getElementById('grey').onclick=switchToGrey;
document.getElementById('pink').onclick=switchToPink;
document.getElementById('purple').onclick=switchToPurple;
document.getElementById('orange').onclick=switchToOrange;
document.getElementById('skyblue').onclick=switchToSkyblue;
function switchToRed(){
    document.getElementsByTagName('body')[0].style.backgroundColor='red';
    document.getElementsByTagName('body')[0].style.color='white';
}
function switchToGrey(){
    document.getElementsByTagName('body')[0].style.backgroundColor='grey';
    document.getElementsByTagName('body')[0].style.backgroundColor='lavender';
}
function switchToPink(){
    document.getElementsByTagName('body')[0].style.backgroundColor='pink';
    document.getElementsByTagName('body')[0].style.color='yellow';
}
function switchToPurple(){
    document.getElementsByTagName('body')[0].style.backgroundColor='purple';
    document.getElementsByTagName('body')[0].style.color='blue';
}
function switchToOrange(){
    document.getElementsByTagName('body')[0].style.backgroundColor='orange';
    document.getElementsByTagName('body')[0].style.color='hotpink';
}
function switchToSkyblue(){
    document.getElementsByTagName('body')[0].style.backgroundColor='skyblue';
    document.getElementsByTagName('body')[0].style.color='navy';
}