const getPersonAge = function(person) {
    return ("yearOfDeath" in person ? person.yearOfDeath - person.yearOfBirth
        : new Date().getFullYear() - person.yearOfBirth);
}

const findTheOldest = function(persons) {
    persons.sort(
        (firstPerson, secondPerson) => {
            firstAge = getPersonAge(firstPerson);
            secondAge = getPersonAge(secondPerson);
            return firstAge > secondAge ? -1 : 1;
        }
    )
    return persons[0];
};

// Do not edit below this line
module.exports = findTheOldest;
