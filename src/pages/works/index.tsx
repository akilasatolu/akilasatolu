import { useSetAtom } from 'jotai';
import { currentNavPathAtom } from '../../assets/Jotai';
import { useEffect } from 'react';
import { pageInfo } from '../../assets/const.ts';
import { WorksInner } from '../../templates/WorksInner';
import worksData from '../../assets/jsons/works.json';

export const Works = () => {
  const setCurrentNavPath = useSetAtom(currentNavPathAtom);

  useEffect(() => {
    setCurrentNavPath(pageInfo.Works.to);
  }, [setCurrentNavPath]);

  return (
    <WorksInner worksData={worksData} />
  );
};