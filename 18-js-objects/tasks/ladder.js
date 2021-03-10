let ladder = {
  step: 0,

  up() {
    this.step++;
    return this;
  },

  down() {
    this.step--;
    return this;
  },

  showStep() {
    console.log(this.step);
    return this;
  },
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep();

ladder
  // start the magic
  .up()
  .up()
  .down()
  .up()
  .down()
  .showStep();
