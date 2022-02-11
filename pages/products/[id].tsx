import {useRouter} from 'next/router'

const Product = () => {
    const router = useRouter();
    return (
        <>
            <h2>
                Produto: {router.query.id}
            </h2>
        </>
    )
}

export default Product;