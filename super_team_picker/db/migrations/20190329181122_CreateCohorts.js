
exports.up = function(knex, Promise) {
    return knex.schema.createTable("cohorts", t => {
        t.bigIncrements("id");
        t.string("logoUrl");
        t.string("name");
        t.text("members");
        t.timestamp("createdAt").defaultTo(knex.fn.now());
        });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("cohorts");
};
