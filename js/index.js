var header           = document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header');
var content          = document.getElementById('content');
var showSidebar      = false;




    function toggleSidebar()
    {
        showSidebar = !showSidebar;
        if(showSidebar)
        {
            navigationHeader.style.marginLeft = '-10vw';
            navigationHeader.style.animationName = 'showSidebar';
            content.style.filter = 'blur(2px)';
        }
        else
        {
            navigationHeader.style.marginLeft = '-100vw';
            navigationHeader.style.animationName = '';
            content.style.filter = '';
        }
    }

    function closeSidebar()
    {
        if(showSidebar)
        {
            showSidebar = true;
            toggleSidebar();
        }
    }

    window.addEventListener('resize', function(event) {
        if(window.innerWidth > 768 && showSidebar) 
        {  
            showSidebar = true;
            toggleSidebar();
        }
    });


function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}


window.onload = function() {
    // Botão aumentar e diminuir
    var btnAumentar      = document.getElementById('btnAumentar');
    var btnDiminuir      = document.getElementById('btnDiminuir');
    var elementBody      = document.querySelector( 'body');
    var fontSize         = 100;
    var aumentaDiminui   = 10;
    btnAumentar.addEventListener('click', function(event) {
        fontSize = fontSize + aumentaDiminui;
        elementBody.style.fontSize = fontSize + '%';
    });

    btnDiminuir.addEventListener('click', function(event){
        fontSize = fontSize - aumentaDiminui;
        elementBody.style.fontSize = fontSize + '%';
    });
}