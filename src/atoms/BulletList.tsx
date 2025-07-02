type BulletListProps = {
  textListArr: string[][];
};

export const BulletList = (props: BulletListProps) => {
  return (
    <ul className="list-disc pl-5">
      {props.textListArr.map((textList: string[], index) => (
        textList.map((text: string, subIndex) => (
          <li key={`${index}-${subIndex}`} className={`${subIndex === 1 ? "ml-4" : subIndex === 2 ? "ml-8" : ""} ${index !== 0 && subIndex === 0 ? "mt-3" : ""}`}>
            {text}
          </li>
        ))
      ))}
    </ul>
  );
};