class Teste{
    private Id: number;
    private Name: string;

    constructor(id: number, name: string){
        this.Id = id;
        this.Name = name;

    }

    public notificarUsuario() : void {
        alert('Olá ${this.Name}');
    }
}

var teste = new Teste(1, "Wanderson");
teste.notificarUsuario();
