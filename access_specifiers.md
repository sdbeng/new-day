## Access Specifiers
Members of a structure can be specified as public or private.
By default, all members of a structure are public, unless they are specifically marked as private.
Public members can be changed directly, by any user of the object, whereas private members can only be changed by the object itself.

## Private Members
This is an implementation of the `Date` struc, with all members marked as private.
```cpp
struct Date{
    private:
    int day{1};
    int month{1};
    int year{0};
};
```