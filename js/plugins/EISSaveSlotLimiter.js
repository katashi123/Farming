'use strict';

//=============================================================================
// EISSaveSlotLimiter.js                                                             
//=============================================================================

/*:
*
* @author Kino
* @plugindesc Limits the number of save slot available in-game.
*
* @param Save Slot Cap
* @desc Adjusts the number of save slots available.
* @default 5
*
* @help
* Version 1.00
//=============================================================================
//  Contact Information
//=============================================================================
*
* Contact me via twitter: EISKino, or on the rpg maker forums.
* Username on forums: Kino.
*
* Forum Link: http://forums.rpgmakerweb.com/index.php?/profile/75879-kino/
* Website Link: http://endlessillusoft.com/
* Twitter Link: https://twitter.com/EISKino
* Patreon Link: https://www.patreon.com/EISKino
*
* Hope this plugin helps, and enjoy!
* --Kino
*/

(function () {

  var params = PluginManager.parameters("EISSaveSlotLimiter");
  var maxSaves = Number(params['Save Slot Cap']);
  function setup() {
    'use strict';

    var _DataManager_maxSaveFiles = DataManager.maxSavefiles;

    DataManager.maxSavefiles = function () {
      if (maxSaves > 0) {
        return maxSaves;
      } else {
        return _DataManager_maxSaveFiles.call(this);
      }
    };
  }

  setup();
})();