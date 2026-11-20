from app.database import init_db, get_connection

# 1. Khởi tạo các bảng
init_db()

# 2. Kết nối database
conn = get_connection()

# 3. Dữ liệu hãng sữa
manufacturers = [
    ("VM", "Vinamilk", "TP. Ho Chi Minh", "0281234567", "info@vinamilk.vn"),
    ("NF", "Nutifood", "TP. Ho Chi Minh", "0281234568", "info@nutifood.vn"),
    ("AB", "Abbott", "USA", "0281234569", "info@abbott.vn"),
    ("DS", "Daisy", "Viet Nam", "0281234570", "info@daisy.vn"),
    ("DL", "Dutch Lady", "Binh Duong", "0281234571", "info@dutchlady.vn"),
    ("DM", "Dumex", "Denmark", "0281234572", "info@dumex.vn"),
    ("MJ", "Mead Johnson", "USA", "0281234573", "info@meadjohnson.vn"),
]

# 4. Dữ liệu khách hàng
customers = [
    ("KH001", "Nguyen Minh Anh", 0, "Go Vap, TP. Ho Chi Minh", "0912345678"),
    ("KH002", "Tran Hoang Nam", 1, "Quan 10, TP. Ho Chi Minh", "0912345679"),
    ("KH003", "Le Thu Ha", 0, "Quan 1, TP. Ho Chi Minh", "0912345680"),
    ("KH004", "Pham Quoc Bao", 1, "Thu Duc, TP. Ho Chi Minh", "0912345681"),
    ("KH005", "Do Ngoc Linh", 0, "Go Vap, TP. Ho Chi Minh", "0912345682"),
    ("KH006", "Nguyen Duc Minh", 1, "Quan 5, TP. Ho Chi Minh", "0912345683"),
    ("KH007", "Hoang Thu Trang", 0, "Binh Thanh, TP. Ho Chi Minh", "0912345684"),
    ("KH008", "Vo Thanh Tung", 1, "Tan Binh, TP. Ho Chi Minh", "0912345685"),
]

# 5. Dữ liệu sản phẩm
products = [
    (
        "SP001", "Similac Neo Sure", "Abbott",
        "Sua bot", "370g", 145000,
        "Sua bot danh cho tre nho", "placeholder.svg"
    ),
    (
        "SP002", "Abbott Pedia Sure", "Abbott",
        "Sua bot", "400g", 146000,
        "Sua dinh duong", "placeholder.svg"
    ),
    (
        "SP003", "Abbott Grow School", "Abbott",
        "Sua bot", "400g", 87000,
        "Sua bo sung dinh duong", "placeholder.svg"
    ),
    (
        "SP004", "Abbott Grow", "Abbott",
        "Sua bot", "400g", 87000,
        "Sua bot Abbott Grow", "placeholder.svg"
    ),
    (
        "SP005", "Gain IQ", "Abbott",
        "Sua bot", "400g", 107000,
        "San pham Gain IQ", "placeholder.svg"
    ),
    (
        "SP006", "Gain Advance", "Abbott",
        "Sua bot", "400g", 107000,
        "San pham Gain Advance", "placeholder.svg"
    ),
    (
        "SP007", "Sua dac Truong Sinh", "Vinamilk",
        "Sua dac", "360g", 11500,
        "Sua dac dong hop", "placeholder.svg"
    ),
    (
        "SP008", "Co Gai Ha Lan 456", "Dutch Lady",
        "Sua bot", "400g", 49500,
        "Sua bot Dutch Lady", "placeholder.svg"
    ),
    (
        "SP009", "Co Gai Ha Lan 123", "Dutch Lady",
        "Sua bot", "400g", 52600,
        "Sua bot Dutch Lady", "placeholder.svg"
    ),
    (
        "SP010", "Friso", "Dutch Lady",
        "Sua bot", "400g", 52000,
        "Sua bot Friso", "placeholder.svg"
    ),
]

# 6. Insert dữ liệu
try:
    conn.executemany(
        "INSERT OR IGNORE INTO HangSX VALUES (?, ?, ?, ?, ?)",
        manufacturers
    )

    conn.executemany(
        "INSERT OR IGNORE INTO KhachHang VALUES (?, ?, ?, ?, ?)",
        customers
    )

    conn.executemany(
        """
        INSERT OR IGNORE INTO SanPham
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        """,
        products
    )

    conn.commit()

    print("Seed data completed successfully!")

finally:
    conn.close()