// DO NOT MODIFY THIS FILE

/**
 * ${game['description']}
 * @namespace ${game_name}
 */

// This manages the game for you

const GameManager = require(`${'$'}{__basedir}/joueur/gameManager`);

class ${game_name}GameManager extends GameManager {}

${game_name}GameManager.gameVersion = '${game_version}';

${game_name}GameManager.prototype._gameObjectClasses = {
% for game_obj_key in sort_dict_keys(game_objs):
  ${game_obj_key}: require('./${lowercase_first(game_obj_key)}'),
% endfor
};

module.exports = ${game_name}GameManager;
