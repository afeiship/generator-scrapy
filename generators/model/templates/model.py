import datetime
from peewee import *
from ..db import db


class <%- ctx.classify(model_name) %>(Model):
    title = CharField()
    content = TextField()

    # common fields
    is_crawled = BooleanField(default=False)
    created_at = DateTimeField(default=datetime.datetime.now())
    updated_at = DateTimeField(default=datetime.datetime.now())

    class Meta:
        database = db
        table_name = '<%- ctx.pluralize(model_name) %>'
