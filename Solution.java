
import java.util.Arrays;

public class Solution {

    private record Person(String name, int height) {}

    public String[] sortPeople(String[] names, int[] heights) {
        int numberOfPeople = names.length;
        Person[] persons = new Person[numberOfPeople];
        for (int i = 0; i < numberOfPeople; ++i) {
            persons[i] = new Person(names[i], heights[i]);
        }
        Arrays.sort(persons, (x, y) -> y.height - x.height);

        for (int i = 0; i < numberOfPeople; ++i) {
            names[i] = persons[i].name;
        }
        return names;
    }
}
