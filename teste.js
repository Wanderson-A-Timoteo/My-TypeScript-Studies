var Teste = /** @class */ (function () {
    function Teste(id, name) {
        this.Id = id;
        this.Name = name;
    }
    Teste.prototype.notificarUsuario = function () {
        alert('Olá ${this.Name}');
    };
    return Teste;
}());
var teste = new Teste(1, "Wanderson");
teste.notificarUsuario();
