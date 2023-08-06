from django.db import models

# hierarchy of badges:

class Categories(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name


class Spec(models.Model):
    name = models.CharField(max_length=100)
    
    category = models.ForeignKey(to=Categories, on_delete=models.DO_NOTHING, default=None, blank=True)

    def __str__(self):
        return self.name


class Badge(models.Model):
    name = models.CharField(max_length=100)
    stars = models.IntegerField(default=1)

    spec = models.ForeignKey(to=Spec, on_delete=models.DO_NOTHING, default=None, blank=True)
    
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

    troop = models.ForeignKey(to=Troop, on_delete=models.DO_NOTHING)

    def __str__(self):
        return self.name


class Scout(models.Model):
    first_name = models.CharField(max_length=100,default='Imie')
    last_name = models.CharField(max_length=100,default=None, blank=True)

    patrol = models.ForeignKey(to=Patrol, on_delete=models.DO_NOTHING, default=None, blank=True)

    RANK_NAMES = (
        ('BIS', 'BISZKOPT'),
        ('DH', 'DRUH'),
        ('MŁ', 'MŁODZIK'),
        ('WYW', 'WYWIADOWCA'),
        ('ĆW', 'ĆWIK'),
        ('HO', 'HARCERZ ORLI'),
        ('HR', 'HARCERZ RZECZYPOSPOLITEJ'),
    )
    rank = models.CharField(max_length=100, choices=RANK_NAMES, default='BISZ')

    badges = models.ManyToManyField(to=Badge, blank=True, default=None)

    def __str__(self):
        return self.first_name + ' ' + self.last_name