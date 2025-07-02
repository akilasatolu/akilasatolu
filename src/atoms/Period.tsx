type PeriodProps = {
  from: string;
  to : string;
};

export const Period = (props: PeriodProps) => {
  return <p>{`${props.from} - ${props.to}`}</p>;
};