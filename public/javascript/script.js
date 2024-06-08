
document.addEventListener('DOMContentLoaded', () => {
    
    const formulario = document.querySelector('.contato__form');
  
  
    formulario.addEventListener('submit', (event) => {
      event.preventDefault();
  
      
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const telefone = document.getElementById('telefone').value;

  
      
      setTimeout(() => {
        const conteudo = document.getElementById('conteudo');
        conteudo.innerHTML = `
          <h1>Pessoas preocupadas em salvar o mundo</h1>
          <ul>
            <li>Nome: ${nome}</li>
            <li>Email: ${email}</li>
            <li>Telefone: ${telefone}</li>
          </ul>
        `;
      }, 10);
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.desafios__image img');
    const prevButton = document.querySelector('.carousel__button--prev');
    const nextButton = document.querySelector('.carousel__button--next');
    let currentIndex = 0;


    images[currentIndex].style.display = 'block';

    prevButton.addEventListener('click', () => {
        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        images[currentIndex].style.display = 'block';
    });

    nextButton.addEventListener('click', () => {
        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        images[currentIndex].style.display = 'block';
    });
});

function login() {
    var usuario = document.getElementById("usuario").value;
    var usuarioCerto = "admin";

    var senha = document.getElementById("senha").value;
    var senhaCerta = "admin";

    if (usuario !== usuarioCerto || senha !== senhaCerta) {
        alert("Usuário ou Senha incorreto!");
        document.getElementById("usuario").value = "";
        document.getElementById("senha").value = "";
        
    } else {
        alert(`Seja Bem-Vindo, ${usuario}! Estamos há mais um passo de um futuro e oceano mais limpo e sustentável!`);

        window.location.href = "/src/pages/home/index.html";
    }
}

