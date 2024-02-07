FROM node:18.10.0-alpine3.15

RUN apk update && apk upgrade && apk add git

ARG WORK_DIR=/frontend
ENV PATH ${WORK_DIR}/node_modules/.bin:$PATH

RUN mkdir ${WORK_DIR}
WORKDIR ${WORK_DIR}

# USER node

COPY package.json ${WORK_DIR}
COPY package-lock.json ${WORK_DIR}

# RUN npm install @angular/cli
RUN npm install

COPY . ${WORK_DIR}

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]