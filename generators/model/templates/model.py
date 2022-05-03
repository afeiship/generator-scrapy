# from orator import Model
from .abstract_model import AbstractModel


class <%- ctx.classify(model_name) %>(AbstractModel):
    __table__ = '<%- ctx.pluralize(model_name) %>'
