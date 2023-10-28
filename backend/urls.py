from django.urls import path
from django.http import HttpResponse
from . import views


urlpatterns = [
    # landing page
    # path('', views.home, name='home'),
    # path('home', views.home, name='home'),

    # auth
    # path('sign-up', views.sign_up, name='sign_up'),
    # path('create-note', views.create_note, name='create_note'),
    # path('open_note/<int:id>/', views.open_note, name='open_note'),

    # api
    path('api/badges', views.badges, name='badges'),
    path('api/badge-events', views.badge_events, name='badge_events'),
    path('api/scouts', views.scouts, name='scouts'),

    # scaut pages? badges pages? patrol pages?
]