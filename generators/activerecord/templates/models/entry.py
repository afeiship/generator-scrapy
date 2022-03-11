# from orator import Model
from .abstract_model import AbstractModel


class Entry(AbstractModel):
    __table__ = 'entries'
    pass
