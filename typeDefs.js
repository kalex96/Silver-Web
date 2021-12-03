const { gql } = require('apollo-server');

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
type Inscripcion {
    idProyecto: String!
    idEstudiante: String!
    estado: String!
    fechaIngreso: String!
    fechaEgreso: String!
    _id: String
}
type Proyecto {
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
    qInscripcion: [Inscripcion]
    qProyecto: [Proyecto]
    qUsuario: [Usuario]
    findAvance(anywhere:String): Avance
    findInscripcion(anywhere:String): Inscripcion
    findProyecto(anywhere:String): Proyecto
    findUsuario(anywhere:String): Usuario
  }
type Mutation{
  addAvance(input: AvanceInput): Avance
  deleteAvance(_id:ID): Avance
  updateAvance(_id:ID, input: AvanceInput): Avance
  addInscripcion(input: InscripcionInput): Inscripcion
  deleteInscripcion(_id:ID): Inscripcion
  updateInscripcion(_id:ID, input: InscripcionInput): Inscripcion
  addProyecto(input: ProyectoInput): Proyecto
  deleteProyecto(_id:ID): Proyecto
  updateProyecto(_id:ID, input: ProyectoInput): Proyecto
  addUsuario(input: UsuarioInput): Usuario
  deleteUsuario(_id:ID): Usuario
  updateUsuario(_id:ID, input: UsuarioInput): Usuario
}  
input AvanceInput{
    idProyecto: String!
    fecha: String!
    descripcion: String!
    observacion: String!
    idEstudiante: String!
    idLider: String!
  }  
  input InscripcionInput{
    idProyecto: String!
    idEstudiante: String!
    estado: String!
    fechaIngreso: String!
    fechaEgreso: String!
  }
  input ProyectoInput{
    nombre: String!
    oGenerales: String!
    oEspecificos: String!
    presupuesto: String!
    fechaInicio: String!
    fechaFin: String!
    idLider: String!
    estado: String!
    fase: String!
  }
  input UsuarioInput {
    correo: String!
    identificacion: String!
    nombre: String! 
    tipo: String!
    password: String!
    estado: String!
    editBy: String!
  }
`;

module.exports = typeProyecto;