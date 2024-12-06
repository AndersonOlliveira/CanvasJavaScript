document.addEventListener('DOMContentLoaded', ()=>{
  

    const unifilar = document.querySelector('#unifilar');
    const ctx = unifilar.getContext('2d')

    unifilar.width = 780;
    unifilar.height = 500;

             //desenhando o triangulo inicial
             ctx.beginPath();
             ctx.font = "30px arial";
             ctx.strokeText("Triangulo", 60, 110);
             ctx.beginPath();
             ctx.moveTo(75, 50);
             ctx.lineTo(100, 75);
             ctx.lineTo(100, 25);
             ctx.fill();
             //desenhando a linha primeira linha
             ctx.beginPath();
             ctx.moveTo(90, 35);
             ctx.lineTo(400, 35);
             ctx.stroke();
             //desenhando o triangulo segundo trigulo
             ctx.beginPath();
             ctx.moveTo(400, 35);
             ctx.lineTo(450, 65);
             ctx.lineTo(450, 10);
             ctx.fill();
             //desenhando a linha dentro do segundo triangulo
             ctx.beginPath();
             ctx.moveTo(420, 35);
             ctx.lineTo(550, 35);
             ctx.stroke();
             //desenhando a linha dentro do segundo triangulo
             ctx.beginPath();
             ctx.moveTo(450, 15);
             ctx.lineTo(550, 15);
             ctx.stroke();
             //desenhando a linha dentro do segundo triangulo
             ctx.beginPath();
             ctx.moveTo(450, 55);
             ctx.lineTo(550, 55);
             ctx.stroke();
             //desenhando a linha do primeiro triangulo
             ctx.beginPath();
             ctx.moveTo(100, 55);
             ctx.lineTo(380, 55);
             ctx.stroke();
             ctx.beginPath();
             ctx.moveTo(380, 55);
             ctx.lineTo(380, 150);
             ctx.stroke();
             ctx.beginPath();
             ctx.moveTo(380, 150);
             ctx.lineTo(410, 150);
             ctx.stroke();
             ctx.beginPath();
             ctx.moveTo(410, 150);
             ctx.lineTo(450, 180);
             ctx.lineTo(450, 120);
             ctx.fill();
             //primeira linha do segundo triangulo
             ctx.beginPath();
             ctx.moveTo(450, 130);
             ctx.lineTo(550, 130);
             ctx.stroke();
             //segunda linha do segundo triangulo
             ctx.beginPath();
             ctx.moveTo(450, 150);
             ctx.lineTo(550, 150);
             ctx.stroke();
             //segunda linha do segundo triangulo
             ctx.beginPath();
             ctx.moveTo(450, 170);
             ctx.lineTo(550, 170);
             ctx.stroke();
             //desenhado o quatrado 
             ctx.beginPath();
             ctx.fillStyle = "gray";
             ctx.fillRect(510, 5, 20, 20);
             ctx.beginPath();
             //ctx.fillStyle ='#F79540';
             ctx.fillRect(550, 105, 45, 85);

             //desenho da terceira linha do triangulo
             ctx.beginPath();
             ctx.fillStyle = "#AAC8A7";
             ctx.moveTo(100, 70);
             ctx.lineTo(280, 70);
             ctx.stroke();
             ctx.beginPath();
             ctx.moveTo(280, 70);
             ctx.lineTo(280, 250);
             ctx.stroke();
             ctx.beginPath();
             ctx.moveTo(280, 250);
             ctx.lineTo(550, 250);
             ctx.stroke();
             ctx.beginPath();
             //realiando o criculo
             ctx.arc(590, 250, 40, 0, 2 * Math.PI);
             ctx.lineTo(680, 250);
             ctx.stroke();
             ctx.beginPath();
             ctx.fillStyle = "gray";
             ctx.fillRect(675, 10, 70, 480);
             ctx.beginPath();
             let start = { x: 450, y: 550 };
             let cp1 = { x: 600, y: 75 };
             let cp2 = { x: 600, y: 550 };
             let end = { x: 675, y: 490 };
             ctx.moveTo(start.x, start.y);
             ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
             ctx.stroke();
             ctx.beginPath();
             ctx.moveTo(650, 400);
             ctx.lineTo(575, 425);
             ctx.fill();
             ctx.beginPath();
             ctx.moveTo(650, 450);
             ctx.lineTo(595, 475);
             ctx.fill();
             ctx.beginPath();
             ctx.moveTo(200, 310);
             ctx.lineTo(675, 320);
             ctx.fillStyle = "#F6BA6F";
             ctx.fill();
             ctx.beginPath();
             ctx.moveTo(10, 300);
             ctx.lineTo(200, 400);
             ctx.lineTo(205, 210);
             ctx.closePath();
             ctx.stroke();


             unifilar.addEventListener("click", function (event) {
                let x = event.offsetX;
                let Y = event.offsetY;

                  ctx.fillStyle="red";
                ctx.beginPath();
                 ctx.arc(x,Y,5,0, Math.PI*2);
                 ctx.fill();
                 ctx.stroke();

                //alert('clicou');
         } )
     


    
})

