FROM node:alpine
WORKDIR src/app
ENV DB_URL bolt://10.104.1.114
ENV DB_USERNAME neo4j
ENV DB_PASSWORD root
COPY . . 
RUN npm install
EXPOSE 3000
CMD [ "npm", "run", "start" ]