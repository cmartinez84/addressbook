//Business Logic
function Place(destination) {
  this.destination = destination;
  this.landmarks = landmarks;
  this.date = date;
  this.notes = notes;
}

Place.prototype.tripID = function(){
  return this.destination + " " + this.date;
}

//User Interface Logic
