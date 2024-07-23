
#include <vector>
#include <ranges>
#include <string>
using namespace std;

class Solution {

    struct Person {
        string name{};
        int height{};
        Person() = default;
        Person(string name, int height) : name{ name }, height{ height } {};
    };

public:
    vector<string> sortPeople(vector<string>& names, const vector<int>& heights) const {
        size_t numberOfPeople = names.size();
        vector<Person> persons(numberOfPeople);
        for (size_t i = 0; i < numberOfPeople; ++i) {
            persons[i] = Person(names[i], heights[i]);
        }
        ranges::sort(persons, [](const Person& x, const Person& y) { return y.height < x.height; });

        for (size_t i = 0; i < numberOfPeople; ++i) {
            names[i] = persons[i].name;
        }
        return names;
    }
};
