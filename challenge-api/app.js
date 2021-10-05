const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const http = require('http');
const cors = require('cors');

const typeDefs = gql`
  type Query {
    hello: String
    items: [Item!]!
  }

  type Item {
    id: ID!
    title: String
    description: String
    numberOfItems: Int
    isComplete: Boolean
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!!',
    items: () => [
      { id: 1, title: 'Milk', description: 'go get more milk', numberOfItems: 2, isComplete: true },
      { id: 2, title: 'Water', description: 'am thirsty', numberOfItems: 1, isComplete: false },
      {
        id: 3,
        title: 'Cheeze',
        description: 'need that chedda',
        numberOfItems: 1,
        isComplete: false,
      },
    ],
  },
};

async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  app.use(
    cors({
      origin: '*',
    })
  );
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  server.applyMiddleware({ app, path: '/api' });
  httpServer.listen({ port: 4000 });
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers);
