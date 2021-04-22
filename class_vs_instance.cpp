#include <iostream>
using std::cout;
using std::cin;

class Person{
    public:
        int age;
        Person(int initialAge);
        void yearPasses();
        void amIOld();
};
//constructor
Person::Person(int initialAge){
    //check if age is negative
    if(initialAge < 0){
        age = 0;
        cout << "Age is not valid, setting age to 0." << "\n";
        cout << "You are young." << "\n";
    }
    age = initialAge;
}
int main(){
}