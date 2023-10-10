/*
const boton = document.getElementById("loginButton");
const url = "/login";

boton.addEventListener('click',() => {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("La solicitud no se completó con éxito");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Solicitud GET exitosa", data);
    })
    .catch((error) => {
      console.error("Error en la solicitud GET", error);
    });
});*/