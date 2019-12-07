//=============================================================================
// WAY_StorageSystem.js
//=============================================================================
/*:
@plugindesc v1.6 This plugin allows you create different storage systems where
the player can store his items. <WAY_StorageSystem>

@param config
@text Storage Systems
@desc Add Storage Systems to your game.
@type struct<storage>[]
@default

@author waynee95

@help
==============================================================================
 ■ Usage
==============================================================================

>>> This plugin uses the new MV1.5.0 Plugin Parameter, so I recommend you to
update your editor. Your project can still be lower than MV1.5.0


This plugin allows you create different storage systems where the player can
store his items. This plugin does not add the ability to limit the player's
inventory.
You can use YEP_CoreEngine to restrict the player's inventory. Also this plugin
is compatible with YEP_ItemCore and YEP_X_ItemCategories.

Put this plugin at the bottom of the list.

How to create a storage system:
1. Open the plugin in the Plugin-Manager.
2. Click on Storage Systems.
3. Click on a free row.
4. Now you can configure the storage system.

The ids for the storage systems start at 0. So the first storage system will
have id 0, the next id 1, ...

==============================================================================
 ■ Parameter Overview
==============================================================================
Menu Background - Set an image for the Scene Background.

Storage Title - Title that will be displayed in the title window. You can use
escape codes here like \i[x], \c[x].

Info Window Text - Text that will be displayed in the info window. %1 will be
replaced with the current capacity of the storage.

Max Capacity - The maximum of items that can be stored.

Item Stack Size - If this paramter is not equal to none, a stack will count as
one item in regards of the max capacity. For example if the stack size is 8 and
the max capacity is 20, the same item can be stored 8 times but it will only
subtract 1 from the max capacity. This means you can store 8x20 items in the
storage system.

Display Categories - Are the different categories displayed in the stoage system
menu? This is only for visuals. All allowed types will be just in one list.
When your are using YEP_X_ItemCategories, this paramter must be set to true.

Allowed Item Types - Define which items can be stored in the storage system.
You can use the following types:
 - Items
 - Weapons
 - Armors
 - KeyItems

If you want more categories, you can use YEP_X_ItemCategories. Just add the
category name to the allowed types list.

==============================================================================
 ■ Scene Settings
==============================================================================
This is the section where you can change the look of the Storage Scene. You
can change that for every storage system individually.

The windows are created in the following order:

Help Window - Just your default Help Window.
Title Window - Displays the title of the storage system.
Command Window - Window for selecting if you want to add/remove an item.
Category Window - Window for choosing an item category.
Item Window - Displays the list of available items depending on the category.
Info Window - Displays the current and max capacity.
Number Window - Used for inputting how many items you want to add/remove.

==============================================================================
 ■ Notetags
==============================================================================
Item, Weapon, Armor Notetags:

<Cannot Store>
This makes it so that the item cannot be store in the storage system.

<Can Store Only In: x>
<Can Store Only In: x, x, x>
This makes it so that the item can only be stored in the specified storage systems.
 
==============================================================================
 ■ Plugin Commands
==============================================================================
Main Keyword: StorageSystem

-----------------------
StorageSystem open id
-----------------------
open - Keyword for opening a storage system.
Keep in mind that the id starts at 0!

id - The id of the storage system that will be opened. If no id is specified,
the last opened storage system will be opened.

-----------------------
StorageSystem add id item amount
-----------------------
add - Keyword for adding an item to a storage system.

id - The id of the storage system.

item - The item that will be added. Use $dataItems[id], $dataWeapons[id],
$dataArmors[id].

amount - Number of items that will be added.

-----------------------
StorageSystem remove id item amount
-----------------------
remove - Keyword for removing an item from a storage system.

id - The id of the storage system.

item - The item that will be removed. Use $dataItems[id], $dataWeapons[id],
$dataArmors[id].

amount - Number of items that will be removed.

-----------------------
StorageSystem clear id
-----------------------
clear - Keyword for clearing a storage system.

id - The id of the storage system.

-----------------------
StorageSystem change id number
-----------------------
change - Keyword for changing the max capacity of a storage system.

id - The id of the storage system.

number - New max capacity.

==============================================================================
 ■ Scriptcalls
==============================================================================
Global Object: $gameStorageSystems

$gameStorageSystems.open(id) - Opens a storage system. If no id is specified,
the last opened will be used.

$gameStorageSystems.storage(id) - Returns the storage system with the given id.

$gameStorageSystems.current() - Returns the last opened storage system.

The following script calls are called on a storage system object. Replace
storage with $gameStorageSystems.current() or $gameStorageSystems.storage(id).

storage.title() - Returns the title name.

storage.capacity() - Returns the current capacity.

storage.maxCapacity() - Returns the max capacity.

storage.items() - Returns all stored items.

storage.weapons() - Returns all stored weapons.

storage.armors() - Returns all stored armors.

storage.allItems() - Returns everything that is stored.

storage.isEmpty() - Returns either true or false.

storage.addItem(item, amount) - Adds an item to a storage system. Use $dataItems[id],
$dataWeapons[id], $dataArmors[id].

storage.removeItem(item, amount) - Removes an item from the storage system. If
no amount is specified, all items will be removed.

storage.clear() - Clears a storage system.

storage.changeMaxCapacity(number) - Changes the max capacity to the given
number.

==============================================================================
 ■ Terms of Use
==============================================================================
Free for any commercial or non-commercial project! [Credit: waynee95]

Special Thanks to:
 - Yanfly
 - SumRndmDde

==============================================================================
 ■ Contact Information
==============================================================================
If you have any issues or questions, you can contact me via the rpg maker
forums or discord.

Forum Link:
https://forums.rpgmakerweb.com/index.php?threads/waynee95s-storage-system-v1-4-updated-01-08-2017.80181/

Plugin Shop:
https://forums.rpgmakerweb.com/index.php?threads/waynee95s-plugin-shop-open.83030/

Discord Name:
waynee95#4261

If you wanna support me with a donation you can do that via paypal.
(https://www.paypal.me/waynee95)

==============================================================================
 ■ Changelog
==============================================================================
Version 1.6: 23.08.2017
 - Added .isEmpty() scriptcall
 - Added <Can Only Store In> notetag
 
Version 1.5: 18.08.2017
 - Added column parameter to the Item Window

Version 1.4: 01.08.2017
 - Added <Cannot store> notetag, so that the item cannot be store in the 
 storage system.
 - Fixed a bug with the open command.
 - Fixed bug with help window.
 
Version 1.3: 04.07.2017
 - Fixed bug with DisplayCategories and optimization upgrades

Version 1.2: 03.07.2017
 - Fixed bug with KeyItems and added Compatability with YEP_X_NewGamePlus

Version 1.1: 24.06.2017
 - Changed Parameter Parsing to convert to int and boolean

Version 1.0: 20.06.2017
 - Release!
*/

