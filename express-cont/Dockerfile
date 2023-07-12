FROM node:16
WORKDIR /express
RUN npm install nodemon -g
COPY ./ ./
RUN yarn
CMD [ "yarn", "start" ]