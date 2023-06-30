import PropTypes from 'prop-types';
import css from './section.module.css';


export default function Section({ children }) {
    return (
        <section>
            <h2 className={css.title}>Please leave feedback</h2>
            {children}
        </section>
    );
}

Section.propTypes = { children: PropTypes.arrayOf(PropTypes.object) };