from fastapi import FastAPI
from typing import Optional
from pydantic import BaseModal

app = FastAPI()


@app.get('/')
def home() :
    return {"welcome homme"}

@app.get('/blog')
def index(limit:int = 10, published: bool = True, sort: Optional[str] = None): 
    print(published)
    return {"data" : f"{limit} blog list are {'published' if published == True else 'Not Published'}"}

@app.get('/blog/unpublished')
def unpublished() :
    return {"data" : "all unpublished blog"}

@app.get('/blog/{id}')
def show(id : int):
    return {
        "data" : id
    }

@app.get('/blog/{id}/comments') 
def comments():
    return {}


class Blog(BaseModal) : 
    title: str
    body: str
    published_at: Optional[bool]


@app.post('/blog')
def createPost(request: Blog) :
    return "post"


