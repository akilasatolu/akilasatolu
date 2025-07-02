import { HomeInner } from '../../templates/HomeInner';
import data from '../../assets/jsons/index.json';
import { pageInfo } from '../../assets/const.ts';
import type { HomeData } from '../../assets/types';
import { useSetAtom } from 'jotai';
import { currentNavPathAtom } from '../../assets/Jotai';
import { useEffect } from 'react';

export const Home = () => {
  const homeData: HomeData = data;
  const setCurrentNavPath = useSetAtom(currentNavPathAtom);
  
  useEffect(() => {
    setCurrentNavPath(pageInfo.Home.to);
  }, [setCurrentNavPath]);

  return (
    <HomeInner homeData={homeData} />
  );
};