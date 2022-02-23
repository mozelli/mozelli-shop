import Image from 'next/image'
import ProductImage from '../../../public/product-mobile.png'
import styles from '../../../styles/Product.module.scss'


export default function Product() {
    return (
        <>
            <div className={ styles.container }>
                <div className={ styles.imagem }>
                    <Image 
                        src={ ProductImage }
                        alt= "Produto"    
                    />
                </div>
                <div className={ styles.nome }>

                </div>
                <div className={ styles.preco }>

                </div>
                <div className={ styles.avaliacao }>

                </div>
            </div>
            <div className={ styles.container }>
                <div className={ styles.imagem }>
                    <Image 
                        src={ ProductImage }
                        alt= "Produto"    
                    />
                </div>
                <div className={ styles.nome }>

                </div>
                <div className={ styles.preco }>

                </div>
                <div className={ styles.avaliacao }>

                </div>
            </div>
        </>
    )
}