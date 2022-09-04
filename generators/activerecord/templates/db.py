from orator import DatabaseManager, Schema
import jsw_nx as nx

databases = {
    'default': nx.env_select(),
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
        'password': '98LNaNmPjJbesmEI',
        'prefix': ''
    }
}

db = DatabaseManager(databases)
schema = Schema(db)
