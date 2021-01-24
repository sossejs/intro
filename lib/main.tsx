import fastify from "fastify";
import { decorate, serverFactory } from "sosse/fastify";
import { readdirSync } from "fs";
import { basename, extname, resolve } from "path";
import fastifyStatic from "fastify-static";
import { NotFound } from "./pages/notFound";
import { decorateReply } from "./render";

export default async () => {
  const app = fastify({
    logger: {
      prettyPrint: true,
    },
    serverFactory,
  });

  decorate(app);
  decorateReply(app);

  app.register(fastifyStatic, {
    root: [
      resolve(SOSSE.libDir, "..", "public"),
      resolve(SOSSE.libDir, "..", "dist", "assets"),
    ],
  });

  for (const file of readdirSync(resolve(SOSSE.libDir, "routes"))) {
    const base = basename(file, extname(file));
    const prefix = base === "index" ? "/" : `/${base}`;
    console.log(prefix);

    app.register(
      import(`./routes/${base}.jsx`)
        .then((x) => x.default)
        .catch((err) => console.error(err)),
      {
        prefix,
      }
    );
  }

  app.setNotFoundHandler(
    (req, res) =>
      res.status(404) &&
      res.render(() => <NotFound />, {
        title: "Page not found",
      })
  );

  return async () => {
    const port = 8080;

    await app.listen(port);

    return () => app.close();
  };
};
