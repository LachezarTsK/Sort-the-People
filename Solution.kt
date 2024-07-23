
class Solution {

    private data class Person(val name: String, val height: Int) {}

    fun sortPeople(names: Array<String>, heights: IntArray): Array<String> {
        val numberOfPeople = names.size
        val persons = ArrayList<Person>(numberOfPeople)

        for (i in 0..<numberOfPeople) {
            persons.add(Person(names[i], heights[i]))
        }
        persons.sortWith() { x, y -> y.height - x.height }

        for (i in 0..<numberOfPeople) {
            names[i] = persons[i].name;
        }
        return names
    }
}
