import { NavLink } from '../atoms/NavLink';
import { useAtomValue } from 'jotai';
import { currentNavPathAtom } from '../assets/Jotai';
import pageInfo from '../assets/jsons/pageInfo.json';

export const CmnNavList = () => {
  const currentNavPath = useAtomValue(currentNavPathAtom);

  return (
    <ul className='space-y-4'>
      <li>{/* //チラつき防止で''も対象 */}
        <NavLink to={pageInfo.Home.to} text={pageInfo.Home.text} isSelected={currentNavPath === '' || currentNavPath === pageInfo.Home.to} />
      </li>
      <li>
        <NavLink to={pageInfo.Experience.to} text={pageInfo.Experience.text} isSelected={currentNavPath === pageInfo.Experience.to} />
      </li>
      <li>
        <NavLink to={pageInfo.Works.to} text={pageInfo.Works.text} isSelected={currentNavPath === pageInfo.Works.to} />
      </li>
      <li>
        <NavLink to={pageInfo.Labo.to} text={pageInfo.Labo.text} isSelected={currentNavPath === pageInfo.Labo.to} />
      </li>
    </ul>
  );
};