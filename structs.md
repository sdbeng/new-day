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
## Member Initialization
Generally, we want to avoid instantiating an object with undefined members. Ideally, we would like all members of an object to be in a valid state once the object is instantiated. We can change the values of the members later, but we want to avoid any situation in which the members are ever in an invalid state or undefined.

In order to ensure that objects of our Date structure always start in a valid state, we can initialize the members from within the structure definition.
```cpp
struct Date {
  int day{1};
  int month{1};
  int year{0};
};
```
There are also several other approaches to either initialize or assign member variables when the object is instantiated. For now, however, this approach ensures that every object of Date begins its life in a defined and valid state.

```cpp
#include <cassert>
#include <iostream>

// TODO: Update the structure to initialize the member variables to a default of January 1, 2000
struct Date {
  int day{1};
  int month{1};
  int year{2000};
};

int main() {
  Date date;
  assert(date.day == 1);
  assert(date.month == 1);
  assert(date.year == 2000);
  std::cout << date.day << "/" << date.month << "/" << date.year << "\n";
}
```