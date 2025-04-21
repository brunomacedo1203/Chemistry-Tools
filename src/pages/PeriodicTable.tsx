import Page from "@/components/Page";
import PeriodicTableCards from "../modules/chemistry/components/PeriodicTableCards";

export default function PeriodicTable() {
  return (
    <Page title={"Periodic Table of Elements"} subtitle={""}>
      <PeriodicTableCards></PeriodicTableCards>
    </Page>
  );
}
