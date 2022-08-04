const graphql = require("graphql");
const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = graphql;

const TodoType = new GraphQLObjectType({
  name: "Todo",
  type: "Query",
  fields: {
    todoid: { type: graphql.GraphQLID },
    workdesc: { type: graphql.GraphQLString },
    checking: { type: graphql.GraphQLBoolean },
  },
});
// const TodosType = new GraphQLObjectType({
//   name: "Todos",
//   type: "Query",
//   fields: {
//     alltodos: {
//       type: new GraphQLList(TodoType),
//     },
//   },
// });

exports.TodoType = TodoType;
// exports.TodosType = TodosType;
