# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
# from itemadapter import ItemAdapter
# from spider_nces_edu_gov.models.sample_post import SamplePost
from <%= app_name %>.db import col_posts

class SpiderSamplePipeline:
    def process_item(self, item, spider):
        command = item.get("command", "MUST_HAVING")
        payload = item.get("payload")
        method = getattr(self, command, None)
        if method:
            method(payload, item, spider)
        return item

    def save_mongo_posts(self, payload, item, spider):
        post_id = payload.get("post_id")
        col_posts.update_one(
            {"post_id": post_id},
            {"$set": payload},
            upsert=True
        )
        spider.logger.info(f"✅ save_mongo_posts: {post_id}")
