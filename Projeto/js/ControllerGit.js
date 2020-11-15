class ControllerGit {

    adiciona() {
        console.log("controler chamando")
            //pegando infor do usuario
        let nomePesquisa = document.getElementById('nome')

        let modelagem = new ModelGit();

        //passando info para o busca dados e depois passando resultado para atualiza dados
        modelagem.buscaDados(nomePesquisa.value)

        let visualiza = new ViewGit()
        visualiza.pesquisa(modelagem)

    }
}