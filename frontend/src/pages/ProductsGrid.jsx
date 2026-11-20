import { useEffect, useState } from "react";

import { api } from "../api/client";
import ProductCard from "../components/ProductCard";


function ProductsGrid() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    useEffect(() => {

        api.getProducts()

            .then((data) => {
                setProducts(data);
            })

            .catch((err) => {
                setError(err.message);
            })

            .finally(() => {
                setLoading(false);
            });

    }, []);


    if (loading) {
        return <p>Đang tải sản phẩm...</p>;
    }

    if (error) {
        return <p className="error-message">{error}</p>;
    }


    return (

        <section>

            <div className="page-heading">

                <h1>Thông tin các sản phẩm</h1>

                <p>Danh sách sản phẩm dạng lưới năm cột</p>

            </div>


            <div className="product-grid">

                {products.map((product) => (

                    <ProductCard
                        key={product.masp}
                        product={product}
                    />

                ))}

            </div>

        </section>

    );

}

export default ProductsGrid;