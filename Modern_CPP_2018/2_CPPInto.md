// "Within C++, there is a much smaller and cleaner language struggling to get out" - Bjarne Stroustrup

// Where to write C++ code
- Two options
   → IDE
      ⇒ CLion
      ⇒ QT Creator
      ⇒ Eclipse
   → Modern Text Editor
      ⇒ Sublime Text 3
      ⇒ Visual Studio Code
      ⇒ Atom
      ⇒ VIM - Steep learning curve
      ⇒ Emacs - Steep learning curve

// Simple Hello world program

#include <iostream>
int main(){
    // First program!
    std::cout << "Hello World" << std::endl;
    return 0;
}
    
// Comments and whitespaces
- Not important. Preprocessor dumps these
- a comment is text and starts with "//" or "/* */"

// Good code style is important
- "Programs are meant to be read by humans and only incidentally for computers to execute" - Donald Knuth
- use clang_format to format your code
- use cpplint to check the style
- Followinf a style guide will save you time and make the code more readable
- We use Google Code Style Sheet
- Naming and style recommendations will be marked by GOOGLE-STYLE tag in styles

// Everything starts with main
- EVERY program starts with main
- main is a function that returns an error code
- error code 0 means OK
- Error code can be any number in [1,255]

// #include directive
- two variants:
   → #include <file>
      ⇒ system include files
   → #include "file"
      ⇒ local include files
   → Copies the content of file into the current file

// I\O Streams for simple input and output
- Handles stdin, stdout, and stderr
   → std::cin maps to stdin
   → std::cout maps to stdout
   → std::err maps to stderr
- #include <iostream>
   → This will include the IO streams
   → Part of the C++ standard library

// Compile and run Hello World (from terminal)
- WE understand text
- The computer understands machine code
- Compilation is translation from text to machine code
- Compilers we can use on linux
   → GCC (aka G++)
   → Clang [*][used in the examples]
      ⇒ Error messages are a little better
- Compile and run the Hello World program
   → c++ -std=c++11 -o helloworld test.cpp
   → g++ also works
   → run it with ./helloworld
   → if no -o name is provided the program will be called a.out