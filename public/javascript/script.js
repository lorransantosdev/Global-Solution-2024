document.addEventListener('DOMContentLoaded', () => {
    // ... (código para atualizarConteudo)
  
    // Obter referência ao formulário
    const formulario = document.querySelector('.contato__form');
  
    // Manipulador de envio do formulário
    formulario.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Obter valores dos campos
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const telefone = document.getElementById('telefone').value;

  
      // Atualizar o conteúdo da rota "/usuarios" após o redirecionamento
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