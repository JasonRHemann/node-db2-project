exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: "DH13542HG39DJSI82",
          Make: "Toyota",
          Model: "Prius",
          Mileage: "123456",
          TransmissionType: "automatic",
          TitleStatus: "clean"
        },
        {
          VIN: "WF26789CHKK086543",
          Make: "Acura",
          Model: "RSX",
          Mileage: "234564",
          TransmissionType: "automatic",
          TitleStatus: "clean"
        },
        {
          VIN: "WGJ5890HHFD654467",
          Make: "Toyota",
          Model: "Tacoma",
          Mileage: "345674",
          TransmissionType: "manual",
          TitleStatus: "salvage"
        }
      ]);
    });
};
