## Access Specifiers
Members of a structure can be specified as public or private.
By default, all members of a structure are public, unless they are specifically marked as private.
Public members can be changed directly, by any user of the object, whereas private members can only be changed by the object itself.

## Private Members
This is an implementation of the `Date` struct, with all members marked as private.
```cpp
struct Date{
    private:
    int day{1};
    int month{1};
    int year{0};
};
```
Private members of a class are accessible only from within other member functions of the same class.
There is a 3rd access specifier called `protected`, which implies that members are accesible from other member functions of the same class, and also from members of their derived classes.As we'll see in inheritance.

## Accessors and Mutators
To access private members, we define public getter(accessor) and setter(mutator) functions.
```cpp
struct Date {
    public:
    int Day(){
        return day;//getter
    }
    void Day(int day) {
        this.day = day;//setter
    }
    int Month(){
        return month;//getter
    }
    void Month(int month){
        this.month = month;//setter
    }
    int Year(){
        return year;//getter
    }
    void Year(int year){
        this.year = year;//setter
    }

    private:
    int day{1};
    int month{1};
    int year{0};
};
```
## Avoid Trivial Getters and Setters
Sometimes accessors are not neccesary, or even advisable. The C++ Core Guidelines recommend, "A trivial getter or setter adds no semantic value: the data item could just as well be public."
here is an example from the Core Gidelines:

```cpp
class Point{
    int x;
    int y;
public:
    Point(int xx, int yy): x{xx}, y{yy} {

    }
    int get_x() const {return x;}//const here promises not to modify the object
    void set_x(int xx){
        x = xx;
    }
    int get_y() const {return y;}//const here promises not to modify the object
    void set_y(int yy){
        y == yy;
    }
    //no behavioral member functions
}
```
This class could be made into a `struct`, with o logic or `invariants`, just passive data. The member variables could both be public, with no accessor functions:
```cpp
struct Point{ //Good concise
    int x {0};//public member var with a default initializer of 0
    int y {0};//public member var with a default initializer of 0
}
```