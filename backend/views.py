from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .models import *
import json

# Create your views here.

@csrf_exempt
def badges(request):
    try:
        badges = Badge.objects.all()
        list_of_badges = []
        for badge in badges:
            list_of_badges.append({
                "id":str(badge.hash_id), 
                "name": badge.name, 
                "requirements": badge.requirements, 
                "stars": badge.stars, 
                "spec": badge.spec.name, 
                "category": badge.spec.category.name})
        specs = Spec.objects.all()
        list_of_specs = []
        for spec in specs:
            list_of_specs.append({
                "id": str(spec.hash_id), 
                "name": spec.name, 
                "comment": spec.comment, 
                "category": spec.category.name})
        categories = Category.objects.all()
        list_of_categories = []
        for category in categories:
            list_of_categories.append({
                "id": str(category.id), 
                "name": category.name})
        list_of_ranks = RANK_NAMES
        
        return HttpResponse(
        status=200,
        content=json.dumps({
            "badges": list_of_badges, 
            "specs": list_of_specs, 
            "categories": list_of_categories,
            "ranks": list_of_ranks}),
        content_type="application/json",
        )
    except:
        return HttpResponse(
        status=500,
        content=json.dumps({"message": "Internal server error"}),
        content_type="application/json",
    )

@csrf_exempt
def badge_events(request):
    try:
        events = BadgeEvent.objects.filter(scout__patrol__troop__id="1")
        list = []
        for event in events:
            print(event.date)
            list.append({
                "date": str(events[0].date).split(" ")[0], 
                "scout": event.scout.first_name + " " + event.scout.nick, 
                "badge": event.badge.name, 
                "comment": event.comment })
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
def scouts(request):    # w aktualnym wyglądzie dostępna tylko dla druzynowego
    try:
        troop = Troop.objects.get(id="1")
        patrols = Patrol.objects.filter(troop=troop)
        scouts = Scout.objects.filter(patrol__in=patrols)
        list_of_scouts = []
        for scout in scouts:
            badges = [(badge.name) for badge in scout.badges.all()]
            list_of_scouts.append({
                "id": scout.id, 
                "name": scout.first_name + " " + scout.nick,
                "patrol": scout.patrol.name,
                "rank": scout.rank,
                "badges": ", ".join(badges)
            })
        list_of_patrols = []
        for patrol in patrols:
            list_of_patrols.append({
                "id": patrol.id,
                "name": patrol.name,
                "leader": patrol.leader
            })
        return HttpResponse(
        status=200,
        content=json.dumps({
            "scouts": list_of_scouts, 
            "patrols": list_of_patrols}),
        content_type="application/json",
        )
    except:
        return HttpResponse(
        status=500,
        content=json.dumps({"message": "Internal server error"}),
        content_type="application/json",
    )