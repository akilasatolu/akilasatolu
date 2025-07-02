import { Link } from 'react-router-dom';

type NavLinkProps = {
  to: string;
  text: string;
  isSelected?: boolean;
}

export const NavLink = (props: NavLinkProps) => {
  return (
    <Link to={props.to} className={props.isSelected ? 'text-blue-500 font-bold' : ''}>
      {props.text}
    </Link>
  );
};