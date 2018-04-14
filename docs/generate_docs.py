import os
import os.path
import shutil
import subprocess
import sys

def run(*args, **kwargs):
    error_code = subprocess.call(*args, **kwargs)
    if error_code != 0: # an error happened
        sys.exit(error_code)

if os.path.isdir("./output"):
    shutil.rmtree("./output")

if os.path.isdir("./temp"):
    shutil.rmtree("./temp")

shutil.copytree("../games", "./temp/games")

for root, dirnames, filenames in os.walk("./temp/games"):
    for filename in filenames:
        if filename != "gameManager.js":
            continue
        path = os.path.join(root, filename)
        lower_game_name = os.path.split(root)[1]
        game_name = lower_game_name[0].upper() + lower_game_name[1:]
        with open(path, "r+") as file:
            contents = file.read()
            index = contents.find(" * @namespace")

            file.seek(0)
            file.write(contents[:index] + """ *
 * <h3 class="subsection-title">Rules</h3>
 * <p>
 * The full game rules for {0} can be found on <a href="https://github.com/siggame/Cadre/blob/master/Games/{0}/rules.md">GitHub</a>.
 * </p>
 * <p>
 * Additional materials, such as the <a href="https://github.com/siggame/Cadre/blob/master/Games/{0}/story.md">story</a> and <a href="https://github.com/siggame/Cadre/blob/master/Games/{0}/creer.yaml">game template</a> can be found on <a href="https://github.com/siggame/Cadre/blob/master/Games/{0}/">GitHub</a> as well.
 * </p>
""".format(game_name) + contents[index:])

run("npm install", shell=True)
run("npm run docs", shell=True)

# cleanup files we made
#shutil.rmtree("./node_modules")
shutil.rmtree("./temp")
