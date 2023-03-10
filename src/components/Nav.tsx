import { A } from "solid-start";
import styles from './Nav.module.scss'

function Nav() {
    return (
        <nav class={styles.nav}>
            <A href="/">Home</A>
            <A href="/about">About</A>
        </nav>
    )
}

export default Nav;