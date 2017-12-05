class HoneyMakerBee extends Bee {
  constructor() {
    super();
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }
};

HoneyMakerBee.prototype.makeHoney = function() {
  return this.honeyPot++;
}

HoneyMakerBee.prototype.giveHoney = function() {
  return this.honeyPot--;
}