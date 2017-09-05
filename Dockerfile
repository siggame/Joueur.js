FROM siggame/joueur:js-onbuild as build

FROM node:alpine

RUN mkdir /client
WORKDIR /client
COPY --from=build /usr/src/client /client

ENTRYPOINT ["node", "main.js", "Saloon"]
