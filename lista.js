const listaContactos = [
	{
		id: "132123",
		nombre: "Juan",
		apellido: "Perez",
		telefono: "342-342-2932",
		ciudad: "Yondó",
		direccion: "crr45 X",
	},
	{
		id: "31312313",
		nombre: "Maria",
		apellido: "Rodriguez",
		telefono: "342-452-7664",
		ciudad: "Cisneros",
		direccion: "crr45 a",
	},
	{
		id: "33431331",
		nombre: "Pedro",
		apellido: "Gomez",
		telefono: "364-564-8909",
		ciudad: "Medellín",
		direccion: "crr 56 b",
	},
];

function agregarContacto(id, nombre, apellido, telefono, ciudad, direccion) {
	listaContactos.push({ id, nombre, apellido, telefono, ciudad, direccion });
}
agregarContacto("199299092", "Santiago", "Pérez", "342-943-9321", "Medellín", "crr 48p");

function borrarContacto(posicion) {
	listaContactos.splice(posicion, 1);
}
borrarContacto(1);

function mostrarContactos() {
	listaContactos.forEach((contacto) =>
		console.log(
			`Id: ${contacto.id} Nombre: ${contacto.nombre} - Apellido: ${contacto.apellido} - Teléfono: ${contacto.telefono} - Ciudad: ${contacto.ciudad} - Dirección: ${contacto.direccion}`
		)
	);
}
mostrarContactos();
