function ListColumn ({datas, sizeL}){
    if(!datas || datas.length === 0) return;
    return (
        <ul className='list_column'>
            {datas.map((d, i) => {
                return (
                <li key={i} className={'list_column_item' + (sizeL?'_l':'')}>
                    {d}
                </li>
                )
            })}
        </ul>
    );
}

export default ListColumn;