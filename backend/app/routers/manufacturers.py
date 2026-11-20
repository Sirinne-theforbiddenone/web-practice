from fastapi import APIRouter
from app.database import fetch_all
from app.schemas import Manufacturer

router = APIRouter()


@router.get("", response_model=list[Manufacturer])
def get_manufacturers():

    sql = """
        SELECT *
        FROM HangSX
        ORDER BY mahs
    """

    return fetch_all(sql)