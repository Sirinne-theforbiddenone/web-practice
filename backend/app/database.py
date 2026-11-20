import sqlite3
from pathlib import Path
from contextlib import closing

# Database nằm tại backend/qlbh.db
DB_PATH = Path(__file__).resolve().parents[1] / "qlbh.db"


def get_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    """Tạo database và các bảng nếu chưa tồn tại."""

    with closing(get_connection()) as conn:

        conn.executescript("""
            CREATE TABLE IF NOT EXISTS HangSX (
                mahs TEXT PRIMARY KEY,
                tenhangsx TEXT NOT NULL,
                diachi TEXT,
                dienthoai TEXT,
                email TEXT
            );

            CREATE TABLE IF NOT EXISTS KhachHang (
                makh TEXT PRIMARY KEY,
                tenkh TEXT NOT NULL,
                gioitinh INTEGER NOT NULL,
                diachi TEXT,
                dienthoai TEXT
            );

            CREATE TABLE IF NOT EXISTS SanPham (
                masp TEXT PRIMARY KEY,
                tensp TEXT NOT NULL,
                hangsua TEXT NOT NULL,
                loaisua TEXT,
                trongluong TEXT,
                dongia INTEGER NOT NULL,
                mota TEXT,
                hinh TEXT
            );
        """)

        conn.commit()


def fetch_all(sql, params=()):
    """Trả về danh sách nhiều bản ghi."""

    with closing(get_connection()) as conn:
        rows = conn.execute(sql, params).fetchall()
        return [dict(row) for row in rows]


def fetch_one(sql, params=()):
    """Trả về một bản ghi hoặc None."""

    with closing(get_connection()) as conn:
        row = conn.execute(sql, params).fetchone()
        return dict(row) if row else None