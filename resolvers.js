const Avance = require('./esquema/avance');
const Inscripcion = require('./esquema/inscripciones');
const Proyecto = require('./esquema/proyectos');
const Usuario = require('./esquema/usuarios');

const resolvers = {
    Query: {
      qAvance: async () => {
        return await Avance.find({})
      },
      qInscripcion: async () => {
        return await Inscripcion.find({})
      },
      qProyecto: async () => {
        return await Proyecto.find({})
      },
      qUsuario: async () => {
        return Usuario.find({})
      }
    },
    Mutation:{
      addAvance: async (root, {input}) => {      
        const avance = new Avance({...input})
        return avance.save()
      },
      deleteAvance: async (root, {_id}) => {
        return await Avance.findByIdAndDelete(_id)
      },
      updateAvance: async (root, {_id, input}) => {
        return await Avance.findByIdAndUpdate(_id, input, {new:true})
      },
      addInscripcion: async (root, {input}) => {      
        const inscripcion = new Inscripcion({...input})
        return inscripcion.save()
      },
      deleteInscripcion: async (root, {_id}) => {
        return await Inscripcion.findByIdAndDelete(_id)
      },
      updateInscripcion: async (root, {_id, input}) => {
        return await Inscripcion.findByIdAndUpdate(_id, input, {new:true})
      },
      addProyecto: async (root, {input}) => {      
        const proyecto = new Proyecto({...input})
        return proyecto.save()
      },
      deleteProyecto: async (root, {_id}) => {
        return await Proyecto.findByIdAndDelete(_id)
      },
      updateProyecto: async (root, {_id, input}) => {
        return await Proyecto.findByIdAndUpdate(_id, input, {new:true})
      },
      addUsuario: async (root, {input}) => {      
        const usuario = new Usuario({...input})
        return usuario.save()
      },
      deleteUsuario: async (root, {_id}) => {
        return await Usuario.findByIdAndDelete(_id)
      },
      updateUsuario: async (root, {_id, input}) => {
        return await Usuario.findByIdAndUpdate(_id, input, {new:true})
      }
    }
  };

  module.exports = resolvers;