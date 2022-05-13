import Conteudo from "./Conteudo";
import Mensagem from "./Mensagem";

export default function Container() {
  return (
    <div className="Container">
      <Mensagem />
      <Conteudo />
    </div>
  );
}
