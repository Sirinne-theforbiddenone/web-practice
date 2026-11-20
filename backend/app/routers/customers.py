from fastapi import APIRouter

from app.database import fetch_all
from app.schemas import Customer

router = APIRouter()


@router.get("", response_model=list[Customer])
def get_customers():

    sql = """
        SELECT *
        FROM KhachHang
        ORDER BY makh
    """

    return fetch_all(sql)