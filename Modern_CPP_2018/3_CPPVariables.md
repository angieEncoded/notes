// Declaring varialbes
- Variable declaratoin always follows this pattern:
- <TYPE> <NAME> [ = <VALUE>];
   → Every varialbe has a type
   → They cannot change their types
   → ALWAYS INITIALIZE if you can

// Naming variables
- Names MUST start with a letter
- Give them meaningful names
- Don't be afraid to use longer names
- Don't include the type in the name
- Don't use negation in the name
- GOOGLE-STYLE names variables in snake_case, all lowercase, underscores separate words
- C++ is case-sensitive
   → some_var is different from some_Var

// Built in types
- bool thisIsFun = false
- char carretReturn = '\n'
- int meaningOfLife = 42;
- short smallerInt = 42;
- long biggerInt = 42;
- float fraction = 0.01f;
- double preciseNumber = 0.01;
- auto someInt = 13;
- auto someFloat = 13.0f;
- auto someDouble = 13.0;

// Operations on arithmetic types
- All character, integer, and floating point types are arithmetic
- arithmethic operations 
   → +, -, *, /
- Comparisons 
   → <, >, <=, >=, == return bool
- a += 1 is the same as a = a+1
- Avoid == for floating point types

//Boolean operations have logical operations
- || or
- && and
- ! not
- Addiitonal operations on integer variables
   → / integer division
      ⇒ Types will be converted to the biggest type - if one is a double all of them will be a double
   → % modulo division
   → ++ Increment
   → -- Decrement
      ⇒ Do not use ++ and -- inside of another expression 
         • For example a = (a++) + ++b;

// Strings
- #include <string>
   → std::string
   → check if the stringis empty with myString.empty()
   → Works out of the box withthe IO streams
   → std::string myString = "Hello";
   → std::cin >> myString;

// std::srray for fixed size collection of items
- #include <array> to use std::array
- Store a collection of items of the same type
- Can create from data
   → array<float, 3> arr = {0.1f, 2.0f, 3.0f0};
- Access items with arr[i]
   → Indexing starts with 0
- Number of stored items
   → arr.size();
- Remove all the elements
   → arr.clear()
- useful access aliases:
   → first item: arr.front() == arr[0];
   → last item arr.back() == arr[arr.size() -1]

// Use std::vector when the number of items is unknown
- #include <vector> to use std::vector
- Vector is implemented as a dynamic table
- Access stored items the same as as std::array
- Add a new item in one of two ways
   → vec.emplace_back(value) [preferred, c++11]
   → vec.push_back(value) [historically better known]
- Use it! It is fast and flexible
   → Consider it to be a default container to store collections of items of any same type

// Optimize vector resizing
- Many push_back\emplace_back operations force size changes
- reserve(n) ensures that the vector has enough memory to store n items
- The parameter n can even be approximate
- This is a very important optimization
- example
   → std::vector<std::String> vec;
   → const int guessSizeNum = 100;
   → // Always call reserve when you know the size
   → vec.reserve(guessSizeNum);
   → for (int i = 0; i < maxSizeNum, i++){
   →     vec.emplace_back("Hello");
   → }

// Example Vector
#include <vector>
#include <iostream>

int main(){

    std::vector<int> vec = {1,2};
    vec.reserve(100); // If you have a lot of elements this can help with efficiency
    std::cout << "Size is:" << vec.size() << std::endl; // Shows number of elements
    vec.emplace_back(3);
    std::cout << "Size is:" << vec.size() << std::endl;
    for (auto element:vec){
        std::cout << element << std::endl;
    }
    std::cout << "Front is: " << vec.front() << std::endl;
    std::cout << "Back is: " << vec.back() << std::endl;
    //std::cout << vec[0] << " " << vec[1] << std::endl;
    
    return 0;
}

// Show all warnings
- pass -Wall when compiling to see Warnings All

// Variables live in scopes
- There is a single global scope
- Local scopes start with { and ends with }
- All variables belong to the scope where they have been declared
- All variables die at the end of their scope
- This is the core of the C++ memory system

// Scope example
#include <vector>
#include <iostream>
#include <string>

int main (){
{
    int scopedVariable = 1;
}
    std::cout << scopedVariable << std::endl;
    return 0;
}

