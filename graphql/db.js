export const people = [
    {
        id: "0",
        name: "Nicolas",
        age: 18,
        gender: "female"
    },{
        id: "1",
        name: "Risa",
        age: 18,
        gender: "male"
    },{
        id: "2",
        name: "Elsa",
        age: 29,
        gender: "female"
    },{
        id: "3",
        name: "Jay",
        age: 17,
        gender: "male"
    },{
        id: "4",
        name: "Su",
        age: 48,
        gender: "female"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
}