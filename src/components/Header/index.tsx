import styles from '../../../styles/Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser, faAngleRight, faBagShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

//import hamburgerMenu from '../../public/hamburger-menu.svg'

export default function Header() {
    return (
        <div className={ styles.container }>
            <div className={ styles['top-header'] }>
                <div className={ styles.left }>
                    <div className={ styles["menu-icon"] }>
                        <FontAwesomeIcon icon={ faBars } size="2x" inverse />
                    </div>
                    <div className={ styles.logo }>
                        mozelli shop
                    </div>
                </div>
                <div className={ styles.right }>
                    <span>
                        Entrar <span><FontAwesomeIcon icon={ faAngleRight } size="sm" inverse /></span>
                    </span>
                    <div className={ styles['icon-user'] }>
                        <FontAwesomeIcon icon={ faUser } size="2x" inverse />
                    </div>
                    <div className={ styles['icon-bag-shopping'] }>
                        <FontAwesomeIcon icon={ faBagShopping } size="2x" inverse />
                    </div>
                </div>
            </div>
            <div className={ styles.search } >
                <div className={ styles['search-bar'] } ></div>
                <div className={ styles['button-search-bar'] }>
                    <span>
                        <FontAwesomeIcon icon={ faMagnifyingGlass } size="2x" />
                    </span>
                </div>
            </div>
            
        </div>
    )
}
