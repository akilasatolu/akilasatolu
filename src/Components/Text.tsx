import React from 'react';

function Text(props: any){
    const txt = props.children.split(/(\n)/).map((t: string, i: number) => {
        return (
            <React.Fragment key={i}>
                { t.match(/\n/) ? <br /> : t }
            </React.Fragment>
        );
    });
    return (
        <div className="texts">
            <p>{txt}</p>
        </div>
    );
}

export default Text;