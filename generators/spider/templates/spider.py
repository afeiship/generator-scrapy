import scrapy


class <%- ctx.classify(model_name) %>Spider(scrapy.Spider):
    name = '<%= model_name %>'
    allowed_domains = ['www.baidu.com']
    start_urls = ['http://www.baidu.com/']

    def parse(self, response):
        pass
