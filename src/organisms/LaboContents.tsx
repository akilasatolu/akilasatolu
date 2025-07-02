import type { LaboContentData } from '../assets/types';
import { LaboContentItem } from '../molecules/LaboContentItem';

type LaboContentsProps = {
  laboContents: LaboContentData[];
};

export const LaboContents = (props: LaboContentsProps) => {
  return (
    <ul className='space-y-4 list-disc pl-5'>
      {props.laboContents.map((content, index) => (
        <LaboContentItem key={index} content={content} />
      ))}
    </ul>
  );
};