
import useCounter from '../hooks/user-counter';
import Card from './Card';
const BackwardCounter = () => {
  const counter = useCounter(false);
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
