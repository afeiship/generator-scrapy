from peewee import *
from ..db import db


class <%- ctx.classify(model_name) %>(Model):
    title = CharField()
    content = TextField()

    class Meta:
        database = db
        table_name = '<%- ctx.pluralize(model_name) %>'
