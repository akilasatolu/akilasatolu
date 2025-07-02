import { useAtomValue, useSetAtom } from 'jotai';
import { currentPathAtom, currentNavPathAtom } from '../../assets/Jotai';
import { useEffect } from 'react';
import { LaboInner } from '../../templates/LaboInner';
import laboData from '../../assets/jsons/labo.json';
import pageInfo from '../../assets/jsons/pageInfo.json';

export const Labo = () => {
  const currentPath = useAtomValue(currentPathAtom);
  const setCurrentNavPath = useSetAtom(currentNavPathAtom);

  useEffect(() => {
    setCurrentNavPath(pageInfo.Labo.to);
  }, [setCurrentNavPath]);

  return (
    <LaboInner laboData={laboData} currentPath={currentPath} />
  );
};