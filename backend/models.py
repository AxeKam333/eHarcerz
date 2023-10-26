from django.db import models
import uuid

# ranks

RANK_NAMES = (
    ('-', 'BISZKOPT'),
    ('dh', 'DRUH'),
    ('mł', 'MŁODZIK'),
    ('wyw', 'WYWIADOWCA'),
    ('ćw', 'ĆWIK'),
    ('HO', 'HARCERZ ORLI'),
    ('HR', 'HARCERZ RZECZYPOSPOLITEJ'),
)

# hierarchy of badges:

class Category(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    ordinal = models.IntegerField(default=None, blank=True)
    
    def __str__(self):
        return self.name


class Spec(models.Model):
    hash_id = models.UUIDField(default=uuid.uuid1, editable=False)
    name = models.CharField(max_length=100)
    ordinal = models.IntegerField(default=None, blank=True)
    comment = models.CharField(max_length=2000, default=None, blank=True)

    category = models.ForeignKey(to=Category, on_delete=models.SET_NULL, default=None, blank=True, null=True)

    def __str__(self):
        return self.name


class Badge(models.Model):
    hash_id = models.UUIDField(default=uuid.uuid1, editable=False)
    name = models.CharField(max_length=100)
    stars = models.IntegerField(default=1)
    requirements = models.CharField(max_length=2000, default=None, blank=True)

    spec = models.ForeignKey(to=Spec, on_delete=models.SET_NULL, default=None, blank=True, null=True)
    
    def __str__(self):
        return self.name
    
   
# hierarchy of scouts:

class Troop(models.Model):
    name = models.CharField(max_length=100)
    number = models.IntegerField(default=0)
    patron = models.CharField(max_length=100, default=None, blank=True)

    def __str__(self):
        return self.name

class Patrol(models.Model):
    name = models.CharField(max_length=100)
    leader = models.CharField(max_length=100)

    troop = models.ForeignKey(to=Troop, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.name


class Scout(models.Model):
    first_name = models.CharField(max_length=100,default='Imie')
    nick = models.CharField(max_length=100,default=None, blank=True)

    patrol = models.ForeignKey(to=Patrol, on_delete=models.SET_NULL, default=None, blank=True, null=True)

    rank = models.CharField(max_length=100, choices=RANK_NAMES, default='-')

    badges = models.ManyToManyField(to=Badge, blank=True, default=None)

    def __str__(self):
        return self.first_name + ' ' + self.nick
    
# events

class Event(models.Model):
    
    date = models.DateTimeField(auto_now_add=True)
    scout = models.ForeignKey(to=Scout, on_delete=models.SET_NULL, default=None, blank=True, null=True)
    comment = models.CharField(max_length=100)

    def __str__(self):
        return self.comment + ' ' + str(self.date)
    
class BadgeEvent(Event):
    badge = models.ForeignKey(to=Badge, on_delete=models.SET_NULL, default=None, blank=True, null=True)
    
class RankEvent(Event):
    rank = models.CharField(max_length=100, choices=RANK_NAMES, default='-')