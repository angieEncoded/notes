# Misc Windows Notes

## Get user Variables for export
SET >> Environment.txt	// Get entire environment
regedit -> HKEY_LOCAL_USER\Environment		// Get all the user's variables

## Restart the windows shell

Hold shift + Crtl and right click on the taskbar
click on exit explorer
Then open task manager with ctl+alt+del and run a new task 'explorer'

## Windows Photos "Unexpected Printing" Error
Copy the 3.38 MB file from the x64 folder in windows\winsks - printconfig.dll
Copy into c:\indows\system32\spool\drivers\x64\3
net stop spooler
net start spooler

## Word shows "Work file" error
To resolve this issue, create a new folder on your computer.

Start Windows Explorer

Locate the folder location C:\Users\userprofile\AppData\Local\Microsoft\Windows

Create the folder labeled INetCacheContent.Word.

 Note

It may be necessary to turn on Hidden Items in the View Ribbon of Windows Explorer.


The problem is with the previewer for the 32 bit version of word using  the 64 bit version. Find these reg keys and save them somewhere. Then delete them. 

[Word Preview]
HKEY_CLASSES_ROOT\CLSID\{84F66100-FF7C-4fb4-B0C0-02CD7FB668FE}

[PowerPoint Preview]
HKEY_CLASSES_ROOT\CLSID\{65235197-874B-4A07-BDC5-E65EA825B718}

[Excel Preview]
HKEY_CLASSES_ROOT\CLSID\{00020827-0000-0000-C000-000000000046}

Delete all of the above registry keys. Make sure you export each registry key to a separate .reg file before deleting the keys.
Exit the Registry Editor.
Logoff and login back to your account.
Windows will now use the preview handlers registered under the HKEY_CLASSES_ROOT\Wow6432Node\CLSID\ branch. This should fix the preview issues in Office 32-bit version running on Windows 64-bit




## Windows updates registry key to stop updates - this was set up on a number of computers at a client site

 Use the Windows key + R keyboard shortcut to open the Run command.

2. Type regedit, and click OK to open the Registry.
Browse the following path:

HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows

3. Right-click the Windows (folder) key, select "New" and then click "Key".

4. Name the new key "WindowsUpdate" and press "Enter".

5. Right-click the newly created key, select "new", and click "Key".

disable windows 10 update in registry

6. Name the new key AU and press Enter.
Inside the newly created key, right-click on the right side, select "New", and click on "DWORD (32-bit) Value".

7. Name the new key AUOptions and press Enter.
Double-click the newly created key and change its value to 2. It's for "Notify for download and notify for install". Click "OK".

8. Close the Registry to complete the task.

*******************
Windows 10 into safe mode from cold boot
*******************
However, manually shutting down (forcibly) three times in a row does work. 

Power on, wait for blue Windows logo, hold power button in until shutdown occurs. 
Repeat, Repeat.  

The third boot will show "Preparing Automatic Repair" then "Diagnosing Your PC" and then you will get a screen with an "Advanced Options".  Click on "Advanced Options" then "Troubleshooting" then "Startup Options".  The PC will restart and then you will get a menu of boot options.  #4 or #5 will get you into Safe Mode.
