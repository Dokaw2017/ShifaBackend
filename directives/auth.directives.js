import pkg from "graphql";
const { defaultFieldResolver } = pkg;
import pkgg from "apollo-server-express";
const { ApolloError, SchemaDirectiveVisitor } = pkgg;
export class isAuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;

    field.resolve = async (...args) => {
      let [_, {}, { user, isAuth }] = args;
      if (isAuth) {
        const result = await resolve.apply(this, args);
        return result;
      } else {
        throw new ApolloError("You must be authenticated");
      }
    };
  }
}
