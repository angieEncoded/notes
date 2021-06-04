//Linux Direcotyr Tree
- Starts with root : /
- No volume letters
- User can only access their own folder

//Understanding files and folders
- Folders end with a slash: /folder/path/
- Everything else is a file
- Absolute paths starte with /
- all others are relative
- /home/akrukovsky/Desktop/
- folder/file

// Paths are case-sensitive
- filename is different than FileName

// Extension is part of a name
- filename.cpp is different than filename.png

// Linux terminal
- Ctrl + Alt + T to open a terminal on Ubuntu
- Most tasks are faster from the terminal than the GUI

// NAvigating the tree from the terminal
- It is always in some folder
- pwd - print working directory
- cd <dir> - change to whatever directory 
- ls <dir> - list contents of that directory
- 
// Special folders
- / Root folder
- ~ Home folder
- . Current folder
- .. Parent folder

// Structure of Linux commands
- Typical Structure
   → ${PATH}/command [options] [parameters]
   → ${PATH}/command - absolute or relative path
   → [options] - program-specific options
   → [parameters] - program-specific parameters (input files, etc)

// GEtting help
- <command> --help
   → ls --help // This will give help on the command
   → ls -h
- man <command>
   → man ls //Exhaustive manual on program usage

// Command completion
- Pressing tab will bring up some autocomplete options
- Beeps if there is nothing to match
- Shows all potential matches

// Creating and manipulating files and folders
- mkdir [-p] <foldername>
   → make a directory
   → with all parent folders is -p flag
      ⇒ This is used when you are creating multiple directories at once
- rm [-r] <name>
   → removes all files
   → -r does it recursively
- cp [-r] <source> <dest>
   → Copy file or folder from <source> to <dest>
- mv <source> <dest>
   → move file or folder from <source> to <dest>

// USing placeholders
- * Any set of characters
- ? Any single character
- [a-f] Characters in a b c d e f
- [^a-c] any character NOT in a b c

// Standard input\output channels
- Single channel input - stdin
- Two output channels
   → stdout: Standard Output: channel 1
   → stderr: STandard error output: channel 2
- Redirecting stdout
   → command 1> out.txt
   → command >> out.txt
- Redirecting stderr
   → command 2> out.txt
- Redirect stdout and stderr into a file
   → program > out.txt 2>&1
- Write stdour and stderr into different files
   → program 1>stdout.txt 2>stderr.txt

// working with files
- more/less/cat
   → Prints the contents of the file
   → Most of the time using cat is enough
- find <in-folder> -name <filename>
   → Search for file <filename> in folder <in-folder>, allows wildcards
- grep <what> <where>
   → Search for a string <what> in <where>

// Chaining commands
- command1; command2; command3
   → Calls the commands one after the other
- command1 && command2 && command3
   → Same as above, but fails if any of the command return a non-zero code
- commmand1 | command2 | command3
   → Pipe stdout of command1 to stdin of command2 and stdout of command2 into stdin of command3
- Piping is commonly used with grep
   → ls | grep <something>
      ⇒ look for something in the output of ls

// CAnceling commands
- CTRL + C
   → Cancel currently running command
- kill -9 <pid>
   → Killthe process with id <pid>
- killall <pname>
   → Kill all processes with name pname
- htop (top)
   → Shows an overview of running processes
   → allows you to kill processing using F9 - select the process then hit F9

// Command history
- The shell saves a history in ~/.bash_history
- Cycle through using the up and down arrows
- CTRL-R <query>
   → search in history
   → less .bash_history
      ⇒ Show the history (default 200 commands)

// Installing software
- Most is available in the system repository
- In Ubuntu
   → sudo apt update
      ⇒ Update information about available packages
   → sudo apt install <program>
      ⇒ Install the program that you want
   → apt search <program> 
      ⇒ find all packages that provide <program>
   → Same for libraries, but with the lib prefix