
using System;

public class Solution
{
    private sealed record Person(String name, int height) { }

    public string[] SortPeople(string[] names, int[] heights)
    {
        int numberOfPeople = names.Length;
        Person[] persons = new Person[numberOfPeople];
        for (int i = 0; i < numberOfPeople; ++i)
        {
            persons[i] = new Person(names[i], heights[i]);
        }
        Array.Sort(persons, (x, y) => y.height - x.height);

        for (int i = 0; i < numberOfPeople; ++i)
        {
            names[i] = persons[i].name;
        }
        return names;
    }
}
