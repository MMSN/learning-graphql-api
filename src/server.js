const { ApolloServer, gql } = require('apollo-server')
//const { importSchema } = require('graphql-import')
//import { typesUsers, users } from '../data/db'
const Product = require('./resolvers/index.js')
const User = require('./resolvers/index.js')
const Query = require('./resolvers/index.js')

const resolvers = [Product, User, Query]

const typeDefs = gql`
  scalar Date

  type Product {
    name: String!
    price: Float!
    discount: Float
    value: Float
  }

  type Query {
    productOn: Product
    ola: String
    dataCertaString: String
    dataCerta: Date
    userOn: User
    numbersList: [Int!]!
    getUsers: [User]
    getUser(id: ID): User
    getTypes: [Type]
    getType(id: ID): Type
  }

  type Type {
    id: ID!
    name: String!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    idade: Int
    salario: Float
    vip: Boolean
    type_id: Type
  }
`
const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`)
})