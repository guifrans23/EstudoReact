function App() {
  let valor1 = Math.round(Math.random() * 15);
  let valor2 = Math.round(Math.random() * 15);
  return (
    <div>
      <p>A soma de 50 e 10 é 50+10={50 + 10}</p>
      <p>O resto da divisão entre 50 e 3 é{50 % 3}</p>
      <p>
        a soma entre {valor1} e {valor2} é {valor1 + valor2}
      </p>
      <p>
        O Resultado da soma acima é um numero{" "}
        {(valor1 + valor2) % 2 === 0 ? " par" : " impar"}{" "}
      </p>
      {/* estrutura pernaria 
      é que utiliza 3 partes!!   
      {(valor1 + valor2) %2 == 0 ? "par" :"impar"}*/}
    </div>
  );
}

export default App;
