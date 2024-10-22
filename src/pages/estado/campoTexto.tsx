import Pagina from "@/components/Pagina";
import { useState } from "react";

export default function PaginaCampoTexto() {
  const [valor, setValor] = useState("");

  function alterar() {
    const nomes = ["Alice", "Ana", "Carla", "Diego", "Caio", "João"];
    const nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
    setValor(nomeAleatorio);
  }

  function alterarValor(e: any) {
    setValor(e.target.value);
  }

  return (
    <Pagina titulo="Campo de Texto" subtitulo="Capitulo Estado">
      <div className="flex items-center gap-5">
        <input
          className="input"
          type="text"
          value={valor}
          onChange={alterarValor}
        />
        <button className="botao" onClick={alterar}>
          Alterar
        </button>
      </div>
    </Pagina>
  );
}
