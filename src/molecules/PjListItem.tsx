import type { PjListData } from '../assets/types';
import { ArticleTitle } from '../atoms/ArticleTitle';
import { Period } from '../atoms/Period';
import { TagList } from '../molecules/TagList';
import { ArticleDescription } from '../atoms/ArticleDescription';

type PjListItemProps = {
  pj: PjListData;
};

export const PjListItem = (props: PjListItemProps) => {
  return (
    <div className='space-y-3 flex flex-col'>
      <Period from={props.pj.pjPeriod[0]} to={props.pj.pjPeriod[1]}/>
      <ArticleTitle text={props.pj.pjTitle} />
      <ArticleDescription text={props.pj.pjDescription} />
      <TagList tagListData={props.pj.pjTechList} />
    </div>
  );
};