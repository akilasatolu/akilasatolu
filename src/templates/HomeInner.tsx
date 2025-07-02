import { AboutMe } from '../organisms/AboutMe';
import { AboutInterested } from '../organisms/AboutInterested';
import { AboutList } from '../organisms/AboutList';
import type { HomeData } from '../assets/types';

type HomeInnerProps = {
  homeData: HomeData;
};

export const HomeInner = (props: HomeInnerProps) => {
  return (
    <div className="flex flex-col space-y-20">
      <AboutMe aboutMeData={props.homeData.aboutMe} />
      <AboutInterested aboutInterestedData={props.homeData.aboutInterested} />
      <AboutList aboutListdata={props.homeData.aboutList} />
    </div>
  );
};