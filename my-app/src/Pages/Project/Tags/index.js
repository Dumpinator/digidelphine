import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Tags = ({ data }) => {
    console.log(data);
    function tagsGenerator(data) {
        const result = [];
        for (let i = 0; i < data.length; i++) {
            const arr = data[i];
            console.log(arr);
            result.push(
                <li className={`tags__tag tag--${arr[2]}`} key={`${arr[0]}-${Date.now()}`}>
                    <a rel="noreferrer" className="tag__links" href={`${arr[1]}`} target="_blank" >{arr[0]}</a>
                </li>
            )
        }
        return (result)
    }

    return (
        <ul className="tags">
            { data && tagsGenerator(data) }
        </ul>
    )
}

Tags.propTypes = {
    data: PropTypes.oneOfType([
        PropTypes.array.isRequired
    ])
}

export default Tags;
