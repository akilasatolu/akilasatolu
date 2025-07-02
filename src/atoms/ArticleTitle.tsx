import { FaExternalLinkAlt } from 'react-icons/fa';

type ArticleTitleProps = {
  text: string;
  isBlank?: boolean;
};

export const ArticleTitle = (props: ArticleTitleProps) => {
  return (
    <p className="text-lg font-bold flex items-center space-x-3">
      <span>{props.text}</span>
      {props.isBlank ? <FaExternalLinkAlt size={16} /> : ""}
    </p>
  );
};