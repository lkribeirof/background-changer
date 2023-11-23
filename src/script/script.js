var BackgroundAtual = "url(/src/img/ancient.jpg)";

function alterarBackground() {

    var profiles = document.getElementById('profiles');

    profiles.addEventListener("click", function () {

        if (BackgroundAtual === "url(/src/img/ancient.jpg)") {
            BackgroundAtual = "url(/src/img/vertigo.jpg)";
        } else {
            BackgroundAtual = "url(/src/img/ancient.jpg)";
        }
        
    })
};

alterarBackground();