import styles from './warmerColderDisplayStyles.module.css';

// TODO: find out why i need to create an interface, why cant i just pass the props without?
interface propsInterface {
  message: string;
}

export default function WarmerColderDisplay({ message }: propsInterface) {
  //export default function WarmerColderDisplay() {
  let borderClass = styles.standardBorder;

  if (message == 'feels a little bit colder') {
    borderClass = styles.lightBlueBorder;
  } else if (message == 'feels a lot colder') {
    borderClass = styles.darkBlueBorder;
  } else if (message == 'feels a little warmer') {
    borderClass = styles.orangeBorder;
  } else if (message == 'feels a lot warmer') {
    borderClass = styles.redBorder;
  }

  return (
    <div className={borderClass}>
      <h2>{message} than yesterday</h2>
    </div>
  );
  //return <div>This is a warmer-colder display.</div>;
}
