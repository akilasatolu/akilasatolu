import type { ExperienceData } from '../assets/types';
import { PageTitle } from '../molecules/PageTitle';
import { PjList } from '../organisms/pjList';

type ExperienceInnerProps = {
  experienceData: ExperienceData;
};

export const ExperienceInner = (props: ExperienceInnerProps) => {
  return (
    <div className="flex flex-col space-y-20">
      <PageTitle text="Experience" />
      <PjList pjList={props.experienceData.pjList} />
    </div>
  );
};