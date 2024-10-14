const BadgeList = ({datas}) => {
    if(!datas || datas.length === 0) return;
    return (
    <ul className='badge_list'>
        {datas.map((d, i) => {
            return (
                <li key={i} className='badge_item'>{d}</li>
            );
        })}
    </ul>
    );
};

export default BadgeList;