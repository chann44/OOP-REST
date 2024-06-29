FROM node:18

ARG SETTINGS

ENV API = /home/app/api 
ENV SETTINGS=${SETTINGS}

RUN mkdir -p ${API}

WORKDIR ${API}

EXPOSE 8000

COPY package.json ./

RUN ls
RUN npm install

COPY . .
RUN npx prisma generate


CMD ["npm", "run", "dev"]