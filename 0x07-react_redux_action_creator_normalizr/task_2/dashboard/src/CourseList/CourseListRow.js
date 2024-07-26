import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
    header: {
        backgroundColor: '#deb5b545',
    },

    row: {
        backgroundColor: '#f5f5f5ab',
    },

    rowChecked: {
        backgroundColor: '#e6e4e4',
    }
});


const CourseListRow = ({ isHeader, textFirstCell, textSecondCell}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <tr className={isHeader ? css(styles.header) : isChecked ? css(styles.rowChecked) : css(styles.row)}>
        {
            isHeader ?
                (textSecondCell === null) ?
                    <th colSpan={2}>{textFirstCell}</th>
                    :
                    <>
                        <th>{textFirstCell}</th>
                        <th>{textSecondCell}</th>
                    </>
                :
                <>
                    <td>
                        <input type='checkbox' onChange={handleCheckboxChange} />
                        {textFirstCell}
                    </td>
                    <td>{textSecondCell}</td>
                </>
        }
        </tr>
    );
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
};

export default CourseListRow;
