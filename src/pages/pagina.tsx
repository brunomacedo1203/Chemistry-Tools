import "../app/globals.css";
import Pagina from "@/components/Pagina";

export default function TestePagina() {
  function executar() {
    console.log("O botão foi precionado");
  }
  return (
    <Pagina titulo="Página 2" subtitulo="Essa é a segunda pagina">
      <button onClick={executar} className="botao">
        Teste
      </button>
    </Pagina>
  );
}
