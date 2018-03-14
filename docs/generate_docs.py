import os
import os.path
import shutil
import subprocess
import sys

def run(*args, **kwargs):
    error_code = subprocess.call(*args, **kwargs)
    if error_code != 0: # an error happened
        sys.exit(error_code)

if os.path.exists("./output"):
    shutil.rmtree("./output")

if os.path.isdir("./output"):
    shutil.rmtree("./output")

run("npm install", shell=True)
run("npm run docs", shell=True)

# cleanup files we made
#shutil.rmtree("./node_modules")
