import { Link, Outlet } from 'react-router-dom';
import Profile from './Profile';
import styles from './layout.module.css';
import classNames from 'classnames';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
export default function Layout() {
  
  return (
    <div className={styles.conteiner}>
      <header className={styles.header}>
          <div className={styles.header_section}>
            <Avatar  sx={{mr: 1, marginLeft: 2 }} src="/yakor.png" />
            <Link className={classNames(styles.header_main_item)} to={'/'}>РИАС РБ</Link>
            <Link className={classNames(styles.link, styles.header_item)} to={'/notices'}>Для судоводителей</Link>
            {/* <Link className={classNames(styles.link, styles.header_item)} to={'/gabarit'}>Сроки навигации</Link> */}
            <Link className={classNames(styles.link, styles.header_item)} to={'/infmenu'}>Инфраструктура ВВП</Link>
          </div>
          <div className={styles.header_section}>
            <Profile />
          </div>
      </header>
      
      <main className={styles.main}>
          <Outlet />
      </main>

      <footer className={styles.footer}>
        Администрация водного транспорта
      </footer>
    </div>
  );
}