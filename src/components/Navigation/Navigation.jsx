
import styles from './Navigation.module.css'
const Navigation = () => {
    // console.log(styles)
    return (
        <>
            <nav className={`${styles.navigation} container`}>
                <div>
                    <img className={styles.logo} src="logo.png" alt="Logo" />
                </div>
                    <ul>
                        <li className={styles.navLinks}>Home</li>
                        <li className={styles.navLinks}>About</li>
                        <li className={styles.navLinks}>Contact</li>
                    </ul>
            </nav>
        </>
    )
}

export default Navigation