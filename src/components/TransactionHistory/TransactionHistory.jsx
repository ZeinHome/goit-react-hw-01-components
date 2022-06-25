import {ContainerTransaction, Title,Pocket, Column} from './TransactionHistory.styled'
import PropTypes from 'prop-types';

function TransactionHistory({items}) {
    return (
        <ContainerTransaction>
  <thead>
    <tr>
      <Title>Type</Title>
      <Title>Amount</Title>
      <Title>Currency</Title>
    </tr>
  </thead>

  <tbody>

    {items.map(p => <Pocket key={p.id}>
      <Column>{p.type}</Column>
      <Column>{p.amount}</Column>
      <Column>{p.currency}</Column>
    </Pocket>)}

  </tbody>
</ContainerTransaction>
    )
}

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};