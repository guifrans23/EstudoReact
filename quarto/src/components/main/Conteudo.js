export default function Conteudo(props) {
  return (
    <div className="Conteudo">
      <h2>produtos</h2>
      <div className="produtos">
        {props.dados.map((item, ix) => (
          <div key={ix}>
            <h3>{item.Mome}</h3>
            <p>{item.Descricao}</p>
            <p>{item.categoria}</p>
            <p className="preco">R$ {item.preco}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
