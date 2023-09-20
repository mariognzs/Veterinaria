import { useState,useEffect } from "react";

function Formulario() {
  const [nombre,setNombre] = useState('');
  const [propietario,setPropietario] = useState('');
  const [email,setEmail] = useState('');
  const [fecha,setFecha] = useState('');
  const [sintomas,setSintomas] = useState('');
  const [error,setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    //Valudacion 

    if([nombre,propietario,email,fecha,sintomas].includes('')){
      console.log("Vacio")
      setError(true)
      return;
    }
    setError(false);
  }

  return (
    <div className="w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-lg mt-5 text-center">
        {" "}
        Añade pacientes y {""}{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

        {error && (
        <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md"><p>Todos los campos son obligatorios</p></div>
        
        )}

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="mascota"
          >
            Nombre mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
            value={nombre}
            onChange={(e) => setNombre(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="propietario"
          >
            Nombre propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="example@example.com"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="alta"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
            value={fecha}
            onChange={(e) => setFecha(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="sintomas"
          >
            Sintomas
          </label>
          <textarea id="sintomas" placeholder="Sintomas de tu mascota"
                    value={sintomas}
                    onChange={(e) => setSintomas(e.target.value) }/>
        </div>

        <input type="submit" className="bg-indigo-700 w-full p-3 text-white uppercase font-bold hover:bg-indigo-900 cursor-pointer transition-colors" value="Agregar cita"
        />

      </form>
    </div>
  );
}

export default Formulario;