(function(win) {

'use strict';

win.Imported || (win.Imported = {});
win.Imported.WAY_StorageSystem = true;

var WAY = win.WAY || (win.WAY = {});
WAY.StorageSystem = WAY.StorageSystem || {};

// Global variable
win.$gameStorageSystems = null;

//=============================================================================
// Plugin Parameters
//=============================================================================
var parameters = win.$plugins.filter(function (plugin) {
		return /<WAY_StorageSystem>/ig.test(plugin.description);
	})[0].parameters.config;

// Function to parse parameters
var JSONSuperParse = function (string) {
	var temp;
	try {
		temp = win.JsonEx.parse(string);
	} catch (e) {
		return string;
	}
	if (typeof temp === 'object') {
		Object.keys(temp).forEach(function(key) {
			temp[key] = JSONSuperParse(temp[key]);
			if (temp[key] === '') {
				temp[key] = null;
			}
		});
	}
	return temp;
};

// Parse to JSON
var $dataStorage = JSONSuperParse(parameters);

if ($dataStorage === '') {
	console.warn('WAY_StorageSystem\nPlugin Parameters are not setup properly!');
	if (Utils.isNwjs() && Utils.isOptionValid('test')) {
		if (!require('nw.gui').Window.get().isDevToolsOpen()) {
			require('nw.gui').Window.get().showDevTools();
		}
	}
}

WAY.StorageSystem.config = $dataStorage;

//=============================================================================
// DataManager
//=============================================================================
var _isDatabaseLoaded = DataManager.isDatabaseLoaded;
var loaded = false;
DataManager.isDatabaseLoaded = function () {
	if (!_isDatabaseLoaded.call(this)) {
		return false;
	}

	if (!loaded) {
		this.processWAYSSNotetags($dataItems);
		this.processWAYSSNotetags($dataWeapons);
		this.processWAYSSNotetags($dataArmors);
		loaded = true;
	}
	return true;
};

DataManager.processWAYSSNotetags = function (group) {
	var re = /<(?:Can Store Only In):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
	for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		var notedata = obj.note.split(/[\r\n]+/);
		var length = notedata.length;

		obj.cannotStore = false;
		obj.onlyInStorage = [];

		for (var i = 0; i < length; i++) {
			var line = notedata[i];
			if (line.match(/<(?:CANNOT STORE)>/i)) {
				obj.cannotStore = true;
			} else if (line.match(re)) {
				var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
				obj.onlyInStorage = obj.onlyInStorage.concat(array);
			}
		}
	}
};

//=============================================================================
// Game_Interpreter
//=============================================================================
var _Game_Interpreter_pluginCommand = win.Game_Interpreter.prototype.pluginCommand;
win.Game_Interpreter.prototype.pluginCommand = function (command, args) {
    _Game_Interpreter_pluginCommand.apply(this, arguments);
    if (command.toLowerCase() === 'storagesystem') {
        switch (args[0].toLowerCase()) {
        case 'open':
			var storageId = args[1] !== '' ? parseInt(args[1]) : $gameStorageSystems._lastActive;
            win.$gameStorageSystems.open(storageId);
            break;
        case 'add':
            win.$gameStorageSystems.storage(parseInt(args[1])).addItem(eval(args[2]), parseInt(args[3]));
            break;
        case 'remove':
            win.$gameStorageSystems.storage(parseInt(args[1])).remove(eval(args[2]), -parseInt(args[3]));
            break;
        case 'clear':
            win.$gameStorageSystems.storage(parseInt(args[1])).clear();
			break;
        case 'change':
            win.$gameStorageSystems.storage(parseInt(args[1])).changeMaxCapacity(parseInt(args[2]));
            break;
        }
    }
};

//=============================================================================
// DataManager
//=============================================================================
var _DataManager_createGameObjects = win.DataManager.createGameObjects;
win.DataManager.createGameObjects = function () {
    _DataManager_createGameObjects.call(this);
    $gameStorageSystems = new Game_StorageSystems();
};

var _DataManager_makeSaveContents = win.DataManager.makeSaveContents;
win.DataManager.makeSaveContents = function () {
    var contents = _DataManager_makeSaveContents.call(this);
    contents.storageSystems = win.$gameStorageSystems;
    return contents;
};

var _DataManager_extractSaveContents = win.DataManager.extractSaveContents;
win.DataManager.extractSaveContents = function (contents) {
    _DataManager_extractSaveContents.call(this, contents);
    win.$gameStorageSystems = contents.storageSystems;
};

if (Imported.YEP_X_NewGamePlus) {

    var _DataManager_prepareNewGamePlusData = win.DataManager.prepareNewGamePlusData;
    win.DataManager.prepareNewGamePlusData = function () {
        _DataManager_prepareNewGamePlusData.call(this);
        this._ngpData.storageSystems = win.JsonEx.makeDeepCopy($gameStorageSystems);
    };

    var _DataManager_carryOverNewGamePlusData = win.DataManager.carryOverNewGamePlusData;
    win.DataManager.carryOverNewGamePlusData = function () {
        _DataManager_carryOverNewGamePlusData.call(this);
        win.$gameStorageSystems = this._ngpData.storageSystems;
    };

} // Imported YEP_X_NewGamePlus

//=============================================================================
// Game_StorageSystems
//=============================================================================
win.Game_StorageSystems.prototype.initialize = function () {
    this._data = [];
    this._lastActive = 0;
};

win.Game_StorageSystems.prototype.storage = function (storageId) {
    if (typeof $dataStorage[storageId] !== 'object') {
        return;
    }
    if ($dataStorage[storageId]) {
        if (!this._data[storageId]) {
            this._data[storageId] = new win.Game_StorageSystem(storageId);
        }
        return this._data[storageId];
    }
    return null;
};

win.Game_StorageSystems.prototype.current = function () {
    return this.storage(this._lastActive);
};

win.Game_StorageSystems.prototype.open = function (storageId) {
    if (typeof storageId !== 'undefined') {
        this._lastActive = storageId;
    } 
    if (!this.current()) {
        return;
    }
    win.SceneManager.push(Scene_Storage);
};

//=============================================================================
// Game_StorageSystem
//=============================================================================
win.Game_StorageSystem.prototype.initialize = function (storageId) {
    var storage = $dataStorage[storageId];
    this._storageId = storageId;
    this._title = storage.titleText;
    this._allowedTypes = storage.allowedTypes;
    this._maxCapacity = storage.maxCapacity;
    this._stackSize = (storage.stackSize !== 'none') ? parseInt(storage.stackSize) : 'none';
    this.clear();
};

win.Game_StorageSystem.prototype.data = function () {
    return $dataStorage[this._storageId];
};

win.Game_StorageSystem.prototype.title = function () {
    return this._title;
};

win.Game_StorageSystem.prototype.allowedTypes = function () {
    return this._allowedTypes;
};

win.Game_StorageSystem.prototype.maxCapacity = function () {
    return this._maxCapacity;
};

win.Game_StorageSystem.prototype.changeMaxCapacity = function (capacity) {
    this._maxCapacity = capacity;
};

win.Game_StorageSystem.prototype.capacity = function () {
    var sum = 0;
    if (this._stackSize === 'none') {
        sum = this.allItems().map(function (item) {
            return this.numItems(item);
        }, this).reduce(function (total, current) {
            return total + current;
        }, 0);
    } else {
        sum = this.allItems().length;
    }
    return sum;
};

win.Game_StorageSystem.prototype.items = function () {
    return Object.keys(this._items).map(function (id) {
        return win.$dataItems[id];
    });
};

win.Game_StorageSystem.prototype.weapons = function () {
    return Object.keys(this._weapons).map(function (id) {
        return win.$dataWeapons[id];
    });
};

win.Game_StorageSystem.prototype.armors = function () {
    return Object.keys(this._armors).map(function (id) {
        return win.$dataArmors[id];
    });
};

win.Game_StorageSystem.prototype.equipItems = function () {
    return this.weapons().concat(this.armors());
};

win.Game_StorageSystem.prototype.allItems = function () {
    return this.items().concat(this.equipItems());
};

win.Game_StorageSystem.prototype.isEmpty = function () {
    return this.allItems().length === 0;
};


win.Game_StorageSystem.prototype.addItem = function (item, amount) {
    var container = this.itemContainer(item);
    if (container) {
        var lastNumber = this.numItems(item);
        var newNumber = lastNumber + amount;
        if (amount > 0) {
            container[item.id] = newNumber.clamp(0, this.maxItems(item));
        } else {
            container[item.id] = newNumber.clamp(0, this.numItems(item));
        }
        if (container[item.id] === 0) {
            delete container[item.id];
        }
    }
};

win.Game_StorageSystem.prototype.removeItem = function (item, amount) {
    if (arguments < 2) {
        this.addItem(item, -this.numItems(item));
    } else {
        this.addItem(item, -amount);
    }
};

win.Game_StorageSystem.prototype.clear = function () {
    this._items = {};
    this._weapons = {};
    this._armors = {};
};

win.Game_StorageSystem.prototype.isTypeAllowed = function (type) {
    return type && this._allowedTypes.contains(type.toLowerCase());
};

win.Game_StorageSystem.prototype.numItems = function (item) {
    var container = this.itemContainer(item);
    return container ? container[item.id] || 0 : 0;
};

win.Game_StorageSystem.prototype.maxItems = function (item) {
    if (this._stackSize === 'none') {
        return this.maxCapacity() - this.capacity();
    } else if (this.numItems(item) > 0 || this.maxCapacity() - this.capacity() > 0) {
        return this._stackSize - this.numItems(item);
    } else if (this.maxCapacity() - this.capacity() < 0) {
        return 0;
    }
};

win.Game_StorageSystem.prototype.itemContainer = function (item) {
    if (!item) {
        return null;
    } else if (win.DataManager.isItem(item)) {
        return this._items;
    } else if (win.DataManager.isWeapon(item)) {
        return this._weapons;
    } else if (win.DataManager.isArmor(item)) {
        return this._armors;
    } else {
        return null;
    }
};

win.Game_StorageSystem.prototype.getItemCategory = function (item) {
    if (win.DataManager.isItem(item) && item.itypeId === 1) {
        return 'Items';
    } else if (win.DataManager.isItem(item) && item.itypeId === 2) {
        return 'KeyItems';
    } else if (win.DataManager.isWeapon(item)) {
        return 'Weapons';
    } else if (win.DataManager.isArmor(item)) {
        return 'Armors';
    } else {
        return false;
    }
};

//=============================================================================
// Window_Base
//=============================================================================
if (!win.Window_Base.prototype.textWidthEx) {
    win.Window_Base.prototype.textWidthEx = function (text) {
        return this.drawTextEx(text, 0, this.contents.height);
    };
}

//=============================================================================
// Window_StorageTitle
//=============================================================================
win.Window_StorageTitle.prototype = Object.create(win.Window_Base.prototype);
win.Window_StorageTitle.prototype.constructor = win.Window_StorageTitle;

win.Window_StorageTitle.prototype.initialize = function (x, y, w, h) {
    win.Window_Base.prototype.initialize.call(this, x, y, w, h);
    this._title = win.$gameStorageSystems.current().title();
    this.refresh();
};

win.Window_StorageTitle.prototype.refresh = function () {
    this.contents.clear();
    var text = this._title;
    var dw = this.contents.width + this.textPadding();
    var tw = this.textWidthEx(text);
    var dx = Math.floor(Math.max(0, dw - tw) / 2);
    this.drawTextEx(text, this.textPadding() + dx, 0);
};

//=============================================================================
// Window_StorageCommand
//=============================================================================
win.Window_StorageCommand.prototype = Object.create(win.Window_HorzCommand.prototype);
win.Window_StorageCommand.prototype.constructor = win.Window_StorageCommand;

win.Window_StorageCommand.prototype.initialize = function (x, y) {
    this.setup();
    win.Window_HorzCommand.prototype.initialize.call(this, x, y);
    this.select(0);
};

win.Window_StorageCommand.prototype.setup = function () {
    var data = win.$gameStorageSystems.current().data().command;
    this._align = data.align;
    this._rows = data.rows;
    this._cols = data.cols;
    this._width = eval(data.width);
    this._addText = data.addText;
    this._removeText = data.removeText;
};

win.Window_StorageCommand.prototype.itemAlign = function () {
    return this._align;
};

win.Window_StorageCommand.prototype.windowWidth = function () {
    return this._width;
};

win.Window_StorageCommand.prototype.numVisibleRows = function () {
    return this._rows;
};

win.Window_StorageCommand.prototype.maxCols = function () {
    return this._cols;
};

win.Window_StorageCommand.prototype.makeCommandList = function () {
    this.addCommand(this._addText, 'add');
    this.addCommand(this._removeText, 'remove');
};

win.Window_StorageCommand.prototype.lastOption = function () {
    return this._index;
};

//=============================================================================
// Window_StorageCategory
//=============================================================================
win.Window_StorageCategory.prototype = Object.create(win.Window_HorzCommand.prototype);
win.Window_StorageCategory.prototype.constructor = win.Window_StorageCategory;

win.Window_StorageCategory.prototype.initialize = function (x, y) {
    this.setup();
    win.Window_HorzCommand.prototype.initialize.call(this, x, y);
};

win.Window_StorageCategory.prototype.setup = function () {
    var data = $gameStorageSystems.current().data().category;
    this._align = data.align;
    this._rows = data.rows;
    this._cols = data.cols;
    this._width = eval(data.width);
};

win.Window_StorageCategory.prototype.itemAlign = function () {
    return this._align;
};

win.Window_StorageCategory.prototype.windowWidth = function () {
    return this._width;
};

win.Window_StorageCategory.prototype.numVisibleRows = function () {
    return this._rows;
};

win.Window_StorageCategory.prototype.maxCols = function () {
    return this._cols;
};

if (!win.Imported.YEP_X_ItemCategories) {

    win.Window_StorageCategory.prototype.makeCommandList = function () {
        var data = win.$gameStorageSystems.current().allowedTypes();
        var length = data.length;
        for (var i = 0; i < length; i++) {
            var category = data[i].trim();
            this.addItemCategory(category);
        }
    };

    win.Window_StorageCategory.prototype.addItemCategory = function (category) {
        if (category.match(/KeyItems/i)) {
            return this.addCommand(win.TextManager.keyItem, 'keyItem');
        } else if (category.match(/Items/i)) {
            return this.addCommand(win.TextManager.item, 'item');
        } else if (category.match(/Weapons/i)) {
            return this.addCommand(win.TextManager.weapon, 'weapon');
        } else if (category.match(/Armors/i)) {
            return this.addCommand(win.TextManager.armor, 'armor');
        }
    };

} else { // Imported.YEP_X_ItemCategories

    win.Window_StorageCategory.prototype.makeCommandList = function () {
        var data = win.$gameStorageSystems.current().allowedTypes();
        var length = data.length;
        for (var i = 0; i < length; i++) {
            var category = data[i].trim();
            win.Window_ItemCategory.prototype.addItemCategory.call(this, category);
        }
    };

} // Imported.YEP_X_ItemCategories

win.Window_StorageCategory.prototype.update = function () {
    win.Window_HorzCommand.prototype.update.call(this);
    if (this._itemWindow) {
        this._itemWindow.setCategory(this.currentSymbol());
        this._itemWindow.setExt(this.currentExt());
    }
};

win.Window_StorageCategory.prototype.setItemWindow = function (itemWindow) {
    this._itemWindow = itemWindow;
    this.update();
};

//=============================================================================
// Window_StorageItemList
//=============================================================================
win.Window_StorageItemList.prototype = Object.create(win.Window_ItemList.prototype);
win.Window_StorageItemList.prototype.constructor = win.Window_StorageItemList;

win.Window_StorageItemList.prototype.initialize = function (x, y, w, h) {
	this.setup();
    win.Window_ItemList.prototype.initialize.call(this, x, y, w, h);
    this._mode = 'none';
    this._storage = win.$gameStorageSystems.current();
};

win.Window_StorageItemList.prototype.setup = function () {
    var data = $gameStorageSystems.current().data().item;
    this._cols = data.cols;
};

win.Window_StorageItemList.prototype.maxCols = function() {
    return this._cols;
};

win.Window_StorageItemList.prototype.setExt = function (ext) {
    if (this._ext !== ext) {
        this._ext = ext;
        this.refresh();
        this.resetScroll();
    }
};

win.Window_StorageItemList.prototype.setMode = function (mode) {
    if (this._mode !== mode) {
        this._mode = mode;
        this.refresh();
        this.resetScroll();
    }
};

win.Window_StorageItemList.prototype.mode = function () {
    return this._mode;
};

if (!win.Imported.YEP_X_ItemCategories) {

    win.Window_StorageItemList.prototype.includes = function (item) {
		if (item && item.onlyInStorage.length > 0 && !item.onlyInStorage.contains(this._storage._storageId)) {
			return false;
		}
        switch (this._category) {
        case 'item':
            return win.DataManager.isItem(item) && item.itypeId === 1;
        case 'weapon':
            return win.DataManager.isWeapon(item);
        case 'armor':
            return win.DataManager.isArmor(item);
        case 'keyItem':
            return win.DataManager.isItem(item) && item.itypeId === 2;
        case 'AllItems':
            return this._storage.isTypeAllowed(this._storage.getItemCategory(item));
        default:
            return false;
        }
    };

} else { // Imported.YEP_X_ItemCategories

    win.Window_StorageItemList.prototype.includes = function(item) {
		if (item && item.onlyInStorage.length > 0 && !item.onlyInStorage.contains(this._storage.id())) {
			return false;
		}
		return win.Window_ItemList.prototype.includes.call(this, item);
	};

} // Imported.YEP_X_ItemCategories

win.Window_StorageItemList.prototype.makeItemList = function () {
    if (this._mode === 'add') {
        this._data = win.$gameParty.allItems().filter(function (item) {
            return this.includes(item);
        }, this);
    } else if (this._mode === 'remove') {
        this._data = this._storage.allItems().filter(function (item) {
            return this.includes(item);
        }, this);
    }
    if (this.includes(null)) {
        this._data.push(null);
    }
};

win.Window_StorageItemList.prototype.drawItemNumber = function (item, x, y, width) {
    this.drawText('x', x, y, width - this.textWidth('00'), 'right');
    var itemNum = (this._mode === 'add') ? win.$gameParty.numItems(item) : this._storage.numItems(item);
    this.drawText(itemNum, x, y, width, 'right');
};

win.Window_StorageItemList.prototype.isEnabled = function (item) {
	if (item && item.cannotStore) {
		return false;
	} else {
		return (this._mode === 'add') ? this._storage.maxItems(item) > 0 : win.$gameParty.maxItems(item) - win.$gameParty.numItems(item) > 0;
	}
};

//=============================================================================
// Window_StorageInfo
//=============================================================================
win.Window_StorageInfo.prototype = Object.create(win.Window_Base.prototype);
win.Window_StorageInfo.prototype.constructor = win.Window_StorageInfo;

win.Window_StorageInfo.prototype.initialize = function (x, y, w, h) {
    win.Window_Base.prototype.initialize.call(this, x, y, w, h);
    this._storage = win.$gameStorageSystems.current();
    this._text = this._storage.data().infoText;
    this.refresh();
};

win.Window_StorageInfo.prototype.text = function () {
    return this._text.replace("%1", this._storage.capacity() + "/" + this._storage.maxCapacity());
};

win.Window_StorageInfo.prototype.refresh = function () {
    this.contents.clear();
    this.drawTextEx(this.text(), this.textPadding(), 0);
};

//=============================================================================
// Window_StorageNumber
//=============================================================================
win.Window_StorageNumber.prototype = Object.create(win.Window_ShopNumber.prototype);
win.Window_StorageNumber.prototype.constructor = win.Window_StorageNumber;

win.Window_StorageNumber.prototype.initialize = function (x, y, w, h) {
    win.Window_Selectable.prototype.initialize.call(this, x, y, w, h);
    this._storage = win.$gameStorageSystems.current();
    this._item = null;
    this._max = 1;
    this._number = 1;
    this.createButtons();
};

win.Window_StorageNumber.prototype.setup = function (item, mode) {
    this._item = item;
    var numItems;
    if (mode === 'add') {
        numItems = win.$gameParty.numItems(item);
        this._max = numItems.clamp(numItems, this._storage.maxItems(item));
    } else {
        numItems = this._storage.numItems(item);
        this._max = numItems.clamp(numItems, win.$gameParty.maxItems(item));
    }
    this._number = 1;
    this.placeButtons();
    this.updateButtonsVisiblity();
    this.refresh();
};

win.Window_StorageNumber.prototype.refresh = function () {
    this.contents.clear();
    this.drawItemName(this._item, 0, this.itemY());
    this.drawNumber();
    this.drawMax();
};

win.Window_StorageNumber.prototype.drawNumber = function () {
    var x = this.cursorX();
    var y = this.itemY();
    var width = this.cursorWidth() - this.textPadding();
    this.resetTextColor();
    this.drawText(this._number, x, y, width, 'right');
};

win.Window_StorageNumber.prototype.drawMax = function () {
    var width = this.contentsWidth() - this.textPadding();
    this.resetTextColor();
    this.drawText(this._max, 0, this.priceY(), width, 'right');
};

//=============================================================================
// Scene_Storage
//=============================================================================
win.Scene_Storage.prototype = Object.create(win.Scene_MenuBase.prototype);
win.Scene_Storage.prototype.constructor = win.Scene_Storage;

win.Scene_Storage.prototype.initialize = function () {
    this.setup();
    win.Scene_MenuBase.prototype.initialize.call(this);
    this._storage = win.$gameStorageSystems.current();
};

win.Scene_Storage.prototype.setup = function () {
    var data = win.$gameStorageSystems.current().data();
    this._background = data.background;
    this._displayCategories = data.displayCategories;
    this._helpData = data.help;
    this._titleData = data.title;
    this._commandData = data.command;
    this._categoryData = data.category;
    this._infoData = data.info;
    this._itemData = data.item;
    this._numberData = data.number;
};

win.Scene_Storage.prototype.createBackground = function () {
    if (this._background !== '') {
        this._backgroundSprite = new win.Sprite();
        this._backgroundSprite.bitmap = win.ImageManager.loadPicture(this._background);
        this.addChild(this._backgroundSprite);
    }
};

win.Scene_Storage.prototype.create = function () {
    win.Scene_MenuBase.prototype.create.call(this);
    this.createHelpWindow();
    this.createTitleWindow();
    this.createCommandWindow();
    if (this._displayCategories) {
        this.createCategoryWindow();
    }
    this.createInfoWindow();
    this.createItemWindow();
    this.createNumberWindow();
};

win.Scene_Storage.prototype.createHelpWindow = function () {
    this._helpWindow = new win.Window_Help();
    this.addWindow(this._helpWindow);
    this._helpWindow.x = eval(this._helpData.x);
    this._helpWindow.y = eval(this._helpData.y);
    this._helpWindow.width = eval(this._helpData.width);
    this._helpWindow.height = eval(this._helpData.height);
};

win.Scene_Storage.prototype.createTitleWindow = function () {
    var wx = eval(this._titleData.x);
    var wy = eval(this._titleData.y);
    var ww = eval(this._titleData.width);
    var wh = eval(this._titleData.height);
    this._titleWindow = new win.Window_StorageTitle(wx, wy, ww, wh);
    this.addWindow(this._titleWindow);
};

win.Scene_Storage.prototype.createCommandWindow = function () {
    var wx = eval(this._commandData.x);
    var wy = eval(this._commandData.y);
    this._commandWindow = new win.Window_StorageCommand(wx, wy);
    if (this._displayCategories) {
        this._commandWindow.setHandler('add', this.onCommandOk.bind(this));
        this._commandWindow.setHandler('remove', this.onCommandOk.bind(this));
    } else {
        this._commandWindow.setHandler('add', this.onCategoryOk.bind(this));
        this._commandWindow.setHandler('remove', this.onCategoryOk.bind(this));
    }
    this._commandWindow.setHandler('cancel', this.onCommandCancel.bind(this));
    this.addWindow(this._commandWindow);
};

win.Scene_Storage.prototype.createCategoryWindow = function () {
    var wx = eval(this._categoryData.x);
    var wy = eval(this._categoryData.y);
    this._categoryWindow = new win.Window_StorageCategory(wx, wy);
    this._categoryWindow.setHandler('ok', this.onCategoryOk.bind(this));
    this._categoryWindow.setHandler('cancel', this.onCategoryCancel.bind(this));
    this._categoryWindow.deactivate();
    this._categoryWindow.hide();
    this.addWindow(this._categoryWindow);
};

win.Scene_Storage.prototype.createInfoWindow = function () {
    var wx = eval(this._infoData.x);
    var wy = eval(this._infoData.y);
    var ww = eval(this._infoData.width);
    this._infoWindow = new win.Window_StorageInfo(wx, wy, ww, 80);
    this.addWindow(this._infoWindow);
};

win.Scene_Storage.prototype.createItemWindow = function () {
    var wx = eval(this._itemData.x);
    var wy = eval(this._itemData.y);
    var ww = eval(this._itemData.width);
    var wh = eval(this._itemData.height);
    this._itemWindow = new win.Window_StorageItemList(wx, wy, ww, wh);
    this._itemWindow.setHelpWindow(this._helpWindow);
    if (this._displayCategories) {
        this._categoryWindow.setItemWindow(this._itemWindow);
    }
    this._itemWindow.setHandler('ok', this.onItemOk.bind(this));
    this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
    this.addWindow(this._itemWindow);
};

win.Scene_Storage.prototype.createNumberWindow = function () {
    var wx = eval(this._numberData.x);
    var wy = eval(this._numberData.y);
    var ww = eval(this._numberData.width);
    var wh = eval(this._numberData.height);
    this._numberWindow = new win.Window_StorageNumber(wx, wy, ww, wh);
    this._numberWindow.setHandler('ok', this.onNumberOk.bind(this));
    this._numberWindow.setHandler('cancel', this.onNumberCancel.bind(this));
    this._numberWindow.hide();
    this.addWindow(this._numberWindow);
};

win.Scene_Storage.prototype.activateItemWindow = function () {
    this._infoWindow.refresh();
    this._itemWindow.refresh();
    this._itemWindow.activate();
};

win.Scene_Storage.prototype.item = function () {
    return this._itemWindow.item();
};

win.Scene_Storage.prototype.onCommandCancel = function () {
    win.SceneManager.pop();
};

win.Scene_Storage.prototype.onCommandOk = function () {
    this._itemWindow.setMode(this._commandWindow.currentSymbol());
    this._commandWindow.deactivate();
    this._commandWindow.hide();
    this._categoryWindow.activate();
    this._categoryWindow.select(0);
    this._categoryWindow.show();
};

win.Scene_Storage.prototype.onCategoryOk = function () {
    this._itemWindow.activate();
    this._itemWindow.selectLast();
    if (!this._displayCategories) {
        this._itemWindow.setMode(this._commandWindow.currentSymbol());
        this._itemWindow.setCategory('AllItems');
        this._itemWindow.refresh();
    }
};

win.Scene_Storage.prototype.onCategoryCancel = function () {
    this._categoryWindow.deselect();
    this._categoryWindow.deactivate();
    this._categoryWindow.hide();
    this._commandWindow.show();
    this._commandWindow.activate();
};

win.Scene_Storage.prototype.onItemOk = function () {
    this._item = this._itemWindow.item();
    this._itemWindow.deactivate();
    this._numberWindow.setup(this._item, this._itemWindow.mode());
    this._numberWindow.show();
    this._numberWindow.activate();
};

win.Scene_Storage.prototype.storeItem = function (amount) {
    this._storage.addItem(this.item(), amount);
    win.$gameParty.loseItem(this.item(), amount);
};

win.Scene_Storage.prototype.depositItem = function (amount) {
    this._storage.removeItem(this.item(), amount);
    win.$gameParty.gainItem(this.item(), amount);
};

win.Scene_Storage.prototype.onItemCancel = function () {
    this._itemWindow.deselect();
	this._helpWindow.clear();
    if (this._displayCategories) {
        this._categoryWindow.activate();
    } else {
        this._itemWindow.setCategory('none');
        this._commandWindow.activate();
    }
};

win.Scene_Storage.prototype.onNumberOk = function () {
    win.SoundManager.playShop();
    var mode = this._itemWindow.mode();
    if (mode === 'add') {
        this.storeItem(this._numberWindow.number());
    } else if (mode === 'remove') {
        this.depositItem(this._numberWindow.number());
    }
    this.endNumberInput();
};

win.Scene_Storage.prototype.endNumberInput = function () {
    this._numberWindow.hide();
    this._itemWindow.refresh();
    this._infoWindow.refresh();
    this._itemWindow.activate();
};

win.Scene_Storage.prototype.onNumberCancel = function () {
    win.SoundManager.playCancel();
    this.endNumberInput();
};
})(window);
//-----------------------------------------------------------------------------
function Window_StorageTitle() {
	this.initialize.apply(this, arguments);
}

