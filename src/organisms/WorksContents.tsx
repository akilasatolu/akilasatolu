import type { WorksContentData } from '../assets/types';
import { WorksContentItem } from '../molecules/WorksContentItem';

type WorksContentsProps = {
  worksContents: WorksContentData[];
};

export const WorksContents = (props: WorksContentsProps) => {
  return (
    <ul className='space-y-10 list-disc pl-5'>
      {props.worksContents.map((content, index) => (
        <WorksContentItem key={index} content={content} />
      ))}
    </ul>
  );
};