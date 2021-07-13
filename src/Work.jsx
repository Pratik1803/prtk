import React from 'react';
import './Portfolio.css'

const Work = (props) => {

    return <a href={props.href}>
        <div className="work">
            <img className="work_img" src={props.url} />
            <div className="glass">
                <p>{props.title}</p>
            </div>
        </div>
    </a>
};
export default Work;