from orator import DatabaseManager, Schema
databases = {
    'mysql': {
        'driver': 'mysql',
        'host': '127.0.0.1',
        'database': 'uniprot_spider',
        'user': 'root',
        'password': '123456',
        'prefix': ''
    }
}
db = DatabaseManager(databases)
schema = Schema(db)