// Error message when compiling this program
//-----------------------------------------------------------------------
main.cpp: In function ‘int main()’:
main.cpp:9:18: error: ‘scopedVariable’ was not declared in this scope
    9 |     std::cout << scopedVariable << std::endl;
      |       
//-----------------------------------------------------------------------


// Any variable can be const
- Use const to declare a constant
- The compiler will guard it from any changes
- Keyword consta can be used with ANY type
- GOOGLE-STYL names constants in camelCase starting with a small letter k
   → const float kImportantFloat = 20.0f;
   → const int kSomeInt = 20;
   → const std::string kHello = "hello";
- const is part of type:
   → variable kSomeInt has type const int
- Tip:
   → declare everything const unless you know you need to change it

// References to varialbles
- We can create a reference to any variable
- Use & to state that a variable is a reference
   → float& ref = originalVariable;
   → std::string& helloRef = hello;
- Reference is part of type:
   → variable ref has type float&
   → Whatever happens to a reference happens to the variable and vice versa
- Yields performance gain as references avoid copying data

// Const with references
- References are fast but reduce control
- To avoid unwanted changes use const
   → const float& ref = originalVariable;
   → const std::string& helloRef = hello;

#include <iostream>

int main(){

    int num =1;
    const int& numRef = num;
    std::cout << num << " " << numRef << std::endl;
    //numRef = 2; // Can't change this variable because the reference is const
    num = 2;
    std::cout << num << " " << numRef << std::endl;

    return 0;
}

// If statement
- used to conditionally execute code
- All the else cases can be omitted if needed
- STATEMENT can be any boolean expression
- 
if(STATEMENT){
// This is executed if the statement is true
} else if(OTHER STATEMENT){
// This is executed if (STATEMENT == false) && (OTHER STATEMENT == true)
} else {
// This is executed if nothing is true
}


// Switch statement
- Used to conditionally execute code
- Can have many case statements
- break exist the switch block
- STATEMENT usually returns int or enum value

switch(STATEMENT){
    case CONST_1:
        // This runs if STATEMENT == CONST_1;
        break;
    case CONST_2:
        // This runs if STATEMENT == const_1;
        break;
    default:
        // This runs by default
}

// While loop
- Usually used when the exact number of iterations is not known
- Easy to form an endless loop by mistake

bool condition = true;
while (condition) {
    // Loop while true
    // condition changes to false in the loop to exit
}

// For loop
- in C++ for loops are VERY fast
- less flexible than while but less error prone
- use for when number of iterations is fixed
- use while otherwise
- Variables declared in a for loop go out of scope when the loop ends
- Jump more than 1 be using =+2 or whatever

const int kIterationCount = 10;

for(int i = 0; i < kIterationCount; ++i){ // Use the prefix version here, its faster
    // This happens for numberOfIterations
}

// Range based for loop
- Iterating over standard containers like array or vector has simpler syntax
- Avoid mistakes with using indices
- Shows intent with the syntax
- Has been added in C++11


for (auto element:vec){
    // Do something with element
}

for (const auto& : container){
    // Can use a const reference as well - helpful when used with strings
    // Since strings are very large it is helpful to use the reference
}

for (const auto& : vec.front()){
    // This will iterate over the first element if it is a string because it is still a container
}

// Exit loops and iterations
- We have control over the loop iterations
- Use break to exit the loop
- Use continue to skip to the next iteration

std::vector<int> vec = {1,2,3,4};

for (int num : vec){
    if (num % 2 == 0){
        continue; // This will go to the next iteration of the loop if num is divisible by 2
    }
    std::cout << num << std::endl
}

// Git
- Free software for distributed version control
- Synchronizes local and remote files
- stores a history of all changes

// is synchronized?
- Local files on a computer
- REmote files in the repository
- There are gitlab servers that can be used internal to a company

// Typical workflow
- Cloning a repository
   → git clone <repo_url> <local_folder>
- In <local_folder>
   → Change files
   → git add <files>
   → git commit -am "Descriptive message"
   → git push origin master
- git - the simple guide
   → http://rogetdudler.github.io/git-guide
- Fork a repo with fork 

// 


















