//=============================================================================
// Dragon3025 - Number Input Extremum
// DRGN_Number_Input_Extremum.js
//=============================================================================
/*:
 * @plugindesc This allows you to set a max and min for the number input
 * command (can be disabled). Digits now affect each other.
 *
 * @author Dragon3025
 *
 * @help
 * ============================================================================
 * Introduction and Instructions
 * ============================================================================
 *
 * This allows you to set a max and min for the number input command. You can
 * remove the max and min by setting it to any amount below zero. Digits now
 * affect each other, so:
 *
 * 1 0 0  ->  0 9 9		0 9 9  ->  1 0 0
 *    -1				   +1
 *
 * ============================================================================
 * Instructions
 * ============================================================================
 *
 * Use this plugin command:
 * Changelimit type value
 *
 * For type you can put "Max" and "Min" without qoutes. And if you set the value
 * lower that 0, it will disable it.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.0:
 * - Finished plugin.
 */
//=============================================================================

var Imported = Imported || {};
Imported.DRGN_Number_Input_Extremum = true;

var $gameMaxNumberInput       = -1;
var $gameMinNumberInput       = -1;

Window_NumberInput.prototype.start = function() {
    this._maxDigits = $gameMessage.numInputMaxDigits();
    this._number = $gameVariables.value($gameMessage.numInputVariableId());
    this._number = this._number.clamp(0, Math.pow(10, this._maxDigits) - 1);
	var max = $gameMaxNumberInput
	var maxfit = 0
	for (var i = 1; i<=this._maxDigits; i++) {
		maxfit += 9 * Math.pow(10, i - 1)
	}
	if (max < 0 || max > maxfit) {
		max = maxfit
	}
	var min = Math.max(0, $gameMinNumberInput)
	this._number = this._number.clamp(min, max)
    this.updatePlacement();
    this.placeButtons();
    this.updateButtonsVisiblity();
    this.createContents();
    this.refresh();
    this.open();
    this.activate();
    this.select(0);
};

Window_NumberInput.prototype.changeDigit = function(up) {
    var index = this.index();
    var place = Math.pow(10, this._maxDigits - 1 - index);
    var n = Math.floor(this._number / place) % 10;
	var max = $gameMaxNumberInput
	var maxfit = 0
	for (var i = 1; i<=this._maxDigits; i++) {
		maxfit += 9 * Math.pow(10, i - 1)
	}
	if (max < 0 || max > maxfit) {
		max = maxfit
	}
	var min = Math.max(0, $gameMinNumberInput)
    this._number -= n * place;
    if (up) {
        n += 1;
    } else {
        n -= 1;
    }
    this._number += n * place;
	this._number = this._number.clamp(min, max)
    this.refresh()
    SoundManager.playCursor();
};

(function() {

    var _Game_Interpreter_pluginCommand =
            Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === 'Changelimit') {
            var extremum = args[0];
			var value = Number($gameVariables.value(27));
            if (extremum == 'Max') {
				$gameMaxNumberInput = value;
			} else if (extremum == 'Min') {
				$gameMinNumberInput = value;
			}
        }
    };

})();

//=============================================================================
// End of File
//=============================================================================
