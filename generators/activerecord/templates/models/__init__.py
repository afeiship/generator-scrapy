from orator import Model
from orator import DatabaseManager
from ..db import databases

db = DatabaseManager(databases)
Model.set_connection_resolver(db)
