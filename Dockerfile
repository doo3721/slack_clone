FROM node:latest

RUN set -eux

COPY slack_app/ /var/app

WORKDIR /var/app

# RUN apt update

# RUN npm install -g @nestjs/cli@latest

# RUN nest new app --package-manager npm --skip-git\

RUN npm install

# RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

# CMD ["node", "dist/main.js"]
