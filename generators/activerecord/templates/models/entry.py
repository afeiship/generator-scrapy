# from orator import Model
from .base_model import BaseModel


class Entry(BaseModel):
    __table__ = 'entries'
    pass
