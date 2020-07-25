/*if (result=="0") {
     alert('Ну и зачем?');
}else {
  (Boolean(multi_1))?console.log(Boolean(multi_1) + ''):console.log(Boolean(multi_1) + alert('Ты что-то забыл'));
  (Boolean(multi_2))?console.log(Boolean(multi_2) + ''):console.log(Boolean(multi_2) + alert('Ты что-то забыл'));
  }
console.log(result);
}*/
  window.onload = function() {
   var drawingCanvas = document.getElementById('smile');
   if(drawingCanvas && drawingCanvas.getContext) {
    var context = drawingCanvas.getContext('2d');

    context.strokeStyle = "#000";
    context.fillStyle = "#fff";
    context.beginPath();
    context.arc(50,50,25,0,Math.PI*2,true);
    context.closePath();
    context.stroke();
    context.fill();

    context.fillStyle = "#fff";
    context.beginPath();
    context.arc(84,90,8,0,Math.PI*2,true);
    context.closePath();
    context.stroke();
    context.fill();

    context.beginPath();
    context.arc(116,90,8,0,Math.PI*2,true);
    context.closePath();
    context.stroke();
    context.fill();

    context.beginPath();
    context.moveTo(70,115);
    context.quadraticCurveTo(100,130,130,115);
    context.quadraticCurveTo(100,150,70,115);
    context.closePath();
    context.stroke();
    context.fill();
   }
  }
  function show_hide_password(target){
  	var input = document.getElementById('password-input');
  	if (input.getAttribute('type') == 'password') {
  		target.classList.add('view');
  		input.setAttribute('type', 'text');
  	} else {
  		target.classList.remove('view');
  		input.setAttribute('type', 'password');
  	}
  	return false;
  }
