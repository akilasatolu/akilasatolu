import { Home } from './home/index';
import { Experience } from './experience/index';
import { Works } from './works/index';
import { Labo } from './labo/index';
import { CmnNav } from "./cmn/CmnNav";
import { CmnHeader } from './cmn/CmnHeader';
import { CmnFooter } from './cmn/CmnFooter';
import '../styles/pages/App.css';
import pageInfo from '../assets/jsons/pageInfo.json';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useSetAtom } from 'jotai';
import { currentPathAtom } from '../assets/Jotai';
import { useEffect } from 'react';

export const App = () => {
  const setCurrentPath = useSetAtom(currentPathAtom);
  const location = useLocation();
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  return (
    <div className='px-[4%] py-[3rem] min-h-screen flex flex-col justify-between sm:px-[8%]'>
      <CmnHeader />
      <div className='flex-grow space-y-20 flex flex-col justify-center sm:flex-row-reverse sm:justify-end sm:space-y-0'>
        <div className='max-w-[100%]'>
          <Routes>
            <Route path={pageInfo.Home.to} element={<Home />} />
            <Route path={pageInfo.Experience.to} element={<Experience />} />
            <Route path={pageInfo.Works.to} element={<Works />} />
            <Route path={`${pageInfo.Labo.to}*`} element={<Labo />} />
          </Routes>
        </div>
        <CmnNav />
      </div>
      <CmnFooter />
    </div>
  )
}