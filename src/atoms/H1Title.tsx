type H1TitleProps = {
  text: string;
};

export const H1Title = (props: H1TitleProps) => {
  return (
    <h1 className="text-4xl font-bold">{props.text}</h1>
  );
};