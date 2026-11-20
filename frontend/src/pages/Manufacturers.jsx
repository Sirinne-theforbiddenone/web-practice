import { useEffect, useState } from "react";

import { api } from "../api/client";
import DataTable from "../components/DataTable";


function Manufacturers() {

    const [manufacturers, setManufacturers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        api.getManufacturers()

            .then((data) => {
                setManufacturers(data);
            })

            .catch((err) => {
                setError(err.message);
            })

            .finally(() => {
                setLoading(false);
            });

    }, []);


    const columns = [
        { key: "mahs", label: "Mã hãng sữa" },
        { key: "tenhangsx", label: "Tên hãng sữa" },
        { key: "diachi", label: "Địa chỉ" },
        { key: "dienthoai", label: "Điện thoại" },
        { key: "email", label: "Email" }
    ];


    if (loading) {
        return <p>Đang tải dữ liệu...</p>;
    }

    if (error) {
        return <p className="error-message">Lỗi: {error}</p>;
    }


    return (

        <section>

            <div className="page-heading">
                <h1>Thông tin hãng sữa</h1>
                <p>Danh sách các hãng sữa trong hệ thống</p>
            </div>

            <DataTable
                columns={columns}
                rows={manufacturers}
                rowKey="mahs"
            />

        </section>

    );

}

export default Manufacturers;