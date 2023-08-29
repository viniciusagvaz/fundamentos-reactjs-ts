import styles from "./Header.module.css";

import vvLogo from '../assets/vv-logo.svg'


export function Header() {
	return (
		<header className={styles.header}>
      <img src={vvLogo} alt='Logotipo do Ignite' />
		</header>
	);
}
