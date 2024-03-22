import pymongo

client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["<%= app_name %>"]

# col_posts 表
col_posts = db["posts"]
col_posts.create_index("post_id", unique=True)
