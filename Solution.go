
package main

import (
    "fmt"
    "sort"
)

type Person struct {
    name   string
    height int
}

func sortPeople(names []string, heights []int) []string {
    numberOfPeople := len(names)
    persons := make([]Person, numberOfPeople)

    for i := 0; i < numberOfPeople; i++ {
        persons = append(persons, Person{name: names[i], height: heights[i]})
    }

    sort.Slice(persons, func(i, j int) bool { return persons[i].height > persons[j].height })
    for i := 0; i < numberOfPeople; i++ {
        names[i] = persons[i].name
    }
    return names
}
