import type { AboutListData } from '../assets/types';
import { H2Title } from '../atoms/H2Title';
import { BulletList } from '../atoms/BulletList';

type AboutListItemProps = {
  item: AboutListData;
};

export const AboutListItem = (props: AboutListItemProps) => {
  return (
    props.item.title && props.item.contentsList?.length > 0 && (
      <div className='space-y-3'>
        <H2Title text={props.item.title} />
        <BulletList textListArr={props.item.contentsList} />
      </div>
    )
  );
};