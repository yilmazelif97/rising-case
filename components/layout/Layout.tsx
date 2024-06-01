
import { ReactNode } from 'react';
import SideMenu from '../sidemenu/SideMenu';
import styles from '../../styles/Layout.module.css'

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div  className={styles.container} >
      <div className={styles.sideMenu}>
      <SideMenu/>

      </div>
      <div className={styles.layout}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
