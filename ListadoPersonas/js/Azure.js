(function() {

    var client =
        new WindowsAzure.MobileServiceClient("https://awnotepad.azure-mobile.net");
    var tabla = client.getTable("persona");


    function add(persona) {

        return tabla.insert(persona);

    }

    function buscar(edad) {

        if (edad) {

            return tabla.where({ edad: edad }).read();
        }
        return tabla.read();
    }

    WinJS.Namespace.define("Azure",
    {
        Add: add,
        Buscar:buscar

    });

})();