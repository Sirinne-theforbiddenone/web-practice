from fastapi import APIRouter, HTTPException

from app.database import fetch_all, fetch_one
from app.schemas import Product

router = APIRouter()


@router.get("", response_model=list[Product])
def get_products():

    sql = """
        SELECT *
        FROM SanPham
        ORDER BY masp
    """

    return fetch_all(sql)


@router.get("/{masp}", response_model=Product)
def get_product_detail(masp: str):

    sql = """
        SELECT *
        FROM SanPham
        WHERE masp = ?
    """

    product = fetch_one(sql, (masp,))

    if product is None:
        raise HTTPException(
            status_code=404,
            detail="Product not found"
        )

    return product