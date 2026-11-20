import { NavLink } from "react-router";

function Sidebar() {

    const menuItems = [
        { to: "/", label: "Tổng quan" },
        { to: "/hang-sua", label: "Hãng sữa" },
        { to: "/khach-hang", label: "Khách hàng" },
        { to: "/san-pham/danh-sach", label: "Sản phẩm - 1 cột" },
        { to: "/san-pham/luoi", label: "Sản phẩm - 5 cột" },
    ];

    return (
        <aside className="sidebar">

            <div className="brand">
                <h2>QLBH</h2>
                <p>Quản lý cửa hàng sữa</p>
            </div>

            <nav className="sidebar-menu">

                {menuItems.map((item) => (

                    <NavLink
                        key={item.to}
                        to={item.to}
                        end={item.to === "/"}
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >
                        {item.label}
                    </NavLink>

                ))}

            </nav>

        </aside>
    );
}

export default Sidebar;