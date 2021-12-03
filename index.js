const { ApolloServer, gql } = require('apollo-server');
const { mongoose } = require("./database");
const resolvers = require('./resolvers');
const typeProyecto = require('./typeDefs');


const server = new ApolloServer({
  typeDefs: typeProyecto,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Servidor escuchando en ${url}`);
});
