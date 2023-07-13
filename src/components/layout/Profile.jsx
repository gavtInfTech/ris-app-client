import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import MenuListComposition from './MenuListComposition'
import styles from './layout.module.css';
import classNames from 'classnames';

export default function Profile() {

  const {auth} = useContext(AuthContext);

    if (auth.role !== null) {
        
        return <MenuListComposition />
    } 
    return <Link 
      className={classNames(styles.link, styles.profileLink)}  
      to={'/login'} 
    >
        Войти
    </Link>
  
}