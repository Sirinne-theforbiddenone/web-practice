import { Routes, Route } from "react-router";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Manufacturers from "./pages/Manufacturers";
import Customers from "./pages/Customers";
import ProductsList from "./pages/ProductsList";
import ProductsGrid from "./pages/ProductsGrid";
import ProductDetail from "./pages/ProductDetail";


function App() {

    return (

        <div className="app-shell">

            <Sidebar />

            <main className="main-content">

                <Routes>

                    <Route
                        path="/"
                        element={<Dashboard />}
                    />

                    <Route
                        path="/hang-sua"
                        element={<Manufacturers />}
                    />

                    <Route
                        path="/khach-hang"
                        element={<Customers />}
                    />

                    <Route
                        path="/san-pham/danh-sach"
                        element={<ProductsList />}
                    />

                    <Route
                        path="/san-pham/luoi"
                        element={<ProductsGrid />}
                    />

                    <Route
                        path="/san-pham/:masp"
                        element={<ProductDetail />}
                    />

                </Routes>

            </main>

        </div>

    );
}

export default App;