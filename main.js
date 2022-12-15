canvas = document.getElementById("lienzo");
    ctx = canvas.getContext("2d");
    function cargarImagenes(){
        fondo = new Image();
        fondo.src = "https://docs.google.com/uc?id=1kmT5R5MaRBD9cXcrAc6UtSgCslJLnvZT";
        fondo.onload = dibujarFondo;
        
        //https://docs.google.com/uc?id=11MkVDY9DGh6OPAMrn4kaCswwZx4WI87K
        Robenson = new Image();
        Robenson.src = "https://docs.google.com/uc?id=11MkVDY9DGh6OPAMrn4kaCswwZx4WI87K";
        Robenson.onload = dibujarRobenson;
    }
    var x = 10;
    var y = 10; 
    var r = 0;
    window.addEventListener("keydown", moverR)
    function dibujarFondo(){
        ctx.drawImage(fondo,0,0);
    }
    function dibujarRobenson(){
        ctx.save();
        ctx.translate(x + 50, y+ 45);
        ctx.rotate(r * Math.PI / 180);
        ctx.translate(x - 50, y - 45);
        ctx.drawImage(Robenson, x, y, 100, 90);
        ctx.restore();
    }
    function moverR(e){
        tecla = e.keyCode;
        //derecha
        if(tecla == 39 || tecla == 68){
            x = x + 10;
            r = 0;
        }
        //izquierda
        if(tecla == 37 || tecla == 65){
            x = x - 10;
            r = 180;
        }
        //arriva
        if(tecla == 38 || tecla == 87){
            y = y - 10;
            r = 270;
        }
        //abajo
        if(tecla == 40 || tecla == 83){
            y = y + 10;
            r = 90;
        }
        dibujarFondo();
        dibujarRobenson();
        console.log(x, ",", y, ",", r)
    }
    function bordes(){
        //izquierda
        if(x < -98){
            x = canvas.width;
        }
        //derecha
        if(x > canvas.width){
            x = -98;
        }
        //abajo
        if(y > canvas.height){
            y = -88;
        }
        //arriba
        if(y < -88){
            y = canvas.height;
        }
    }