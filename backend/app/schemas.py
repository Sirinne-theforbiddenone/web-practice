from pydantic import BaseModel


class Manufacturer(BaseModel):
    mahs: str
    tenhangsx: str
    diachi: str | None = None
    dienthoai: str | None = None
    email: str | None = None


class Customer(BaseModel):
    makh: str
    tenkh: str
    gioitinh: int
    diachi: str | None = None
    dienthoai: str | None = None


class Product(BaseModel):
    masp: str
    tensp: str
    hangsua: str
    loaisua: str | None = None
    trongluong: str | None = None
    dongia: int
    mota: str | None = None
    hinh: str | None = None