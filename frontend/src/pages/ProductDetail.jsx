import { useEffect, useState } from "react";

import { useParams, Link } from "react-router";

import { api } from "../api/client";


function formatPrice(price) {

    return new Intl.NumberFormat("vi-VN").format(price) + " VNĐ";

}


function ProductDetail() {

    const { masp } = useParams();

    const [product, setProduct] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");


    useEffect(() => {

        setLoading(true);

        setError("");

        api.getProduct(masp)

            .then((data) => {
                setProduct(data);
            })

            .catch((err) => {
                setError(err.message);
            })

            .finally(() => {
                setLoading(false);
            });

    }, [masp]);


    if (loading) {
        return <p>Đang tải thông tin sản phẩm...</p>;
    }


    if (error) {
        return (

            <section>

                <h1>Không thể tải sản phẩm</h1>

                <p className="error-message">{error}</p>

                <Link to="/san-pham/luoi">
                    Quay lại danh sách
                </Link>

            </section>

        );
    }


    if (!product) {
        return <p>Không tìm thấy sản phẩm.</p>;
    }


    return (

        <section>

            <div className="page-heading">

                <h1>Chi tiết sản phẩm</h1>

                <p>Mã sản phẩm: {product.masp}</p>

            </div>


            <div className="product-detail">

                <div className="product-detail-image">

                    <img
                        src={`/images/${product.hinh || "placeholder.svg"}`}
                        alt={product.tensp}
                        onError={(event) => {
                            event.currentTarget.src =
                                "/images/placeholder.svg";
                        }}
                    />

                </div>


                <div className="product-detail-info">

                    <h2>{product.tensp}</h2>

                    <p>
                        <strong>Hãng sữa:</strong>
                        {" "}{product.hangsua}
                    </p>

                    <p>
                        <strong>Loại sữa:</strong>
                        {" "}{product.loaisua}
                    </p>

                    <p>
                        <strong>Trọng lượng:</strong>
                        {" "}{product.trongluong}
                    </p>

                    <div className="product-description">

                        <h3>Thông tin dinh dưỡng / Mô tả</h3>

                        <p>{product.mota || "Chưa có thông tin mô tả."}</p>

                    </div>

                    <div className="detail-price">

                        Đơn giá: {formatPrice(product.dongia)}

                    </div>

                    <Link
                        to="/san-pham/luoi"
                        className="back-button"
                    >
                        Quay lại danh sách
                    </Link>

                </div>

            </div>

        </section>

    );

}

export default ProductDetail;