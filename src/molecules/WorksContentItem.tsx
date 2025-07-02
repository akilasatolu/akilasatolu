import { ArticleTitle } from "../atoms/ArticleTitle";
import { ArticleDescription } from "../atoms/ArticleDescription";
import type { WorksContentData } from '../assets/types';
import { TagList } from "./TagList";

type WorksContentItemProps = {
  content: WorksContentData;
};

export const WorksContentItem = (props: WorksContentItemProps) => {
  return (
    <li>
      <a className="space-y-3" href={props.content.link} target='_blank' rel='noopener noreferrer'>
        <ArticleTitle text={props.content.title} isBlank={true} />
        <ArticleDescription text={props.content.description} />
        <TagList tagListData={props.content.techList} />
      </a>
    </li>
  );
};