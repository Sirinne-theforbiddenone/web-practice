from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import manufacturers, customers, products

app = FastAPI(
    title="QLBH API",
    description="API quản lý cửa hàng sữa",
    version="1.0.0"
)

# Cho phép React gọi API từ một origin khác.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Đăng ký các nhóm API.
app.include_router(
    manufacturers.router,
    prefix="/api/manufacturers",
    tags=["Manufacturers"]
)

app.include_router(
    customers.router,
    prefix="/api/customers",
    tags=["Customers"]
)

app.include_router(
    products.router,
    prefix="/api/products",
    tags=["Products"]
)


@app.get("/api/health")
def health_check():
    return {
        "status": "ok",
        "message": "QLBH backend is running"
    }