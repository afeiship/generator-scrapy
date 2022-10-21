from peewee import *
from spider_knlib.db import db


class Book(Model):
    title = CharField()
    content = TextField()

    class Meta:
        database = db
        table_name = 'books'
