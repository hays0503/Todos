const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

const TodosType = new GraphQLObjectType({
  name: "Todos",
  type: "Query",
  fields: {
    todoId: { type: graphql.GraphQLID },
    workDesc: { type: graphql.GraphQLString },
    checking: { type: graphql.GraphQLBoolean },
  },
});

exports.TodosType = TodosType;
