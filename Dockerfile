# Use an official Playwright image with browsers pre-installed.
FROM mcr.microsoft.com/playwright:v1.55.1-noble

# Set the working directory for the application inside the container.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container.
COPY package*.json ./

# Install project dependencies.
RUN npm ci

# Copy the entire project into the container.
COPY . .

# Recommended configuration for running in Docker
ENV PLAYWRIGHT_BROWSERS_PATH=/ms-playwright
ENV NODE_OPTIONS=--max-old-space-size=4096

# Use only one CMD instruction for running your tests.
CMD ["npm", "run", "test:cucumber"]
