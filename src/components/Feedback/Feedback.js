import PropTypes from 'prop-types';
import css from './Feedback.module.css'


const Feedback = ({options, Increment}) => {

        return (<>
    <ul className={css.list}>
        {options.map((option) => {
        return (
        <li className={css.item} key={option}><button type="button" className={css.button} onClick={() => Increment(option)}
        >{option}</button></li> 
        ) 
        })}
    </ul>     
    </>)
    }

    Feedback.propTypes = {
        options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        Increment: PropTypes.func.isRequired 
    }
    
export default Feedback