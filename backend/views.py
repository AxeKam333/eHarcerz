from django.shortcuts import render
from django.http import HttpResponse
from .models import *

# Create your views here.

def get_badges(request):
    badges = Badge.objects.all()
    return 

def hello_world(request):
    hello = "Hello World!"
    return HttpResponse(
    status=200,
    content=bytes('{"hash_id": "%s", "models": "%s", "error": ""}' % (hello, hello), 'UTF-8'),
    content_type="application/json",
)