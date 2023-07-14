let menuVisible = false;

function mostrarOcultarMenu () {
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible= false;
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("python");
        habilidades[2].classList.add("alteryx");
        habilidades[3].classList.add("tableau");
        habilidades[4].classList.add("powerbi");
        habilidades[5].classList.add("sql");
        habilidades[6].classList.add("html");
        habilidades[7].classList.add("trabajoenequipo");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("orientacionaresultados");
        habilidades[10].classList.add("capacidaddedialogo");
        habilidades[11].classList.add("habilidaddenegociacion");
        habilidades[12].classList.add("adaptacion");
        habilidades[13].classList.add("proactividad");

    }
}

window.onscroll = function (e){
    efectoHabilidades();
}