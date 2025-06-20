# Problema #1 – Valor final com desconto

## 🧠 Enunciado

Calcular qual valor pagar por um produto após aplicar um desconto a ele.

**Exemplo:**  
Tenho um produto que custa R$ 55,00 e a loja me deu um desconto de R$ 10,00.  
Quero descobrir quanto irei pagar nesse produto.

---

## 🛠️ Decomposição

- Receber o valor original do produto  
- Subtrair o valor do desconto  
- Calcular o valor final  
- Exibir o valor com desconto  

---

## 🔁 Sequência de Passos

1. Receber o valor original do produto  
2. Subtrair o valor do desconto  
3. Calcular o valor final  
4. Exibir o valor com desconto  

---

## 💻 Código (JavaScript)

```js
// Valor do produto
const valorDoProduto = 55.00;

// Aplicar desconto 
const valorDoProdutoDesconto = valorDoProduto - 10;

// Valor do Produto com desconto
const valorProdutoFinal = valorDoProdutoDesconto;

// Exibir preço final 
console.log('Valor do Produto com Desconto: R$ ' + valorProdutoFinal.toFixed(2));



//Saída Console 
Valor do Produto com Desconto: R$ 45.00

