import { useNavigate, useLocation } from 'react-router-dom';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import { pageInfo } from '../assets/const';

export const HandleBack = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      {location.pathname !== pageInfo.Home.to && (
        <button onClick={() => navigate(-1)} className='flex items-center space-x-1'>
          <FaRegArrowAltCircleLeft size={16} />
          <span>Back</span>
        </button>
      )}
    </>
  );
};