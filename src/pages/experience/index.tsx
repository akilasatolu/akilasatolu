import { useSetAtom } from 'jotai';
import { currentNavPathAtom } from '../../assets/Jotai';
import { useEffect } from 'react';
import { pageInfo } from '../../assets/const.ts';
import experienceData from '../../assets/jsons/experience.json';
import { ExperienceInner } from '../../templates/ExperienceInner';

export const Experience = () => {
  const setCurrentNavPath = useSetAtom(currentNavPathAtom);

  useEffect(() => {
    setCurrentNavPath(pageInfo.Experience.to);
  }, [setCurrentNavPath]);

  return (
    <ExperienceInner experienceData={experienceData} />
  );
};