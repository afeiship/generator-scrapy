import os


def env_select():
    is_local = os.environ.get('SERVER_IP') == '127.0.0.1'
    if is_local:
        return 'local'
    return 'remote'
