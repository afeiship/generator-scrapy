import scrapy


class <%- ctx.classify(model_name) %>Spider(scrapy.Spider):
    name = '<%= model_name %>'
    handle_httpstatus_list = [400]
    start_urls = ['https://www.baidu.com/']

    def parse(self, response):
        pass
