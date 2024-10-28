import { useState } from "react";
import Pagina from "@/components/Pagina";
import { IconMinus, IconPlus } from "@tabler/icons-react";

export default function PaginaComEstado() {
  const [numero, setNumero] = useState(0);
  function incrementar() {
    setNumero(numero + 1);
  }
  function decrementar() {
    setNumero(numero - 1);
  }

  return (
    <Pagina titulo="Com Estado" subtitulo="Capítulo Estado">
      <div className="flex flex-col">
        <div>
          <span>Valor: </span>
          <span>{numero}</span>
        </div>
        <div>
          <button onClick={incrementar} className="bg-blue-500 p-2">
            <IconPlus />
          </button>
          <button onClick={decrementar} className="bg-blue-500 p-2">
            <IconMinus />
          </button>
        </div>
      </div>
    </Pagina>
  );
}
