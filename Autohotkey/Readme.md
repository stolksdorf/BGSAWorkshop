# Autohotkey

Autohotkey is a scripting tool used to control keyboard presses and mouse movements on your computer. The language is very simple, easy to install, and has a very wide range of applications.

If you're on a Mac Autohotkey won't work since it's **Windows Only**. There's a Mac equivilent called [AppleScript](http://computers.tutsplus.com/tutorials/the-ultimate-beginners-guide-to-applescript--mac-3436). Check it out!

[List of Commands](https://www.autohotkey.com/docs/commands.htm)

### Hotstrings
Hotstrings are simple text replacement commands. They can be used to correct spelling or save you a ton of keystrokes.

```
	;Correct common spelling mistakes
	::jsut::just

	;Easily call up information
	::actnum::2389605
	::dna::deoxyribonucleic acid
	:*:eml::scott.tolksdorf@gmail.com
```

### Hotkeys
Hotkeys trigger actions when a key combination is pressed.

```
	; ! -> Alt   + -> Shift
	; ^ -> Ctrl  # -> Windows key

	; Alt + f
	!f::
		MsgBox, You pressed Alt + F ;Very useful for debugging
	return

	;You can send any keypress
	^!g::
		Send, Sample [-g]{left 3}
	return
```


### Mouse Control
You can control the position of the mouse as well as send clicks.

```
	!y::
		Click 100, 200  ; Click left mouse button at specified coordinates.
	return

	; The following Clicks in a location, waits for 1.5 seconds, holds down the
	; left click, and slowly drags to a new location and releases
	!u::
		Click 100, 200
		Sleep, 1500
		Click down
		MouseMove, 200, 300, 50, R
		Click up
	return
```


### Window Spy
Right click on the little green 'H' in the tasktray and select 'Window Sky'. This window will tell you a ton of information about the application you have selected, your mouse positions, and a bunch of other things.


### Application Control
Autohotkey lets you bring any window to focus, maximize/minimize, close and open programs. When selecting applications it's useful to use the `ahk_class`. It's a unique name given to every program viewable in the Window Spy.

```
	;;Brings Sublime Text to focus
	^5::
		WinActivate, ahk_class PX_WINDOW_CLASS
	return

	;;Loops through all Chrome Windows in order
	!k::
		WinGetClass, activeAppClass, A
		if(activeAppClass = "Chrome_WidgetWin_1")
			WinActivateBottom, ahk_class Chrome_WidgetWin_1
		else
			WinActivate, ahk_class Chrome_WidgetWin_1
		return
	return
```

### Advanced Example

#### Youtube search any text

```
	+^y::
		Send ^c       ;Copy whatever text you have selected
		ClipWait,1    ;Wait for it to get into the clipboard
		searchTerm = %clipboard%   ; Save it as a variable
		WinActivate, ahk_class Chrome_WidgetWin_1   ;Activate Chrome
		Send, {F6}    ;Select the address bar

		;Type of the youtube web address, with the search term as the query
		Send, https://www.youtube.com/results?search_query=%searchTerm%

		; Search!
		Send, {enter}
	return
```

The `Run` Command is also very useful, let's simplify the previous example

```
	+^y::
		Send ^c
		ClipWait,1
		searchTerm = %clipboard%
		Run, https://www.youtube.com/results?search_query=%searchTerm%
	return
```


