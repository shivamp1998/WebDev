import Card from './Card';
import useCounter from '../hooks/user-counter';
const ForwardCounter = () => {
  const counter =  useCounter(true);
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
