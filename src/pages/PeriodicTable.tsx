import Pagina from "@/components/Pagina";
import PeriodicTableCards from "@/components/PeriodicTableCards";

export default function PeriodicTable() {
  return (
    <Pagina titulo={"Periodic Table of Elements"} subtitulo={""}>
      <PeriodicTableCards></PeriodicTableCards>
    </Pagina>
  );
}
