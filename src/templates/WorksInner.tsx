import type { WorksData } from '../assets/types';
import { PageTitle } from '../molecules/PageTitle';
import { WorksContents } from '../organisms/WorksContents';

type WorksInnerProps = {
  worksData: WorksData;
};

export const WorksInner = (props: WorksInnerProps) => {
  return (
    <div className="flex flex-col space-y-20">
      <PageTitle text="Works" />
      <WorksContents worksContents={props.worksData.worksContents} />
    </div>
  );
};