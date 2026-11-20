import { Link } from "react-router";

function Dashboard() {

    return (

        <section>

            <h1>Quản lý cửa hàng sữa</h1>

            <p>
                Chào mừng bạn đến với hệ thống QLBH.
            </p>

            <div className="dashboard-grid">

                <Link to="/hang-sua" className="dashboard-card">
                    <h2>Hãng sữa</h2>
                    <p>Thông tin các nhà sản xuất</p>
                </Link>

                <Link to="/khach-hang" className="dashboard-card">
                    <h2>Khách hàng</h2>
                    <p>Danh sách khách hàng</p>
                </Link>

                <Link to="/san-pham/luoi" className="dashboard-card">
                    <h2>Sản phẩm</h2>
                    <p>Danh sách sản phẩm sữa</p>
                </Link>

            </div>

        </section>

    );

}

export default Dashboard;