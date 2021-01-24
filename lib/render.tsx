import { Head } from "./components/head";
import { createContext } from "preact";
import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

type GlobalsCtx = {
  req: FastifyRequest;
  res: FastifyReply;
  app: FastifyInstance;
};

export const globalCtx = createContext<GlobalsCtx>({} as any);

declare module "fastify" {
  interface FastifyReply {
    render: (Body, props) => string;
  }
}

export const decorateReply = (app: FastifyInstance) => {
  app.decorateReply("render", async function (Body, props) {
    const globals = { app, req: this.request, res: this } as GlobalsCtx;

    this.type("text/html");
    this.send(
      await app.ctx.render(({ Html }) => (
        <globalCtx.Provider value={globals}>
          <Html lang="en" head={<Head app={app} />} {...props}>
            <Body />
            <script {...app.ctx.useAsset("main").js!.props} />
          </Html>
        </globalCtx.Provider>
      ))
    );
  });
};
