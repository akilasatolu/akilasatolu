import { FaGithub } from 'react-icons/fa';

export const AboutMeSns = () => {
  return (
    <ul className='flex space-x-4 py-[0.5rem]'>
      <li className='inline-block' >
        <a href="https://github.com/akilasatolu" target='_blank' rel='noopener noreferrer'>
          <FaGithub size={24} />
        </a> 
      </li>
    </ul>
  );
};