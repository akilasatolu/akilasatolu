type NormalTextProps = {
    text: string;
};

export const NormalText = (props: NormalTextProps) => {
    return <p className="font-normal text-base">{props.text}</p>;
};