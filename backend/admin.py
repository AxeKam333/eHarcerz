from django.contrib import admin
from .models import Categories, Spec, Badge, Troop, Patrol, Scout


admin.site.register(Categories)
admin.site.register(Spec)
admin.site.register(Badge)
admin.site.register(Troop)
admin.site.register(Patrol)
admin.site.register(Scout)

admin.site_header = 'Stopnie i Sprawności'