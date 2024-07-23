
function sortPeople(names: string[], heights: number[]): string[] {
    const numberOfPeople = names.length;
    const persons: Person[] = new Array(numberOfPeople);
    for (let i = 0; i < numberOfPeople; ++i) {
        persons[i] = new Person(names[i], heights[i]);
    }
    persons.sort((x, y) => y.height - x.height);

    for (let i = 0; i < numberOfPeople; ++i) {
        names[i] = persons[i].name;
    }
    return names;
};


class Person {
    name: string;
    height: number;

    constructor(name: string, height: number) {
        this.name = name;
        this.height = height;
    }
}
