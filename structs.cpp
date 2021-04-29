#include <assert>
#include <iostream>
using std::cout;

// define a data structure
struct Date {
    int day;
    int month;
    int year;
}

int main(){
    Date date;
    //initialize date to August 29, 1981

    //test
    assert(date.day == 29);
    assert(date.month == 8);
    assert(date.year == 1981);

    //print the data in the structure
    cout << date.day << "/ " << date.month << "/ " << date.year << "\n";
}
