class ModelGit {
    constructor() {
        this.imagem
        this.nome
        this.quantRepositorio
        this.url
        this.followers_url
        this.following_url
        this.gists_url
        this.repos_url
    }

    async buscaDados(usuario) {
        let url = "https://api.github.com/users";
        let idCliente = "Iv1.88031344e729edff";
        let chave = "SHA256:VOjPq+xIAj+aY99lJncgqrmfVm/nArbIpCSobi3S+Ls="

        let request = new XMLHttpRequest();
        try {
            request.addEventListener('load', () => {
                if (request.status == 200) {
                    let guardaDados = this.processaDados(request.responseText)
                    this.atualizaDados(guardaDados)
                }
            })
            request.open('GET', `${url}/${usuario}?client_id=${idCliente}&client_secret=${chave}`, false)
            request.send();
        } catch (error) {
            throw ("erro", error)
        }

    }

    processaDados(x) {
        let response = JSON.parse(x);
        return response;

    }

    atualizaDados(request) {

        try {
            this.nome = request.name
            this.imagem = request.avatar_url
            this.quantRepositorio = request.followers
            this.url = request.url
            this.followers_url = request.followers_url
            this.following_url = request.following_url
            this.gists_url = request.gists_url
            this.repos_url = request.repos_url
        } catch (error) {
            throw ("erro")
        }

    }

    getrepos_url() {
        return this.repos_url
    }

    getgists_url() {
        return this.gists_url
    }

    getfollowing_url() {
        return this.following_url
    }
    getfollowers_url() {
        return this.followers_url
    }

    getUrl() {
        return this.url
    }

    getNome() {
        return this.nome
    }

    getImagem() {
        return this.imagem
    }

    getquantRepositorio() {
        return this.quantRepositorio
    }


}