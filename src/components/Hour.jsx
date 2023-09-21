import PropTypes from 'prop-types';
import { FaLongArrowAltDown, FaLongArrowAltUp, FaEquals } from 'react-icons/fa';


import './Hour.css';

const Hour = ({ hour }) => {
    return (
        <div className="hour">
            <div>{hour.hour}</div>
            <div className="up-container">

                <div>
                    {hour.up === 'no' ? null : hour.up === 'up' ? (
                        <FaLongArrowAltUp color="green" />
                    ) : hour.up === 'down' ? (
                        <FaLongArrowAltDown color="red" />
                    ) : (
                        <FaEquals color="blue" />
                    )}
                </div>

                <div>{hour.temp}</div>
            </div>
        </div>
    );
};

Hour.propTypes = {
    hour: PropTypes.shape({
        hour: PropTypes.string.isRequired,
        temp: PropTypes.string.isRequired,
        up: PropTypes.string.isRequired
    }).isRequired
};

export default Hour;
