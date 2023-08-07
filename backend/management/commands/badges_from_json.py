from decouple import config
from django.core.management.base import BaseCommand, CommandError
import json
from backend.models import Category, Spec, Badge

# full list of badges you will find at the address: https://stamps.zhr.pl/api/badges

class Command(BaseCommand):
    help = 'Załaduj dane o sprawnościach do bazy danych'

    def handle(self, *args, **options):
        with open(config("BADGES")) as file: # instead of 'config("BADGES")', put the path to the file with badges.json
            data = json.load(file)
            for category in data['categories']:
                Category.objects.create(
                    name=category['name'],
                    id=category['id'],
                    ordinal=category['ordinal'],
                )
            for spec in data['badges']:
                spec_info=spec['spec']
                print(spec_info['name'])
                Spec.objects.create(
                    hash_id=spec['id'],
                    ordinal=spec['ordinal'],
                    category=Category.objects.get(pk=spec['category']),

                    name=spec_info['name'],
                    comment=spec_info['comment'],
                    # keywords=spec_info['keywords'],
                )
                for badge in spec_info['badges']:
                    print(badge['name'])
                    Badge.objects.create(
                        hash_id=badge['id'],
                        name=badge['name'],
                        stars=badge['stars'],
                        requirements=json.dumps(badge['requirements']),
                        spec=Spec.objects.get(hash_id=spec['id']),
                    )