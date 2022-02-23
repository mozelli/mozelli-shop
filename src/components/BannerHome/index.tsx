import styles from '../../../styles/Banners.module.scss'
import Image from 'next/image'

import Banner from '../../../public/banner-01-xs.png'

export default function BannerHome() {
    return (
        <div className={ styles.container }>
            <div className={ styles.image }>
                <Image
                    src={ Banner }
                    alt="Banner promocional"
                />
            </div>
        </div>        
    )
}