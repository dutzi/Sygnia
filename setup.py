from setuptools import setup, find_packages

setup(
    name='mockserver',
    version='1.0',
    packages=find_packages(),
    install_requires=['flask', 'flask_cors']
)
