const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL ||
    "http://localhost:8000/api";


async function request(endpoint) {
    const response = await fetch(
        `${API_BASE_URL}${endpoint}`
    );

    if (!response.ok) {
        throw new Error(
            `HTTP Error: ${response.status}`
        );
    }

    return await response.json();
}


// Các hàm giao tiếp với Backend
export const api = {

    getManufacturers() {
        return request("/manufacturers");
    },

    getCustomers() {
        return request("/customers");
    },

    getProducts() {
        return request("/products");
    },

    getProduct(masp) {
        return request(`/products/${masp}`);
    }

};