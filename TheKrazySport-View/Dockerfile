# stage 1
FROM node:latest as node
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install

# stage 2
FROM nginx:latest
COPY --from=node /usr/local/app/dist/TheKrazySport-View /usr/share/nginx/html
