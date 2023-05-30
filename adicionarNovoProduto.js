// Função para adicionar um novo produto
function addProduct(event) {
    event.preventDefault(); // Impede que o formulário seja enviado
  
    // Obter os dados do produto a partir dos campos no HTML
    const url = document.getElementById('url').value;
    const categoria = document.getElementById('categoria').value;
    const nomeProduto = document.getElementById('nomeProduto').value;
    const precoProduto = document.getElementById('precoProduto').value;
    const descricaoProduto = document.getElementById('descricaoProduto').value;
  
    // Criar um novo objeto de produto
    const newProduct = {
      url: url,
      categoria: categoria,
      nome: nomeProduto,
      preco: precoProduto,
      descricao: descricaoProduto
    };
  
    // Adicionar o novo produto ao array
    products.push(newProduct);
  
    // Limpar os campos do formulário
    document.getElementById('url').value = '';
    document.getElementById('categoria').value = '';
    document.getElementById('nomeProduto').value = '';
    document.getElementById('precoProduto').value = '';
    document.getElementById('descricaoProduto').value = '';
  
    // Renderizar novamente a lista de produtos
    renderProducts();
  }
  
  // Adicionar evento de envio ao formulário
  const form = document.querySelector('.login');
  form.addEventListener('submit', addProduct);
  

//   js pra botao da imagem