const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const http = require('http');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const typeDefs = gql`
  type Query {
    items: [Item!]!
  }

  type Mutation {
    deleteItem(id: ID!): Item
    addItem(title: String!, description: String!, numberOfItems: Int!, isComplete: Boolean): Item
    updateItem(
      id: ID!
      title: String!
      description: String!
      numberOfItems: Int!
      isComplete: Boolean
    ): Item
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
    items: () => prisma.item.findMany(),
  },
  Mutation: {
    addItem: (parent, args, context, info) =>
      prisma.item.create({
        data: {
          title: args.title,
          description: args.description,
          numberOfItems: args.numberOfItems,
          isComplete: args.isComplete,
        },
      }),

    updateItem: (parent, args, context, info) =>
      prisma.item.update({
        where: {
          id: parseInt(args.id),
        },
        data: {
          title: args.title,
          description: args.description,
          numberOfItems: args.numberOfItems,
          isComplete: args.isComplete,
        },
      }),
    deleteItem: (parent, args, context, info) =>
      prisma.item.delete({
        where: {
          id: parseInt(args.id),
        },
      }),
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
