import { H1Title } from "../atoms/H1Title";

type PageTitleProps = {
  text: string;
};

export const PageTitle = (props: PageTitleProps) => {
  return (
    <div>
      <H1Title text={props.text} />
    </div>
  );
};