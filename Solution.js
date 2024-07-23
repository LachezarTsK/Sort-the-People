
/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    const numberOfPeople = names.length;
    const persons = new Array(numberOfPeople);
    for (let i = 0; i < numberOfPeople; ++i) {
        persons[i] = new Person(names[i], heights[i]);
    }
    persons.sort((x, y) => y.height - x.height);

    for (let i = 0; i < numberOfPeople; ++i) {
        names[i] = persons[i].name;
    }
    return names;
};

/**
 * @param {string} name
 * @param {number} height
 */
function Person(name, height) {
    this.name = name;
    this.height = height;
}
