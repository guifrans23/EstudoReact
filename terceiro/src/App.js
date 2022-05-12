import { useState } from "react";

function App() {
  const [produtos, setProdutos] = useState([
    {
      id: 500,
      nome: "Mouse",
      categoria: "Informática",
      preco: 50.5,
    },
    {
      id: 501,
      nome: "Teclado",
      categoria: "Informática",
      preco: 150.9,
    },
  ]);
  return (
    <div>
      <button
        onClick={() =>
          setProdutos([
            {
              id: 502,
              nome: "smartphone",
              categoria: "telefonia",
              preco: 5000,
            },
          ])
        }
      >
        Adicionar produtos
      </button>
      <h2>produtos cadastrados</h2>
      {produtos.map((item, index) => (
        <div key={index}>
          <h3>{item.nome}</h3>
          <ul>
            <li>código do produto {item.id}</li>
            <li>categoria do produto{item.categoria}</li>
            <li>preço do produto{item.preco}</li>
          </ul>
        </div>
      ))}
      ;
    </div>
  );
}

export default App;
