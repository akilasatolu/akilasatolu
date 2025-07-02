import type { AboutListData } from '../assets/types';
import { AboutListItem } from '../molecules/AboutListItem';

type AboutListProps = {
  aboutListdata: AboutListData[];
};

export const AboutList = (props: AboutListProps) => {
  return (
    <>
      {props.aboutListdata.map((item, index) => (
        <AboutListItem key={index} item={item} />
      ))}
    </>
  );
};