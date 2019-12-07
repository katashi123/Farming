//=================================
// Draconis_InventoryLimitations.js
//=================================

var Imported = Imported || {};
Imported.Draconis_InventoryLimitations = true;

var Draconis = Draconis || {};
Draconis.InventoryLimitations = Draconis.InventoryLimitations || {};
Draconis.InventoryLimitations.version = 1.00;

//=================================
/*:
 *@plugindesc v1.0 Adds a limit to the party's item pack/bag.
  *@author: DraconisKnight
  
 @param ===Items===
 * @desc
 *
 
 * @param Inventory Max
 * @parent ===Items===
 * @type variable
 * @desc This is the maximum number of items a player can hold.
 * Default: $gameVariables.value(01);
 * @default $gameVariables.value(01);
 
 * @param Exempt Items
 * @parent ===Items===
 * @type text
 * @desc Leave this parameter blank.  
 * @default 
 
 * @param Item Limit Window
 * @parent ===Items===
 * @type text
 * @desc Would you like to have the window to be visible?
 * @default true
 
 * @param Item Limit Window Text
 * @parent ===Items===
 * @type text
 * @desc The text in the window.
 * @default Limit:
  
  @help
  
*=====Introduction=============================================
 This plugin manipulates your party's inventory through the use
 of variables.
 
*==============================================================
 
*=====About this plugin:=======================================

I found the plugin, MrTS_LimitedInventory by Mr. Trivel.  While 
it achieved what I was after, it wasn't meeting how I wanted to 
program my project.  Not exactly.  So I opted toprogram my own, 
making use of MV 1.5+ Plugin Manager. (In addition to that it 
seems LimitedInventory isn't going to getting an update.)
	
This plugin applies a limit to a party's item inventory with the
use of game variables.
	
*==============================================================
 
*=====Instructions- Parameters=================================

To decide on how the inventory is limited, you follow the 
parameters on the left.  The parameters are a simple plug and 
play.

I. Inventory Max 

This is programmed to have the data entered in as either a 
$gameVariable or a value.  The plugin will process either one if 
the developer wishes to have a static limit on the inventory cap.
Just note, that with the static, there isn't a way to increase it.
With the variables and a little eventing, you can use an item/key 
item to influence the inventory cap.

II.  Exempt Items

This parameter doesn't require any input.  It is there for future
reference in the code to match up the exempt note tag.
	
III. Item Limit Window and Item Limit Window Text

Both of this parameters are if you want the window shown and 
what it will say.

III. Items, Weapons, and Armor

For the plugin to recongize a space is used, you MUST include the
Exempt note tag below. Doesn't count the item towards the count.  
Mainly used on Key Items, in which a number can be used.  You can 
also do a little bit of math with the note tag if you are wanting 
a stack to be one "item slot".

NOTE TAG - Exempt:

Two Different Modes:
1. <Exempt: [Amount]> = Enter the number.

This method is good for key items or items that the party can only
carry one off.

<Exempt: 0> = The item/whole stack will count towards the inventory
cap.

<Exempt: 1> = Exempts one item in the stack.  Use on items that 
you don't want to count against the inventory cap. 

2. <Exempt: $gameVariables.value(i) - 1> 

Enter assigned variable that is tied to your game data for the item 
in question.  The variable you use should be set up to be the number
of that item the party has. The minus 1 tells the plugin to only count 
1, not the rest.

**Note if you try using numbers above 1: This will result in the plugin
returning a negative.  To avoid this, use the second mode above on items, 
weapons, or armor that you are allowing more than two to be carried.  I've
including instructions below on how to set up the variable in the event
page.**

Using either mode of the note tag can influence armor and weapons.
(Set up is the same with items.)

*======Using $gameVariables=================================
For those wishing to use variables to control everything, it
requires a little bit of set up.

On your first map, set up a parallel event without a picture.
In this event, you will be assigning variables for your 
inventory cap (if you are using a variable for this) and the 
possession count for the items available in your game.

In your database (and using the second note tag), replace (i)
with the variable index corresponding to that item.

Example:
Event Page
Control Variables: #001 Potions Exempt = The number of Potions

Database > Items Tab > Potion
<Exempt: $gameVariables.value(1)-1>

=======If using Yanfly's Item Core==========================
Keep independent items off.  I haven't figured out how to 
to work in independents, and quite frankly is currently a
little more than I can chew at the moment.  Other than that,
this plugin doesn't cause with any conflicts with Item Core
v1.28.

============================================================

============Terms and Conditions============================
Free to use in non-commerical and commerical with credit.

============================================================

===========Version Log======================================
Version 1.0b- 3 March 2018.  Figured out the small bug to get
the plugin to read the start of a new stack with the variable
method.  Editted instructions to reflect this.

Version 1.0a- 1 March 2018.  Built on instructions for release. 

Version 1.0- Finished on 10 Nov 2017.

*/
	

