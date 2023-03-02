let menuVisible = false;
//funcion que muestra o oculta menu mostrarOcultarMenu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
            menuVisible=false;
    }else{

        document.getElementById("nav").classList="responsive";
             menuVisible=true;
    }
 
}
function selecionar(){
    //oculta el menu una vez selecionado
    document.getElementById("nav").classList="";
    menuVisible=false;
}