function Window_StorageCommand() {
    this.initialize.apply(this, arguments);
}

function Window_StorageCategory() {
    this.initialize.apply(this, arguments);
}

function Window_StorageItemList() {
    this.initialize.apply(this, arguments);
}

function Window_StorageInfo() {
	this.initialize.apply(this, arguments);
}

function Window_StorageNumber() {
    this.initialize.apply(this, arguments);
}

function Scene_Storage() {
	this.initialize.apply(this, arguments);
}

function Game_StorageSystems() {
    this.initialize.apply(this, arguments);
}

function Game_StorageSystem() {
    this.initialize.apply(this, arguments);
}
//-----------------------------------------------------------------------------

/*~struct~storage:
@param background
@text Menu Background
@type file
@dir img/pictures
@default

@param titleText
@text Storage Title
@type text
@default \i[210]STORAGE SYSTEM

@param infoText
@text Info Window Text
@type text
@default Capacity: %1\i[208]

@param maxCapacity
@text Max Capacity
@type number
@min 1
@max 9999
@default 20

@param stackSize
@text Item Stack Size
@type combo
@option none
@option 8
@option 16
@option 32
@option 64
@default none

@param displayCategories
@text Display Categories
@type boolean
@default true

@param allowedTypes
@text Allowed Item Types
@type text[]
@default ["items","armors","weapons","keyItems"]

@param Scene Settings
@default Customize window parameters.

@param help
@text Help Window Settings
@type struct<help>
@default {"x":"0","y":"Graphics.boxHeight - this._helpWindow.height - 80","width":"Graphics.boxWidth","height":"108"}
@parent Scene Settings

@param title
@text Title Window Settings
@type struct<title>
@default {"x":"0","y":"0","width":"Graphics.boxWidth","height":"72"}
@parent Scene Settings

@param command
@text Command Window Settings
@type struct<command>
@default {"align":"center","x":"0","y":"72","width":"Graphics.boxWidth","rows":"1","cols":"2","addText":"Add","removeText":"Remove"}
@parent Scene Settings

@param category
@text Category Window Settings
@type struct<category>
@default {"align":"center","x":"0","y":"72","width":"Graphics.boxWidth","rows":"1","cols":"4"}
@parent Scene Settings

@param item
@text Item Window Settings
@type struct<item>
@default {"x":"0","y":"144","width":"Graphics.boxWidth","height":"Graphics.boxHeight - 224 - this._helpWindow.height","cols":"2"}
@parent Scene Settings

@param info
@text Info Window Settings
@type struct<info>
@default {"x":"0","y":"Graphics.boxHeight - 80","width":"Graphics.boxWidth"}
@parent Scene Settings

@param number
@text Number Window Settings
@type struct<number>
@default {"x":"Graphics.boxWidth / 2 - 250","y":"168","width":"500","height":"450"}
@parent Scene Settings
*/

