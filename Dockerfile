FROM node
WORKDIR /home/src/app
COPY . .
RUN chmod -R +777 /home/src/app
RUN chown -R node:node /home/src/app
RUN cd /home/src/app && npm install
EXPOSE 3000
ENTRYPOINT ["npm", "start"]