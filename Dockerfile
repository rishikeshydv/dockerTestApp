FROM node:20
WORKDIR /Users/rishikeshyadav/Desktop/dockerTestApp
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm","start"]

