function ListColumn ({datas, sizeL}: { datas: any; sizeL?: boolean }){
    if(!datas || datas.length === 0) return;
    return (
        <ul className='list_column'>
            {datas.map((d: any, i: number) => {
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