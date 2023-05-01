

// lista de contactos inicial
const listaContactos = [
  { nombreCompleto: "Juan Perez" },
  { nombreCompleto: "Maria Rodriguez" },
  { nombreCompleto: "Pedro Gomez" }
];

// Función para añadir un nuevo contacto a la lista
function agregarContacto(nombreCompleto) {
  listaContactos.push({ nombreCompleto });
}
agregarContacto("Santiago Guerra");

// Función para borrar un contacto existente de la lista
function borrarContacto(nombreCompleto) {
  const indice = listaContactos.findIndex(contacto =>
    contacto.nombreCompleto === nombreCompleto
  );
  if (indice !== -1) {
    listaContactos.splice(indice, 1);
  }
}
borrarContacto("Juan Perez");

// Función para imprimir en consola los contactos presentes en la lista
function mostrarContactos() {
  listaContactos.forEach(contacto => console.log(contacto.nombreCompleto));
}
mostrarContactos();
