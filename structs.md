## Structures
Structs allow developers to create their own types(user-defined types) to aggregate data relevant to their needs.
For example, a user might define a Rectangle Struct to hold data about rectangles used in a program.
```cpp
struct Rectangle {
    float length;
    float width;
};
```
## Types
Every c++ variable is defined with a type.
```cpp
int value;
Rectangle rectangle;
Sphere earth;
```
## Fundamental Types
C++ includes fundamental types, such as int and float. These are primitives types.
The Standard Library [includes additional types], such as `std::size_t` and `std::string`.
## User-Defined Types
Structures are "user-defined" types. Structures are a way for programmers to create types that aggregate and store data in a way that makes sense in the context of a program.

For example, C++ does not have a fundamental type fr storing a date. The Standard Library does include types related to time, which can be converted to dates.
A programmer might desire to create a type to store a date.
COnsider the example:
```cpp
struct Date{
    int day;
    int month;
    int year;
};
```
The code above creates a structure containing 3 "member variables" of type `int`:`day`, `month` and `year`.
If you then create an instance of this structure, you can initialize these member variables:
```cpp
//Create an instance of the Date strcture
Date date;
//initialize the attributes of Date
date.day = 29;
date.month = 04;
date.year = 2021;
```