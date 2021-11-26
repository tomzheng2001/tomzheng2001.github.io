import React from "react";

const Card = (props) => {


    const divStyle = {
        backgroundImage: 'url(' + props.imgsrc + ')',
    }

    return (
        <div className="card" style={divStyle}>
            <h1 className="card__header">
                {props.header}
            </h1>
            <hr />
            <p className="card__description">
                {props.description}
            </p>
            <div className="card__buttons">
                <a href={props.codelink} rel="noreferrer" target="_blank" className="card__buttons-icon">
                    Code <i class="fab fa-github-square"></i>
                </a>
                <a href={props.sitelink} rel="noreferrer" target="_blank" className="card__buttons-icon">
                    Site <i class="fas fa-window-restore"></i>
                </a>
            </div>
        </div>
    );
};

export default Card;