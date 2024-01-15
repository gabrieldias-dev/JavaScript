precoMin()

function precoMin() {
    let nome_valor = document.querySelector("#nomeValor");
    let nomeItem = prompt("Qual nome do produto que deseja vender?");
    let precoItem = Number(prompt("Qual preço do produto que deseja vender?"));
  if (precoItem < 20) {
    alert("Não pode vender item com valor menor que 20$ dolares");
    precoMin();
  } else {
    alert("item adicionado a sua loja");
    nome_valor.innerHTML = `${nomeItem} e valor de ${precoItem} foram adicionados a sua loja`;
  }
}
