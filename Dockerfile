FROM node:latest
LABEL maintainer='workingxue@gmail.com'
# RUN apk add --update nodejs nodejs-npm
WORKDIR /app
COPY . .
# COPY . /src
WORKDIR /app
RUN yarn install --production &&   yarn install parcel
EXPOSE 1234
ENTRYPOINT ["parcel","./index.html"]
