const graphql = require("graphql");
const db = require("../pgAdaptor").db;
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean } = graphql;
const { ProjectType, TodosType } = require("./types");

const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  type: "Mutation",
  fields: {
    addTodos: {
      type: TodosType,
      args: {
        todoid: { type: graphql.GraphQLID },
        workdesc: { type: graphql.GraphQLString },
        checking: { type: graphql.GraphQLBoolean },
      },
      resolve(parentValue, args) {
        const query = `INSERT INTO public.todos (todoid, workdesc, checking) VALUES ($1, $2, $3) RETURNING title`;
        const values = [args.todoid, args.workdesc, args.checking];

        return db
          .one(query, values)
          .then((res) => res)
          .catch((err) => err);
      },
    },
  },
});

exports.mutation = RootMutation;
