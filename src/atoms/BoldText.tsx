type BoldTextProps = {
    text: string;
};

export const BoldText = (props: BoldTextProps) => {
    return <p className="font-bold text-base">{props.text}</p>;
};