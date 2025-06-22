# Problema #2 – Aplicar Desconto em Produto

Este exercício propõe o cálculo do valor final de um produto após a aplicação de um desconto percentual.

---

## 🧠 Descrição do Problema

Calcular qual valor pagar por um produto após aplicar um desconto a ele.

📌 **Exemplo:**  
Tenho um produto que custa **R$ 55,00** e a loja me deu um **desconto de 10%**.  
Quero descobrir **quanto irei pagar** nesse produto após aplicar o desconto.

---

## 💡 Solução (Decomposição)

- Receber o valor do produto  
- Aplicar percentual de desconto  
- Calcular o valor do produto com desconto  
- Exibir o valor final com desconto

---

## 🔢 Sequência de Passos

1. Receber o valor do produto  
2. Aplicar o percentual de desconto  
3. Calcular o valor com desconto  
4. Exibir o valor final

---

## 💻 Código em JavaScript

// Receber o valor do produto 
const valorDoProduto = 55.00

const percentualDeDesconto = 10
//Aplicar percentual de desconto 
const valorDoProdutoComDesconto = valorDoProduto * (percentualDeDesconto /100)

//Calculo Valor Final
const valorFinal = valorDoProduto - valorDoProdutoComDesconto

//Valor do produto com desconto 
console.log ('Valor do produto com desconto: '+ valorFinal)

Console
Valor do produto com desconto: 49.5
