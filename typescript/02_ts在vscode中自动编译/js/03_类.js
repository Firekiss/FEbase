(() => {
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = this.firstName + '_' + this.lastName;
        }
    }
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    const person = new Person('诸葛', '孔明');
    console.log(showFullName(person));
})();
