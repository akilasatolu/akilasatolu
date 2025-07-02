import{ Tag } from '../atoms/Tag';

type TagListProps = {
  tagListData: string[];
};

export const TagList= (props: TagListProps) => {
  return (
    <div className="flex flex-wrap space-x-2">
      {props.tagListData.map((item, index) => (
        <Tag key={index} text={item} />
      ))}
    </div>
  );
};