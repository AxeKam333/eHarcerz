# eHarcerz
## About

Site eHarcerz is created to help scout team leaders (especially from organization ZHR from Poland) with handling information about their units. Goal is to provide useful, secure online tools to manage badges and ranks earned by scouts.

Created using Django framework.

## Important commands

While running commands, ensure that you're in the same directory as [manage.py](./manage.py).

### Run server
To run django dev server you need to run:

```
python3 manage.py runserver 
```
### Automatically add badges from json
To add badges to database you need to edit 
[badges_from_json.py](backend/management/commands/badges_from_json.py) 
file. Change this line:

```
with open(config("BADGES")) as file:
```
Into this (fill in the appropriate file path):
```
with open('path/to/file/badges.json') as file:
```


Then run this custom command in the terminal:
(after migrating changes)

```
python3 manage.py badges_from_json
```

### Add superuser
Run:
```
python3 manage.py createsuperuser
```
and then provide registration data. Use them to log in on the [admin site](http://localhost:8000/admin/).

### Configure database
Run:
```
python3 manage.py makemigrations
python3 manage.py migrate
```

### For more information check out [Django documentation](https://docs.djangoproject.com/en/4.2/topics/migrations/).

## Setup React

build an react server:
```
npm run build
```

that should create compiled [index.html](frontend/dist/index.html)

server is starting static page: [server_starting.html](templates/server_starting.html)