/*~struct~help:
@param x
@text Help Window X
@type text
@default 0

@param y
@text Help Window Y
@type text
@default Graphics.boxHeight - this._helpWindow.height - 80

@param width
@text Help Window Width
@type text
@default Graphics.boxWidth

@param height
@text Help Window Height
@type text
@default 108
*/


/*~struct~title:
@param x
@text Title Window X
@type text
@default 0

@param y
@text Title Window Y
@type text
@default 0

@param width
@text Title Window Width
@type text
@default Graphics.boxWidth

@param height
@text Title Window Height
@type text
@default 72
*/


/*~struct~command:
@param align
@text Command Window Align
@type select
@option left
@option center
@option right
@default center

@param x
@text Command Window X
@type text
@default 0

@param y
@text Command Window Y
@type text
@default 72

@param width
@text Command Window Width
@type text
@default Graphics.boxWidth

@param rows
@text Command Window Rows
@type number
@min 1
@default 1

@param cols
@text Command Window Cols
@type number
@min 1
@default 2

@param addText
@text Add Text
@type text
@default Add

@param removeText
@text Remove Text
@type text
@default Remove
*/


/*~struct~category:
@param align
@text Category Window Align
@type select
@option left
@option center
@option right
@default center

@param x
@text Category Window X
@type text
@default 0

@param y
@text Category Window Y
@type text
@default 72

@param width
@text Category Window Width
@type text
@default Graphics.boxWidth

@param rows
@text Category Window Rows
@type number
@min 1
@default 1

@param cols
@text Category Window Cols
@type number
@min 1
@default 4
*/


/*~struct~item:
@param x
@text Item Window X
@type text
@default 0

@param y
@text Item Window Y
@type text
@default 144

@param width
@text Item Window Width
@type text
@default Graphics.boxWidth

@param height
@text Item Window Height
@type text
@default Graphics.boxHeight - 224

@param cols
@text Item Window Cols
@type number
@min 1
@default 2
*/


/*~struct~info:
@param x
@text Info Window X
@type text
@default 0

@param y
@text Info Window Y
@type text
@default Graphics.boxHeight - 80

@param width
@text Info Window Width
@type text
@default Graphics.boxWidth
*/

/*~struct~number:
@param x
@text Number Window X
@type text
@default

@param y
@text Number Window Y
@type text
@default

@param width
@text Number Window Width
@type text
@default

@param height
@text Number Window Height
@type text
@default
*/
//-----------------------------------------------------------------------------
