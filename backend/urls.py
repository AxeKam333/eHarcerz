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
    path('api//troop/badges', views.get_badges, name='get_badges'),
    path('api/hello-world', views.hello_world, name='hello_world')
]