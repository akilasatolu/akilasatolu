type H2TitleProps = {
  text: string;
};

export const H2Title = (props: H2TitleProps) => {
  return (
    <h2 className="text-xl font-bold">{props.text}</h2>
  );
};