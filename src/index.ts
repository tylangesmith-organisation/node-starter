
export interface AddTwoNumbersProps {
  number1: number;
  number2: number;
}

export const addTwoNumbers = (props: AddTwoNumbersProps): number => {
  const { number1, number2 } = props;
  return number1 + number2
}
