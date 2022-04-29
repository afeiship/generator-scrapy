# from orator import Model
from .abstract_model import AbstractModel


class <%= ModelName %>(AbstractModel):
    __table__ = '<%= model_name %>s'
    pass
