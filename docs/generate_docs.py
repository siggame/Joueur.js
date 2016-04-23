import os
import os.path
import shutil
import subprocess
import argparse
import re

parser = argparse.ArgumentParser(description='Runs the python 3 client doc generation script.')
parser.add_argument('game', action='store', help='the name of the game you want to document. Must exist in ../games/')

args = parser.parse_args()

game_name = args.game[0].upper() + args.game[1:]
lower_game_name = game_name[0].lower() + game_name[1:]

if os.path.isdir("./output"):
    shutil.rmtree("./output")

with open("_conf.json", "r") as template_conf:
    with open("conf.json", "w+") as temp_conf:
        temp_conf.write(template_conf.read().replace("###GAME_NAME###", game_name))

with open("../README.md", "r") as f:
    readme = f.read()

readme = readme.replace("GAME_NAME", game_name).replace("game_name", lower_game_name)

with open("README.md", "w+") as f:
    f.write(readme)


subprocess.call(["npm install"], shell=True)
subprocess.call(["jsdoc -t node_modules/jaguarjs-jsdoc -c conf.json -r README.md -d ./output ../games/{}/".format(lower_game_name)], shell=True)

# cleanup files we made
os.remove("conf.json")
os.remove("README.md")
shutil.rmtree("./node_modules")
