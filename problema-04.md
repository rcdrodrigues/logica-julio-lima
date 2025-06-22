# PROBLEMA #4 – Desconto para Cliente VIP

### 💡 Descrição

Preciso ter um sistema que aplique **10% de desconto no total do pedido** apenas para clientes considerados **VIP**.

---

### 🧾 Exemplos

**Exemplo 1:**  
O total do meu pedido é R$ 500,00 e o meu cliente é VIP.  
➡️ O total do pedido deverá ser **R$ 450,00**

**Exemplo 2:**  
O total do meu pedido é R$ 500,00 e o meu cliente **não é VIP**.  
➡️ O total do pedido deverá ser **R$ 500,00**

---

### 🧠 Solução - Decomposição

- Valor do pedido  
- Tipo de cliente  
- Valor do desconto  
- Valor do pedido para cliente VIP  
- Valor do pedido para cliente não VIP  
- Exibir valor do pedido para cliente VIP  
- Exibir valor do pedido para cliente não VIP

---

### 🔢 Sequência de Passos

1. Informar o valor do pedido  
2. Informar o tipo de cliente  
3. Verificar se o cliente é VIP  
4. Calcular o valor do pedido com ou sem desconto  
5. Exibir o valor final do pedido

---

### 💻 Código (JavaScript)

```javascript
function calcularEaplicarDesconto(valorPedido, tipoCliente) {
  let valorFinalDoPedido;

  if (tipoCliente.toLowerCase() === 'vip') {
    valorFinalDoPedido = valorPedido - (valorPedido * 10 / 100);
  } else {
    valorFinalDoPedido = valorPedido;
  }

  return valorFinalDoPedido;
}

const resultadoComDesconto = calcularEaplicarDesconto(500.00, 'vip');
console.log('Cliente VIP com desconto paga R$: ' + resultadoComDesconto);

const resultadoSemDesconto = calcularEaplicarDesconto(500.00, '');
console.log('Total a pagar sem desconto VIP R$: ' + resultadoSemDesconto);

Cliente VIP com desconto paga R$: 450
Total a pagar sem desconto VIP R$: 500

