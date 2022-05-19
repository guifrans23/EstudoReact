import { useState, useEffect } from "react";

import Conteudo from "./Conteudo";
import Mensagem from "./Mensagem";

export default function Container() {
  //vamos o estado inicial dos produtos,ou seja,
  // quais dados existem dentro do objetos produtos.
  const [mensagem, setMensagem] = useState([
    {
      titulo: "",
      autor: "",
      mensagem: "",
    },
  ]);

  const [produtos, setProduto] = useState([
    {
      id: "",
      nome: "",
      descricao: "",
      categoria: "",
      preco: "",
      msg: [],
    },
  ]);

  useEffect(() => {
    fetch("http://10.26.49.47:4000/api/services/produtos/listar")
      .then((response) => response.json())
      .then((dados) => {
        setProduto(dados.output);
      })
      .catch((erro) =>
        console.error(`erro ao tentar carregar a api -> ${erro}`)
      );
  }, []);

  const mudarDados = (content) => {
    setMensagem(content);
  };

  return (
    <div className="Container">
      <Mensagem info={mensagem} />
      <Conteudo dados={produtos} acao={mudarDados} />
    </div>
  );
}
