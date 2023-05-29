# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from spider_classify_fasta.models.ncbi_fasta import NcbiFasta
from spider_classify_fasta.settings import FILES_STORE
from scrapy.pipelines.files import FilesPipeline


class SpiderClassifyFastaFilesPipeline(FilesPipeline):
    def file_path(self, request, response=None, info=None, *, item=None):
        filename = item['filename']
        return filename

    def file_downloaded(self, response, request, info, *, item=None):
        checksum = super().file_downloaded(response, request, info, item=item)
        # sample code start -----
        ncbi_id = item['ncbi_id']
        entity = NcbiFasta.select().where((NcbiFasta.ncbi_id == ncbi_id)).first()
        if entity:
            entity.is_crawled = True
            entity.md5 = checksum
            entity.save()
        # sample code end -----
        return checksum


class SpiderClassifyFastaPipeline:
    def process_item(self, item, spider):
        command = item.get('command')
        payload = item.get('payload')
        if not command or not payload:
            return item
        method = getattr(self, command, None)
        if method:
            method(payload, spider)
        return item

    def your_command(self, payload, spider):
        pass
