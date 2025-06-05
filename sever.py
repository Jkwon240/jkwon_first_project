from fastapi import FastAPI
from dist import index.html

app = FastAPI()

    

# 전체 축제 목록 조회
@app.get("/")
def read_index():
    index_path = os.path.join(os.path.dirname(__file__), "index.html")
    return FileResponse(index_path)

