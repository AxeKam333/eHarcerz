# Stopnie i sprawności
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
Into this:
```
with open('path/to/file/badges.json') as file:
```


Then run this custom command in the terminal:

```
python3 manage.py badges_from_json
```
