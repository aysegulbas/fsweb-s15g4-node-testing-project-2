const authors=[
    {name:"Arthur Doyle"},
    {name:"Ernest Hemingway"}
]
exports.seed=function(knex){
    return knex("authors").insert(authors)
}