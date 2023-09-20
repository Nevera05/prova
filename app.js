app.post("cadastrar", function(req, res)){
    post.create({
        post.create({

        }).then(function(){
            res.redirect("/")
        }).catch(function(erro)[
            res.send("Falha ao cadastrar os dados "+ erro)
        ])
    })
}