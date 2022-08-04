const { db } = require("../pgAdaptor");
const { GraphQLObjectType, GraphQLID } = require("graphql");
const { UserType, ProjectType, TodosType } = require("./types");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  type: "Query",
  fields: {
    Todo: {
      type: TodosType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        const query = `SELECT * FROM todos WHERE todoId=$1`;
        const values = [args.id];

        return db
          .one(query, values)
          .then((res) => res)
          .catch((err) => err);
      },
    }
  },
});

exports.query = RootQuery;