from django.shortcuts import render
from django.http import HttpResponse
from stopnie_i_sprawnosci.settings import FRONTEND_LOCATION

def index(request):
    try:
        with open(FRONTEND_LOCATION) as react_frontend:
            return HttpResponse(content=bytes(react_frontend.read(), "UTF-8"))
    except FileNotFoundError:
        return render(request, "server_starting.html")