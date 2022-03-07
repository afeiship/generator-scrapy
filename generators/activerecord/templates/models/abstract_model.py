from orator import Model


class AbstractModel(Model):
    @classmethod
    def find_or_new_by(cls, options):
        entity = cls.where(options).first()
        if not entity:
            entity = __class__()
            for k in options:
                v = options[k]
                setattr(entity, k, v)
        return entity
