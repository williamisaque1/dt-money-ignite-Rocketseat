import { Container } from "../Dashboard/style";
import { Summary } from "../Summary";
import { Transactions } from "../TransactionsTable";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <Transactions />
    </Container>
  );
}
