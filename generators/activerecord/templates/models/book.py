from peewee import *
from ..db import db


class Book(Model):
    title = CharField()
    content = TextField()

    class Meta:
        database = db
        table_name = 'books'
