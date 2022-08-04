const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

const TodosType = new GraphQLObjectType({
  name: "Todos",
  type: "Query",
  fields: {
    todoid: { type: graphql.GraphQLID },
    workdesc: { type: graphql.GraphQLString },
    checking: { type: graphql.GraphQLBoolean },
  },
});

exports.TodosType = TodosType;
