from orator import DatabaseManager, Schema
databases = {
    'mysql': {
        'driver': 'mysql',
        'host': 'rm-2zej62ye899z61b5o.mysql.rds.aliyuncs.com',
        'database': 'uniprot_spider',
        'user': 'root',
        'password': 'OGQ2NTJkZjlhYjRh',
        'prefix': ''
    }
}
db = DatabaseManager(databases)
schema = Schema(db)