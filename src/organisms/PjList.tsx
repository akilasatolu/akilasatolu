import type { PjListData } from '../assets/types';
import { PjListItem } from '../molecules/PjListItem';

type PjListProps = {
  pjList: PjListData[];
};

export const PjList = (props: PjListProps) => {
  return (
    <div className='flex flex-col'>
      {props.pjList.map((pj, index) => (
        <div key={index}>
          <PjListItem pj={pj} />
          {index + 1 !== props.pjList.length && (
            <div className="my-4 ml-4 w-[1px] h-12 border-l-2 border-dotted border-blue-500"></div>
          )}
        </div>
      ))}
    </div>
  );
};