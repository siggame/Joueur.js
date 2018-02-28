FROM siggame/joueur:js-onbuild as build

FROM siggame/joueur:js-base

COPY --from=build --chown=siggame:siggame /usr/src/client /client

