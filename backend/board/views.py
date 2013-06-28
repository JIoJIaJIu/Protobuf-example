# Create your views here.
from django.shortcuts import render_to_response
from django.http import HttpResponse
from board.struct_pb2 import Board
import binascii
import struct

board = Board()

def add_post(req):
    # hardcode
    binary =  tuple(map(lambda x: int(x.split("=")[1]), req.body.split("&")))
    string = "".join(map(lambda i: chr(i), binary))
    entity = board.entity.add()
    print entity.ParseFromString(string)
    print board
    return HttpResponse(200)

def index(req):
    return render_to_response('index.html')

def list_posts(req):
    string = board.SerializeToString()
    res = HttpResponse(string);
    return res
