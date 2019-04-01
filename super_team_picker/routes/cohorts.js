const express = require("express");
const router = express.Router();
const knex = require("../db/client");

router.get("/",(req, res)=>{
    knex("cohorts")
    .orderBy("createdAt", "DESC")
    .then(cohorts =>{
        res.render("cohorts/index", {cohorts:cohorts});
    });
});

  router.get("/new", (request, response) => {
    response.render("cohorts/new");
  });

  router.post("/", (req, res) => {
    knex("cohorts")// --- START SQL
    .insert({
        logoUrl: req.body.logoUrl,
        name: req.body.name,
        members: req.body.members,
    })
    .returning("*")// --- END SQL
    .then(data => {
        const cohort = data[0];
        ///-- EXECUTE SQL
        res.redirect(`/cohorts/${cohort.id}`);
    });
  });

  router.get("/:id", (req, res) => {
    const id = req.params.id

    const team_count = req.query.team_count;
    const number_per_team = req.query.number_per_team;
    const quantity = req.query.qunatity;
  
    knex("cohorts")
      .where("id", id)
      .first()
      .then(cohort => {
          if (cohort) {
              res.render("cohorts/show", { cohort: cohort, team_count: team_count, number_per_team: team_count, qunatity: quantity});
            } else {
              res.send(`Cannot find cohort with id=${id}`);
            }
      });  
    });

  


  module.exports = router;