import React from 'react';


function Card(props){
    return(
        <>
        <div className="cards">
            <div className="card">
                <img src = {props.imgsrc} alt="Naruto" className="card_img" />
                <div className="cardinfo">
                    <h3 className="serialname">{props.sname}</h3>
                    <div className="genre"><span>{props.genre}</span></div>
                    <br/>
                    <a href={props.link} target ="blank">
                        <button className="btn-hover">Watch Now</button>
                    </a>
                </div>
            </div>
        </div>
        </>
    );

}


export default Card;

