# from orator import Model
from jsw_scrapy.models import BaseModel


class Entry(BaseModel):
    __table__ = 'entries'
