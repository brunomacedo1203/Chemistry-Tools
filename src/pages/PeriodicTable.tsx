import Page from "@components/Page";
import PeriodicTableCards from "@features/periodic-table/components/PeriodicTableCards";

export default function PeriodicTable() {
  return (
    <Page title={"Periodic Table of Elements"} subtitle={""}>
      <PeriodicTableCards></PeriodicTableCards>
    </Page>
  );
}
