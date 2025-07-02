import type { AboutInterestedData } from '../assets/types';
import { H2Title } from '../atoms/H2Title';
import { TagList } from '../molecules/TagList';

type AboutInterestedProps = {
  aboutInterestedData: AboutInterestedData;
};

export const AboutInterested = (props: AboutInterestedProps) => {
  return (
    props.aboutInterestedData.title && props.aboutInterestedData.interestedList.length > 0 && (
      <div className='space-y-3'>
        <H2Title text={props.aboutInterestedData.title} />
        <TagList tagListData={props.aboutInterestedData.interestedList} />
      </div>
    )
  );
};