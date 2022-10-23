from scrapy.loader import ItemLoader
from itemloaders.processors import MapCompose, TakeFirst, Join

class <%- ctx.classify(app_name) %>Loader(ItemLoader):
  default_output_processor = TakeFirst()
