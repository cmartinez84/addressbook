
function Contact(first,last){
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}

function Addresses (street, city, state, zipcode){
  this.street = street;
  this.city = city;
  this.state = state;
}


Contact.prototype.fullName = function(){
  return this.firstName + " " + this.lastName;
}



$(document).ready(function(){
  $("#addressForm").submit(function(event){
    event.preventDefault();
    var inputtedFirstName = $("input#inputtedFirstName").val();
    var inputtedLastName = $("input#inputtedLastName").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".new-address").each(function(){
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var newAddress = new Addresses(inputtedStreet, inputtedCity, inputtedState);
      newContact.addresses.push(newAddress);
      console.log(newAddress);
    })

    $("ul#contacts").append("<li>"+newContact.fullName() + "</li>");
    // $(".new-address").text("");
    newContact.addresses.forEach(function(address){
      $("ul#addresses").append("<li>" + address.street + " " + address.city +" "+  address.state + "</li>");
    });
    $("input#inputtedFirstName").val("");
    $("input#inputtedLastName").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");


  }); //end submit

  $("#add-address").click(function () {
    $("#new-addresses").append("<div class='new-address'>" +
                                  "<div class='form-group'>" +
                                    "<label for='new-street'>Street</label>" +
                                    "<input type='text' class='form-control new-street'>" +
                                  "</div>" +
                                  "<div class='form-group'>" +
                                    "<label for='new-city'>City</label>" +
                                    "<input type='text' class='form-control new-city'>" +
                                  "</div>" +
                                  "<div class='form-group'>" +
                                    "<label for='new-state'>State</label>" +
                                    "<input type='text' class='form-control new-state'>" +
                                  "</div>" +
                                "</div>");
  });
});
