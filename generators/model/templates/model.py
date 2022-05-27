# from orator import Model
# from .abstract_model import AbstractModel
from jsw_scrapy.models import BaseModel


class <%- ctx.classify(model_name) %>(BaseModel):
    __table__ = '<%- ctx.pluralize(model_name) %>'
