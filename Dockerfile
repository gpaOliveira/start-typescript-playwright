FROM mcr.microsoft.com/playwright:v1.57.0-noble AS builder

ENV CI=true

WORKDIR /app

# Copy package files first for better layer caching
COPY package*.json ./

# Install ALL dependencies
RUN npm ci

# Copy the rest of the application files
COPY . /app

######## Stage 2: Final build stage just to execute tests ########
FROM builder

CMD ["npm", "test"]