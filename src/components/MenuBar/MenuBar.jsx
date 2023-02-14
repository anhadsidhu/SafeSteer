
import styles from './MenuBar.module.css';
import {Link, Outlet} from 'react-router-dom'


export default function MenuBar(props){

    
    return (
    <div className={styles.navbar}>
        {/* pass the menu options as props! */}
        {
            props.menuOptions.map(option => option.showAuth && <Link to={option.label} key={option.label} onClick={option.hasLogoutOption ? props.handleLogout: ''}>{option.label}</Link>)
        }
    </div>
   
    )
}