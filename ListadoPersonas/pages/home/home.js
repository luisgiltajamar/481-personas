(function () {
    "use strict";

    var datos = new WinJS.Binding.List([]);
   
    var miembros= {
        
        Personas:datos
    }

    WinJS.Namespace.define("Datos", miembros);

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            var esto = this;
            document.getElementById("btnAdd").addEventListener("click",
                function() {

                    var p = new Modelo.Persona(
                        document.getElementById("txtNom").value,
                        document.getElementById("txtEda").value
                    );
                    Azure.Add(p).done(function() {
                        Azure.Buscar(undefined).done(function (res) {
                            esto.update(res);

                        });

                    });

                });
            document.getElementById("btnBus").addEventListener("click",
                function() {
                    Azure.Buscar(document.getElementById("txtEdaBus").value)
                        .done(function (res) {
                        esto.update(res);
                    });


                });

            Azure.Buscar(undefined).done(function(res) {
                esto.update(res);

            });
        },
        update: function(data) {

           // datos.splice(0, datos.length);
            datos.length = 0;
            for (var i = 0; i < data.length; i++) {

                datos.push(data[i]);
            }

        }

    });
})();
