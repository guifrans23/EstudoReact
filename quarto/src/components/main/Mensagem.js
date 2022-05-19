export default function Mensagem(props) {
  return (
    <div className="Mensagem">
      {props.info.map((m, i) => (
        <div key={i}>
          <h2>
            Titulo da mensagem: <br />
            {m.titulo}
          </h2>

          <p>
            autor: <br /> {m.autor}
          </p>

          <p>
            Mensagem: <br />
            {m.mensagem}
          </p>
        </div>
      ))}
    </div>
  );
}
