import { Container } from "./style";

export function Transactions() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">R$12.000</td>
            <td>venda</td>
            <td>30/12/2021</td>
          </tr>
          <tr>
            <td>Hamburguer</td>
            <td className="withdraw">-R$59.00</td>
            <td>Alimentacao</td>
            <td>26/12/2021</td>
          </tr>
          <tr>
            <td>Aluguel de casa</td>
            <td className="withdraw">-R$1.200</td>
            <td>Casa</td>
            <td>21/12/2021</td>
          </tr>
          <tr>
            <td>Computador</td>
            <td className="deposit">R$5.400</td>
            <td>venda</td>
            <td>27/12/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
