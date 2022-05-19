export default function Conteudo(props) {
  const passarDados = (pr) => {
    props.acao(pr);
  };
  return (
    <div className="Conteudo">
      <h2>produtos</h2>
      <div className="produtos">
        {props.dados.map((item, ix) => (
          <div key={ix} onClick={() => passarDados(item.msg)}>
            <h3>{item.nome}</h3>
            <p>{item.Descricao}</p>
            <p>{item.categoria}</p>
            <p>{item.id}</p>
            <p className="preco">R$ {item.preco}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
