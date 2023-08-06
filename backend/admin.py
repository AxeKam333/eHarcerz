from django.contrib import admin
from .models import Categories, Spec, Badge, Troop, Patrol, Scout

class BadgeInline(admin.TabularInline):
    model = Badge

class SpecInline(admin.TabularInline):
    model = Spec

@admin.register(Categories)
class CategoriesAdmin(admin.ModelAdmin):
    list_display = ('id','name',)
    inlines = [
        SpecInline,
    ]

@admin.register(Spec)
class SpecAdmin(admin.ModelAdmin):
    list_display = ('id','name', 'category')
    inlines = [
        BadgeInline,
    ]

@admin.register(Badge)
class BadgeAdmin(admin.ModelAdmin):
    search_fields = ['name']
    list_display = ('id','name', 'spec', 'stars')
    list_filter = ['spec', 'stars']

@admin.register(Troop)
class TroopAdmin(admin.ModelAdmin):
    list_display = ('id','name',)

@admin.register(Patrol)
class PatrolAdmin(admin.ModelAdmin):
    list_display = ('id','name', 'troop')

@admin.register(Scout)
class ScoutAdmin(admin.ModelAdmin):
    list_display = ('id','first_name', 'last_name', 'patrol')
    filter_horizontal = ['badges']


admin.site_header = 'Stopnie i Sprawności'