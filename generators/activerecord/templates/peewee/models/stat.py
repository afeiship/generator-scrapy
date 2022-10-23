import datetime
from peewee import *
from ..db import db


class Stat(Model):
    count = IntegerField()
    description = CharField()
    created_at = DateTimeField(default=datetime.datetime.now())
    updated_at = DateTimeField(default=datetime.datetime.now())

    class Meta:
        database = db
        table_name = 'stats'
