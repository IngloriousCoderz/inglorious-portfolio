function calculateAge() {
  try {
    const name = prompt("Hey there, what's your name?");
    if (name == null || name.length < 1) {
      throw new Error('Hey what kinda name is that?');
    }

    const age = prompt("Sweet, and what's your age?");
    if (age == null || isNaN(age)) {
      throw new Error("I don't believe you.");
    }

    return age;
  } catch (error) {
    console.log('An error occured.');
    console.error(error.name);
    console.error(error.message);
    console.error(error.stack);
    throw new Error('Something went wrong.');
  } finally {
    console.log('The end.');
  }
}
