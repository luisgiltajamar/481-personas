(function() {
    var Persona = function(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;

    };


    WinJS.Namespace.define("Modelo", {
        Persona: Persona

    });
})();