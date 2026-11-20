import { useEffect, useState } from "react";

import { api } from "../api/client";
import DataTable from "../components/DataTable";
import GenderAvatar from "../components/GenderAvatar";


function Customers() {

    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    useEffect(() => {

        api.getCustomers()

            .then((data) => {
                setCustomers(data);
            })

            .catch((err) => {
                setError(err.message);
            })

            .finally(() => {
                setLoading(false);
            });

    }, []);


    const columns = [

        {
            key: "makh",
            label: "Mã khách hàng"
        },

        {
            key: "tenkh",
            label: "Tên khách hàng"
        },

        {
            key: "gioitinh",
            label: "Giới tính",
            render: (customer) => (
                <GenderAvatar gender={customer.gioitinh} />
            )
        },

        {
            key: "diachi",
            label: "Địa chỉ"
        },

        {
            key: "dienthoai",
            label: "Số điện thoại"
        }

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
                <h1>Thông tin khách hàng</h1>
                <p>Danh sách khách hàng của cửa hàng</p>
            </div>

            <DataTable
                columns={columns}
                rows={customers}
                rowKey="makh"
            />

        </section>

    );

}

export default Customers;