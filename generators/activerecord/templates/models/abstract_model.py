from orator import Model


class AbstractModel(Model):
    @classmethod
    def find_or_new_by(cls, options):
        entity = cls.find_by(options)
        if not entity:
            entity = cls()
            for k in options:
                v = options[k]
                setattr(entity, k, v)
        return entity

    @classmethod
    def find_by(cls, options):
        return cls.where(options).first()
