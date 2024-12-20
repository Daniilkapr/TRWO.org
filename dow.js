function white(){
    document.getElementById("body").style.background = "white";
    document.getElementById("dobr").style.color = "black";
    document.getElementById("sat").style.color = "black";
    document.getElementById("avtor").style.color = "black";
    document.getElementById('temn').style.background = "white";
    document.getElementById('temn').style.color = "black";
    document.getElementById('svet').style.background = "white";
    document.getElementById('svet').style.color = "black";
    document.getElementById('tema').style.color = "black";
    document.getElementById('as').style.color = "black";
    document.getElementById('russian').style.background = "white";
    document.getElementById('russian').style.color = "black";
    document.getElementById('english').style.background = "white";
    document.getElementById('english').style.color = "black";
}
function black(){
    document.getElementById("dobr").style.color = "white";
    document.getElementById("sat").style.color = "white";
    document.getElementById("avtor").style.color = "white";
    document.getElementById("body").style.background = "black";
    document.getElementById('temn').style.background = "black";
    document.getElementById('temn').style.color = "white";
    document.getElementById('svet').style.background = "black";
    document.getElementById('svet').style.color = "white";
    document.getElementById('russian').style.background = "black";
    document.getElementById('russian').style.color = "white";
    document.getElementById('english').style.background = "black";
    document.getElementById('english').style.color = "white";
    document.getElementById('tema').style.color = "white";
    document.getElementById('as').style.color = "white";
}
function Russian(){
    document.getElementById("dobr").innerHTML = "Добро пожаловать на мой сайт TRWO.org!";
    document.getElementById("sat").innerHTML = "Этот сайт предназначен для скачивания моих программ";
    document.getElementById("avtor").innerHTML = "Автор сайта: Русский(Russian): Даниил; Английский(English): Daniil";
    document.getElementById("tema").innerHTML = "Тема:";
    document.getElementById("svet").innerHTML = "Светлая тема";
    document.getElementById("temn").innerHTML = "Темная тема";
    document.getElementById("as").innerHTML = "Язык:";
}
function English(){
    document.getElementById("dobr").innerHTML = "Welcome to my website TRWO.org!";
    document.getElementById("sat").innerHTML = "This site is for downloading my programs";
    document.getElementById("avtor").innerHTML = "Author of the site: Русский(Russian): Даниил; Английский(English): Daniil";
    document.getElementById("tema").innerHTML = "Subject";
    document.getElementById("svet").innerHTML = "Light theme";
    document.getElementById("temn").innerHTML = "Dark theme";
    document.getElementById("as").innerHTML = "Language:";
}