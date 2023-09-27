FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
RUN apt-get update && apt-get install -y nano

CMD /bin/bash -c "npm install && npm run dev"