type ArticleDescriptionProps = {
  text: string;
};

export const ArticleDescription = (props: ArticleDescriptionProps) => {
  return (
    <p className="text-base font-normal">{props.text}</p>
  );
};