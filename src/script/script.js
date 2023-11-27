const inicio = document.getElementById('inicio');
const sidebar = document.getElementById('sidebar');
const restart = document.getElementById('restart');
const navbar = document.getElementById('navbar');
const container_armas = document.getElementById('container-armas');
const inventario_cs = document.getElementById('inventario');
const navbar_inventario = document.getElementById('navbar-inventario');

let timer = 5;
let timerId

function decreaseTimer() {

    if (timer > 0) {
        timerId = setTimeout(decreaseTimer, 1000)
        timer --
        document.querySelector('#timer').innerHTML = timer
        container.style.display = "flex";
        
    }
    if (timer === 0 ) {
        main.style.backgroundImage = "url('src/img/vitoria.png')";
        main.style.transition = "all 0.5s";
        restart.style.display = "block";
    }
}


inventario();
iniciar();

function iniciar () {
    document.getElementById('start').addEventListener('click', function(){
    decreaseTimer();
    
    inicio.style.display = "none";
    sidebar.style.display = "none";
    navbar.style.display = "none";
    container_armas.style.display = "block";
    inventario_cs.style.display = "none";
    navbar_inventario.style.display = "none";



    main.style.backgroundImage = "url('src/img/carregamento.jpg')";

    });
}

function inventario () {
    document.getElementById('link-inventario').addEventListener('click', function(){

        sidebar.style.display = "none";
        inventario_cs.style.display = "flex";

    });
}



document.getElementById('profiles').addEventListener('click', function(){
    let backgroundImage = document.getElementById('main');
    main.style.backgroundImage = "url('src/img/ancient.jpg')";
});

document.getElementById('profiles1').addEventListener('click', function(){
    let backgroundImage = document.getElementById('main');
    main.style.backgroundImage = "url('src/img/anubis.jpg')";
});

document.getElementById('profiles2').addEventListener('click', function(){
    let backgroundImage = document.getElementById('main');
    main.style.backgroundImage = "url('src/img/cache.jpg')";
});

document.getElementById('profiles3').addEventListener('click', function(){
    let backgroundImage = document.getElementById('main');
    main.style.backgroundImage = "url('src/img/nuke.jpg')";
});

document.getElementById('profiles4').addEventListener('click', function(){
    let backgroundImage = document.getElementById('main');
    main.style.backgroundImage = "url('src/img/inferno.jpg')";
});

document.getElementById('profiles5').addEventListener('click', function(){
    let backgroundImage = document.getElementById('main');
    main.style.backgroundImage = "url('src/img/mirage.jpg')";
});

document.getElementById('profiles6').addEventListener('click', function(){
    let backgroundImage = document.getElementById('main');
    main.style.backgroundImage = "url('src/img/overpass.jpg')";
});

document.getElementById('profiles7').addEventListener('click', function(){
    let backgroundImage = document.getElementById('main');
    main.style.backgroundImage = "url('src/img/dust.jpg')";
});

document.getElementById('profiles8').addEventListener('click', function(){
    let backgroundImage = document.getElementById('main');
    main.style.backgroundImage = "url('src/img/train.jpg')";
});

document.getElementById('profiles9').addEventListener('click', function(){
    let backgroundImage = document.getElementById('main');
    main.style.backgroundImage = "url('src/img/vertigo.jpg')";
});

