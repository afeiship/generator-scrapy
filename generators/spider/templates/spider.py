import scrapy
import jsw_nx as nx


class <%- ctx.classify(model_name) %>Spider(scrapy.Spider):
    name = '<%= model_name %>'
    handle_httpstatus_list = [400]
    start_urls = ['https://www.baidu.com/']

    custom_settings = {
        'CONCURRENT_REQUESTS': 100,
    }

    @property
    def records(self):
        pass
        # return self.get_un_crawled(entity_class='XyClass')

    @property
    def is_done(self):
        return len(self.records) == 0

    def start_requests(self):
      records = self.records
      if self.is_done:
          nx.Pm2Manager.delete(self.name)
          self.logger.info('All records are crawled')

      for record in records:
        pass
