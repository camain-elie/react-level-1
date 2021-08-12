import { useState } from 'react';
import PropTypes from 'prop-types';

import './CheckboxList.css';

const areAllChecked = arr => arr.every( value => value === true );

export default function CheckboxList ({ checkboxArray }) {

    const [checkboxesState, setCheckboxesState] = useState( new Array(checkboxArray.length).fill(false));

    const handleOnChange = (position) => {
        const updatedCheckboxesState = checkboxesState.map((item, index) => 
            (index === position ? !item : item));
        
        setCheckboxesState(updatedCheckboxesState);
    };

    const checkAll = () => {
        if(areAllChecked(checkboxesState)){
            setCheckboxesState(new Array(checkboxArray.length).fill(false));    
        }else{
            setCheckboxesState(new Array(checkboxArray.length).fill(true));
        }
    };

    const generateCheckboxList = () => {
        return checkboxArray.map(
            (item, index) => {
                return (
                    <li key={index} >
                        <label >
                            <input
                                type="checkbox"
                                value={item}
                                checked={checkboxesState[index]}
                                onChange={() => handleOnChange(index)}
                            />
                            {item}
                        </label>
                    </li>
                );
            }
        );
    };


    const checkboxList = generateCheckboxList();

    return (
        <div className="checkbox-list" >
            <ul>
                <li>
                    <label >
                        <input
                            type="checkbox"
                            checked={areAllChecked(checkboxesState)}
                            onChange={() => checkAll()}
                        />
                        Select all
                    </label>
                </li>

                {checkboxList}
            </ul>
        </div>
    );
}

CheckboxList.propTypes = {
    checkboxArray: PropTypes.arrayOf(PropTypes.string),
};