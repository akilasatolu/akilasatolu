import { ArticleTitle } from "../atoms/ArticleTitle";
import { ArticleDescription } from "../atoms/ArticleDescription";
import type { LaboContentData } from '../assets/types';
import { Link } from 'react-router-dom';

type LaboContentItemProps = {
  content: LaboContentData;
};

export const LaboContentItem = (props: LaboContentItemProps) => {
  return (
    <li>
      <Link to={props.content.link}>
        <ArticleTitle text={props.content.title} />
        <ArticleDescription text={props.content.description} />
      </Link>
    </li>
  );
};