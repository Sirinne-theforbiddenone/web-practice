## Cách chạy code:
# 1: 
Clone repo về máy
# 2: 
Tạo môi trường ảo, sau đó chạy lệnh: python -m pip install -r requirements.txt
# 3:
Tạo 2 terminal
- Terminal 1:
    + cd backend
    + python -m pip install -r requirements.txt
- Terminal 2: cd frontend
# 3:
- Terminal 1: uvicorn app.main:app --reload
- Terminal 2: npm run dev, sau đó mở trình duyệt, truy cập http://localhost:5173/