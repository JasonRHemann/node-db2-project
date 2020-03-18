exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl.string("VIN", 255).notNullable();
    tbl.string("Make", 255).notNullable();
    tbl.string("Model", 255).notNullable();
    tbl.string("Mileage", 255).notNullable();
    tbl.string("TransmissionType", 255);
    tbl.string("TitleStatus", 255);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
