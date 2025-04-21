interface propsInterface {
  message: string;
}

export default function WarmerColderDisplay({ message }: propsInterface) {
  //export default function WarmerColderDisplay() {
  return <h2>{message}</h2>;
  //return <div>This is a warmer-colder display.</div>;
}
