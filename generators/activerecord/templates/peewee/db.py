import os
from peewee import *

mysql_pwd = os.getenv('MYSQL_PWD')

db = MySQLDatabase(
  "<%= scrapyAppName %>",
  host='127.0.0.1',
  port=3306,
  user='root',
  passwd=mysql_pwd,
  charset='utf8'
)
