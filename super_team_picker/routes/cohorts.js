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
    const quantity = req.query.quantity;
    const method = req.query.method;
    // a_length = a.length
    // loopCount = Math.Ceil(a.length/quantity)
    // b=[]
    // sub_array=[]
    // for(i until quantity){
    // for (j until loopCount){
    // y = a.sort(() => {
    //     return 0.5 - Math.random()})[0]
    //     a.shift()
    // sub_array.push(y)
    // if(a.length==0 ){
    //     break;
    // }
    // }
    // b.push(sub_array)
    // sub_array=[]
    // }
  
    knex("cohorts")
      .where("id", id)
      .first()
      .then(cohort => {
          if (cohort) {
              res.render("cohorts/show", { cohort: cohort, quantity: quantity, method: method });
            } else {
              res.send(`Cannot find cohort with id=${id}`);
            }
      });  
    });

  module.exports = router;