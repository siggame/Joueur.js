FROM siggame/joueur:js-onbuild as build

FROM node:alpine

COPY --from=build /usr/src/client /client
WORKDIR /client

ENTRYPOINT ["./arenaRun", "Saloon"]
