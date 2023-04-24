import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './componentes/header/header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';
function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
    id: uuidv4(),
    equipo: "Front-End",
    foto: "https://avatars.githubusercontent.com/u/118866908?s=400&u=0607b59f59a18ff66b8b1290877ad798c9f532c1&v=4",
    nombre:"Ricardo",
    puesto: "CiberSecurity",
    fav: true
    },
    {
    id: uuidv4(),
    equipo: "Front-End", 
    foto: "https://github.com/harlandlohora.png", 
    nombre: "Harland Lohora", 
    puesto: "Instructor",
    fav: true
    },
    { 
    id: uuidv4(),
    equipo: "Programacion", 
    foto: "https://github.com/genesysaluralatam.png", 
    nombre: "Genesys Rondon", 
    puesto: "Desarrolladora de software e instructora",
    fav: false
    }, 
    {
    id: uuidv4(),
    equipo: "UX y Diseng", 
    foto: "https://github.com/JeanmarieAluraLatam.png", 
    nombre: "Jeanmarie Quijada", 
    puesto: "Instructora en Alura Latam",
    fav: false
    },
    { 
    id: uuidv4(),
    equipo: "Programacion", 
    foto: "https://github.com/christianpva.png", 
    nombre: "Christian Velasco", 
    puesto: "Head de Alura e Instructor",
    fav: true
    },
    {
    id: uuidv4(),
    equipo: "Innovacion Y Gestion", 
    foto: "https://github.com/JoseDarioGonzalezCha.png", 
    nombre: "Jose Gonzalez", 
    puesto: "Dev FullStack",
    fav: false
    },
])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuidv4(),
      titulo: "Programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuidv4(),
      titulo: "Front-End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuidv4(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuidv4(),
      titulo: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuidv4(),
      titulo: "UX y Diseng",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuidv4(),
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuidv4(),
      titulo: "Innovacion Y Gestion",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },
  ])

  //ternario --> condicion ? seMuestra : noSeMuestra
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //registrar colaborador
  const registrarColaborador = (colaborador) => {
    //spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  } 

  //eliminar colaborador
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id != id)
    actualizarColaboradores(nuevosColaboradores)
  } 

  //actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //Crear Equipo
  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos, {...nuevoEquipo, id:uuidv4()}])
  }

  //Like 
  const like = (id) => {
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      {/* { mostrarFormulario ? <Formulario /> : <></>} */}
      {
        mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo) =>  equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
      {
        equipos.map((equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo} 
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          />)
      }

      <Footer />
    
    </div>
  );
}

export default App;
