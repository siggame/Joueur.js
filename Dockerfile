FROM siggame/joueur:js-onbuild as build

FROM node:alpine

WORKDIR /client
COPY --from=build /usr/src/client /client

ENTRYPOINT ["node", "main.js", GAME_NAME]
