const { db } = require("../pgAdaptor");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList,
} = require("graphql");
const { TodoType} = require("./types");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  type: "Query",
  fields: {
    Todo: {
      type: TodoType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        const query = `SELECT todoid, workdesc, checking FROM public.todos WHERE todoid=$1`;
        const values = [args.id];

        return db
          .one(query, values)
          .then((res) => res)
          .catch((err) => err);
      },
    },
    Todos: {
      type: new GraphQLList(TodoType),
      resolve() {
        const query = `SELECT * FROM public.todos`;
        return db
          .manyOrNone(query)
          .then((res) => {
            console.log(res);
            return res[1];
          })
          .catch((err) => err);
      },
    },
  },
});

exports.query = RootQuery;
