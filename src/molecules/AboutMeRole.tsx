import { BoldText } from '../atoms/BoldText';

type AboutMeRoleProps = {
  text: string;
};

export const AboutMeRole = (props: AboutMeRoleProps) => {
  return (
    <div>
      <BoldText text={props.text} />
    </div>
  );
};