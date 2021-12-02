const { ApolloServer, gql } = require('apollo-server');
const { mongoose } = require("./database");
const Avance = require('./esquema/avance');
const Inscripciones = require('./esquema/inscripciones');
const Proyectos = require('./esquema/proyectos');
const Usuarios = require('./esquema/usuarios');


const typeProyecto = gql`
type Avance {
    idProyecto: String!
    fecha: String!
    descripcion: String!
    observacion: String!
    idEstudiante: String!
    idLider: String!
    _id: String
}
type Inscripciones {
    idProyecto: String!
    idEstudiante: String!
    estado: String!
    fechaIngreso: String!
    fechaEgreso: String!
    _id: String
}
type Proyectos {
    nombre: String!
    oGenerales: String!
    oEspecificos: String!
    presupuesto: String!
    fechaInicio: String!
    fechaFin: String!
    idLider: String!
    estado: String!
    fase: String!
    _id: String
}
type Usuarios {
    correo: String!
    identificacion: String!
    nombre: String! 
    tipo: String!
    password: String!
    estado: String!
    editBy: String!
    _id: String
}
type Usuario {
  correo: String!
  identificacion: String!
  nombre: String! 
  tipo: String!
  password: String!
  estado: String!
  editBy: String!
  _id: String
}
type Query {
    qAvance: [Avance]
    qInscripciones: [Inscripciones]
    qProyectos: [Proyectos]
    qUsuarios: [Usuarios]
}
type Mutation{
  addAvance(
    idProyecto: String!
    fecha: String!
    descripcion: String!
    observacion: String!
    idEstudiante: String!
    idLider: String!
  ): Avance
}
`;

const resolvers = {
  Query: {
    qAvance: async (root, args) => {
      return Avance.find({})
    },
    qInscripciones: async (root, args) => {
      return Inscripciones.find({})
    },
    qProyectos: async (root, args) => {
      return Proyectos.find({})
    },
    qUsuarios: async (root, args) => {
      return Usuarios.find({})
    }
  },
  Mutation:{
    addAvance: (root, args) => {
      const avance = new Avance(...args)
      return avance.save()
    }
  }
};

const server = new ApolloServer({
  typeDefs: typeProyecto,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server escuchando en ${url}`);
});
