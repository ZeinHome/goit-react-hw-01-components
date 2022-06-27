import {
  ContainerTransaction,
  Title,
  Pocket,
  Column,
} from './TransactionHistory.styled';
import PropTypes from 'prop-types';

function TransactionHistory({ items }) {
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
        {items.map(item => (
          <Pocket key={item.id}>
            <Column>{item.type}</Column>
            <Column>{item.amount}</Column>
            <Column>{item.currency}</Column>
          </Pocket>
        ))}
      </tbody>
    </ContainerTransaction>
  );
}

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
