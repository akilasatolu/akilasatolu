import { NormalText } from '../atoms/NormalText';

type AboutMeMsgProps = {
  text: string;
};

export const AboutMeMsg = (props: AboutMeMsgProps) => {
  return (
    <div>
      <NormalText text={props.text} />
    </div>
  );
};