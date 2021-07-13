import React from 'react';
import './Portfolio.css'

const Work = (props) => {

    return <div className="work">
        <img className="work_img" src={props.url} />
        <div className="glass">
            <p>{props.title}</p>
        </div>
    </div>
};
export default Work;