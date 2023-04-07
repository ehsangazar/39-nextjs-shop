import Card from "@/components/Card/Card"
import styles from "./ProductList.module.css"

const ProductList = ({
    products
}) => {
    return (
        <div className={styles.ProductList}>
            {products.map((product) => (
                <Card 
                    key={`product-${product.id}`}
                    id={product.id}
                    title={product.title}
                    image={product.image}
                    description={product.description}
                    price={product.price}
                />
            ))}
        </div>
    )
}

export default ProductList