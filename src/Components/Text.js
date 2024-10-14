import React from 'react';

function Text(props){
    const txt = props.children.split(/(\n)/).map((t, i) => {
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