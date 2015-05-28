;Used to easily restart your script, to pick up any new changes
!^r::Reload

;Correct common spelling mistakes
::jsut::just

;Easily call up information
::actnum::2389605
::dna::deoxyribonucleic acid
:*:eml::scott.tolksdorf@gmail.com

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

; Alt + f
!f::
	MsgBox, You pressed Alt + F
return

;You can send any keypress
^!g::
	Send, Sample [-g]{left 3}
return

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

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

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;;Brings Sublime Text to focus
^h::
	WinActivate, ahk_class PX_WINDOW_CLASS
return

;;Loops through all Chrome Windows in order
!j::
	WinGetClass, activeAppClass, A
	if(activeAppClass = "Chrome_WidgetWin_1")
		WinActivateBottom, ahk_class Chrome_WidgetWin_1
	else
		WinActivate, ahk_class Chrome_WidgetWin_1
	return
return

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


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