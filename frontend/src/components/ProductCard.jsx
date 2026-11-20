import { Link } from "react-router";


function formatPrice(price) {
    return new Intl.NumberFormat("vi-VN").format(price) + " VNĐ";
}


function ProductCard({ product, variant = "grid" }) {

    const cardClass = variant === "list"
        ? "product-card product-card-list"
        : "product-card";


    return (

        <article className={cardClass}>

            <Link to={`/san-pham/${product.masp}`}>

                <img
                    src={`/images/${product.hinh || "placeholder.svg"}`}
                    alt={product.tensp}
                    onError={(event) => {
                        event.currentTarget.src =
                            "/images/placeholder.svg";
                    }}
                />

            </Link>


            <div className="product-info">

                <Link to={`/san-pham/${product.masp}`}>

                    <h3>{product.tensp}</h3>

                </Link>

                <p>Hãng sản xuất: {product.hangsua}</p>

                <p>Loại sữa: {product.loaisua}</p>

                <p>Trọng lượng: {product.trongluong}</p>

                <strong>
                    {formatPrice(product.dongia)}
                </strong>

            </div>

        </article>

    );

}

export default ProductCard;