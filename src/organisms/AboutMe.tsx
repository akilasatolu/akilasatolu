import { PageTitle } from '../molecules/PageTitle';
import { AboutMeRole } from '../molecules/AboutMeRole';
import { AboutMeMsg } from '../molecules/AboutMeMsg';
import { AboutMeSns } from '../molecules/AboutMeSns';
import type { AboutMeData } from '../assets/types';

type AboutMeProps = {
  aboutMeData: AboutMeData;
};

export const AboutMe = (props: AboutMeProps) => {
  return (
    <div className='flex flex-col space-y-3'>
      <PageTitle text={props.aboutMeData.name} />
      <AboutMeRole text={props.aboutMeData.role} />
      <AboutMeMsg text={props.aboutMeData.message} />
      <AboutMeSns />
    </div>
  );
};