import Link from "next/link"
import styles from "./Card.module.css"
import H1 from "@/components/H1/H1"

const Card = ({
    id,
    title,
    image,
    description,
    price
}) => {
    return (
        <div className={styles.Card}>
            <Link href={`/products/${id}`}>
                <H1>{title}</H1>
            </Link>
            <img src={image} alt={title} />
            <p>{description.substr(0,100)}</p>
            <p className="price">{price}</p>
        </div>
    )
} 

export default Card