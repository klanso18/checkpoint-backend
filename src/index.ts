import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import CountryResolver from "./resolvers/country-resolver";
import datasource from "./lib/datasource";

async function main() {
  const schema = await buildSchema({
    resolvers: [CountryResolver],
  });

  const server = new ApolloServer({ schema });
  await datasource.initialize();
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`🚀  Server ready at: ${url}`);
}

main();
