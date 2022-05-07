from orator import DatabaseManager, Schema
from .helpers.env_select import env_select

databases = {
    'default': env_select(),
    # ====== remote ======
    'remote': {
        'driver': 'mysql',
        'host': 'rm-test.mysql.rds.aliyuncs.com',
        'database': '<%= app_name %>',
        'user': 'root',
        'password': '123456',
        'prefix': ''
    },

    #  ====== local ======
    'local': {
        'driver': 'mysql',
        'host': '127.0.0.1',
        'database': '<%= app_name %>',
        'user': 'root',
        'password': '123456',
        'prefix': ''
    }
}

db = DatabaseManager(databases)
schema = Schema(db)
