type TagProps = {
  text: string;
};

export const Tag = (props: TagProps) => {
  return (
    <span className="my-1 px-2 bg-blue-500/30 rounded-md border border-blue-500 flex items-center justify-center">
      {props.text}
    </span>);
};