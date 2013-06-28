# Create your views here.
from django.shortcuts import render_to_response
import board.struct_pb2

posts = []

def add_post(req):
    posts.add[1]
    pass

def index(req):
    return render_to_response('index.html')

def list_posts(req):
    return posts;
