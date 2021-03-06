# Setup enviroment
FROM node:14.15.4
RUN apt-get update

# Build code base
COPY . .
RUN npm ci
RUN npm run build

# Setup container for deployment
ENV TZ=Europe/Reykjavik
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
ENV NODE_ENV=production
USER root

CMD [ "npm", "start" ]