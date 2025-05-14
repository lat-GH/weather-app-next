import { warmerOrColder } from '../../types/types';
import styles from './warmerColderDisplayStyles.module.css';

// TODO: find out why i need to create an interface, why cant i just pass the props without?
interface propsInterface {
  message: string;
}

export default function WarmerColderDisplay({ message }: propsInterface) {
  //const { message = 'default message' } = props;
  //export default function WarmerColderDisplay() {
  let borderClass = '';

  if (message == warmerOrColder.LilCold) {
    borderClass = styles.lightBlueBorder;
  } else if (message == warmerOrColder.LotCold) {
    borderClass = styles.darkBlueBorder;
  } else if (message == warmerOrColder.LilWarm) {
    borderClass = styles.orangeBorder;
  } else if (message == warmerOrColder.LotWarm) {
    borderClass = styles.redBorder;
  }

  return (
    <div className={`${styles.standardBorder} ${borderClass} `}>
      <h2>{message} than yesterday</h2>
    </div>
  );
  //return <div>This is a warmer-colder display.</div>;
}
