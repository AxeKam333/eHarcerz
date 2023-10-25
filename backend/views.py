from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .models import *
import json

# Create your views here.

@csrf_exempt
def get_badges(request):
    try:
        badges = Badge.objects.all()
        list = []
        for badge in badges:
            list.append({"date": badge.id, "badge": badge.name, "scout": badge.requirements})
        return HttpResponse(
        status=200,
        content=json.dumps(list),
        content_type="application/json",
        )
    except:
        return HttpResponse(
        status=500,
        content=json.dumps({"message": "Internal server error"}),
        content_type="application/json",
    )
    
@csrf_exempt
def scouts(request):
    try:
        troop = Troop.objects.get(id="1")
        print(troop)
        patrols = Patrol.objects.filter(troop=troop)
        print(patrols)
        scouts = Scout.objects.filter(patrol__in=patrols)
        print(scouts)
        list = []
        for scout in scouts:
            list.append({"id": scout.id, "name": scout.first_name + " " + scout.last_name})
        return HttpResponse(
        status=200,
        content=json.dumps(list),
        content_type="application/json",
        )
    except:
        return HttpResponse(
        status=500,
        content=json.dumps({"message": "Internal server error"}),
        content_type="application/json",
    )

@csrf_exempt
def data(request):
    return HttpResponse(
    status=200,
    content=bytes('[{"id": "0", "date": "%s", "badge": "%s", "scout": "%s"},{"id": "1", "date": "1", "badge": "1", "scout": "1"}]' % ("25.10", "Slowik","Jakiś"), 'UTF-8'),
    content_type="application/json",
)