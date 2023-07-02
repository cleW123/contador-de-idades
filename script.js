//PROJECT age counter design

function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById('txtano');
  var res = document.querySelector('div#res');

  if (fano.value.length == 0 || fano.value > ano || fano.value < 1500) {
    res.style.color = "red"
    res.innerHTML = "VERIFIQUE OS CAMPOS PORFAVOR!!!"
  } else {
    var fsex = document.getElementsByName('radsex');
    var idade = ano - Number(fano.value);
    var genero = '';
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');


    if (fsex[0].checked) {
      genero = "homem";
      if (idade >= 0 && idade < 10) {
        img.src = 'imgs/criança-m.jpg';
      } else if (idade >= 10 && idade < 50) {
        img.src = 'imgs/jovem-m.jpg';
      } else if (idade >= 50 && idade < 120) {
        img.src = 'imgs/idoso-m.jpg';
      } else if (idade <= 1500) {
        img.src = 'imgs/primata.png';
      }
      res.style.color = "black"

    } else if (fsex[1].checked) {
      genero = "mulher";
      if (idade >= 0 && idade < 10) {
        img.src = 'imgs/criança-f.jpg';
      } else if (idade >= 10 && idade < 50) {
        img.src = 'imgs/jovem-f.jpg';
      } else if (idade >= 50 && idade < 120) {
        img.src = 'imgs/idoso-f.jpg';
      } else if (idade <= 1500) {
        img.src = 'imgs/primata.png';
      }
      res.style.color = "black"
    } else {
      genero = "gênero não identificado";
    }
    res.textContent = `Detectamos ${genero} de ${idade} anos.`;
    res.appendChild(img);
  
  }
}

