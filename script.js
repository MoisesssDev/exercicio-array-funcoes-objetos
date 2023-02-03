const carrinho = {
  itens: [
    {
      nome: "produto 1",
      quantidade: 4,
      preco: 76.9,
    },
    {
      nome: "produto 2",
      quantidade: 2,
      preco: 69.9,
    },
    {
      nome: "produto 3",
      quantidade: 6,
      preco: 89.9,
    },
  ],
  subtotal: 100.0,
  entrega: 30.0,
  impostos: 7.0,
  total: 137.0,
};

// array.map---------------------------------------------------------------

// FORMA 1

// function listaDeNomes() {
//   let nomesProdutos = carrinho.itens.map((item) => item.nome);

//   console.log(nomesProdutos);
//   return nomesProdutos;
// }

// listaDeNomes();

// FORMA 2
function nomes(item) {
  return item.nome;
}

console.log(carrinho.itens.map(nomes));

// array.filter------------------------------------------------------------

// FORMA 1_____________________________________________________
// function menorValor() {
//   let produtosComValorMenorQue80 = carrinho.itens.filter(
//     (item) => item.preco < 80
//   );

//   console.log(produtosComValorMenorQue80);
//   return produtosComValorMenorQue80;
// }
// menorValor()

// FORMA 2_____________________________________________________
function menosDe80(item) {
  return item.preco < 80;
}

console.log(carrinho.itens.filter(menosDe80));

//array.find---------------------------------------------------------------

function procurarProduto(nomeProduto) {
  let produtoEncontrado = carrinho.itens.find(
    (item) => item.nome === nomeProduto
  );

  if (produtoEncontrado) {
    console.log(produtoEncontrado);
    return produtoEncontrado;
  } else {
    return console.log("Produto não encontrado.");
  }
}

procurarProduto("produto 3");

// array.reduce-----------------------------------------------------------
function somaDosProdutos(total, item) {
  let soma = total + item.preco * item.quantidade;
  return soma;
}

console.log(carrinho.itens.reduce(somaDosProdutos, 0));
