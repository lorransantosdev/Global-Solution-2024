document.addEventListener('DOMContentLoaded', () => {
    // ... (código para atualizarConteudo)
  
    
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
