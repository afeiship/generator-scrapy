# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
from spider_nces_edu_gov.models.sample_post import SamplePost


class SpiderSamplePipeline:
    def process_item(self, item, spider):
        command = item.get("command", "MUST_HAVING")
        payload = item.get("payload")
        method = getattr(self, command, None)
        if method:
            method(payload, item, spider)
        return item

    def save_page(self, payload, item, spider):
        code = payload.get("code")
        total = payload.get("total")
        entity, created = SamplePost.get_or_create(code=code, defaults={"total": total})

        if not created:
            spider.logger.info(f"Page {code} already exists")
        else:
            spider.logger.info(f"Page {code} created")
