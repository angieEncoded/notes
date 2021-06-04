# Getting controller support working on Oblivion

- Note - I am not using any other mods. Just controller support
    - Install Mod Organizer 2
        - https://www.nexusmods.com/skyrimspecialedition/mods/6194
        - Run through the tutorial set up
    - Install OBSE from this link:
        - http://obse.silverlock.org/
    - Following these instructions (you only need a couple DLL files if using MO2)
        - https://github.com/ModOrganizer2/modorganizer/wiki/Running-Oblivion-OBSE-with-MO2
        - Copy these files\folders into the game folder
            ``` obse_1_2_416.dll ```
            ``` Data ```
        - These are only neded if running the Construction set with -editor parameter
            ``` obse_editor_1_2.dll ```
            ``` obse_loader.exe ```
    - Configure MO2 to use these files (take from official instructions)
        - In MO2, open the executable drop-down and select <Edit...>
        - Select Oblivion.exe, Check the Force Load Libraries and click on the Configure Libraries button
        - Check the checkbox on the line that says Oblivion.exe and obse_1_2_416.dll.
        - Now MO2 will load the OBSE dll each time you start Oblivion.exe. You should NOT run OBSE obse_loader.exe to start the game.
- Install necessary mods from nexus Mods using the manager
    - SkyBSA
        - This one is needed to make Oblivion work like Skyrim in terms of how it loads files. 
            - The game will load files by timestamps, and when you install this game using GOG, all the timestamps are current. 
            - If you don't install SkyBSA, You'll get the controller support from NorthernUI with the older menus. 
            - It's also possible to change the timestamps on the files individually to newer than the game install's. I couldn't find a way to do it with MO2 and Windows doesn't have a touch command so... I just used SkyBSA. 
        - https://www.nexusmods.com/oblivion/mods/49568
        - Install this using MO2
    - NorthernUI
        - This is what patches in the controller support with a breathtaking hand-crafted clone of Skyrim's menu system
        - https://www.nexusmods.com/oblivion/mods/48577
- The game must be run from Mod Organizer 2 now in order to load all of the mods

## Personal thoughts

- This has made the game playable on PC. Bethesda never bothered to patch in controller support which is a shame, but the brilliand David J. Cobb worked on this himself for almost a year to bring us this amazing mod. Please consider donating and supporting the author of this mod. I certainly will. 