(function(){

	var Draconis_Parameters = PluginManager.parameters('Draconis_InventoryLimitations');
	Draconis.Param = Draconis.Param || {};

//==========Plugin Manager Parameters===========================
	Draconis.Param.InventoryMax = String(Draconis_Parameters['Inventory Max']);
	Draconis.Param.ExemptItems = String(Draconis_Parameters['Exempt Items']);
	Draconis.Param.ItemLimitWin = (Draconis_Parameters['Item Limit Window']|| "true").toLowerCase() === "true";
	Draconis.Param.ItemLimitWinText = String(Draconis_Parameters['Item Limit Text'] || "Limit:");

//==========Game Party: Inventory Limit==========================

	var DracInventLimit_GParty = Game_Party.prototype.initialize;

	Game_Party.prototype.initialize = function (){
		DracInventLimit_GParty.call(this);
	};
	
	Game_Party.prototype.getInventTotalSpace = function (){
		return eval(Draconis.Param.InventoryMax);
	};

	Game_Party.prototype.getInventUsedSpace = function() {
		var occupiedSpace = 0;
			for (var i = 0; i < this.allItems().length; i++) {
				var exempt = eval (this.allItems()[i].meta.Exempt ? String(this.allItems()[i].meta.Exempt) : Draconis.Param.ExemptItems);
				occupiedSpace += this.numItems(this.allItems()[i]) - exempt;
			}
		return occupiedSpace;
	};
		
	Game_Party.prototype.getInventEmptySpace = function() {
		return this.getInventTotalSpace() - this.getInventUsedSpace();
	};
		
//==========Window: Item Limit=====================================

	function Window_ItemLimit() {
		this.initialize.apply(this, arguments);	
	};
	
	Window_ItemLimit.prototype = Object.create(Window_Base.prototype);
	Window_ItemLimit.prototype.constructor = Window_ItemLimit;
	
	Window_ItemLimit.prototype.initialize = function(x, y, w, h) {
		Window_Base.prototype.initialize.call(this, x, y, w, h);
		this.refresh();
	};
	
	Window_ItemLimit.prototype.refresh = function() {
		this.contents.clear();
		var u = $gameParty.getInventUsedSpace();
		var t = $gameParty.getInventTotalSpace();
		this.drawText(Draconis.Param.ItemLimitWinText + " " + u + "/" + t, 0, 0);
	};

//==========Scene Item=====================================

	var DraconisInventLimit_ItemMenu = Scene_Item.prototype.create;
	var DraconisInventLimit_ItemUsage = Scene_Item.prototype.useItem;

	Scene_Item.prototype.create = function() {
		DraconisInventLimit_ItemMenu.call(this);
			if (Draconis.Param.ItemLimitWin)
				this.createLimitWindow();
	};

	Scene_Item.prototype.createLimitWindow = function() {
		var wx = this._itemWindow.x;
		var ww = this._itemWindow.width;
		var wh = this._itemWindow.fittingHeight(1);
		this._itemWindow.height = this._itemWindow.height - wh;
		this._itemWindow.refresh();
		var wy = this._itemWindow.y + this._itemWindow.height;
		this._itemLimitWindow = new Window_ItemLimit(wx, wy, ww, wh);
		this.addWindow(this._itemLimitWindow);
	};

	Scene_Item.prototype.useItem = function() {
		DraconisInventLimit_ItemUsage.call(this);
		if (this._itemLimitWindow) this._itemLimitWindow.refresh();
	};
})();