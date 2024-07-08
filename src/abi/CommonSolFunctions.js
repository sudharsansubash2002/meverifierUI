import numeral from "numeral";

export const NumberAbbreviation = ({ number }) => {
    const formattedNumber = numeral(number).format('0.00a');
    return <span>{formattedNumber.toUpperCase()}</span>;
  };