# Use an official Playwright image with browsers pre-installed.
# Pick an image tag matching your Playwright version for best compatibility.
FROM mcr.microsoft.com/playwright:v1.55.1-noble

# Set the working directory for the application inside the container.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container.
# This ensures that npm install only runs when package files change,
# speeding up subsequent builds.
COPY package*.json ./

# Install project dependencies.
# Cucumber dependencies like `@cucumber/cucumber` and `@cucumber/playwright`
# will be installed via `npm ci`.
RUN npm ci

# Copy the wait-for-it.sh script into the container.
# It should be in the same directory as your Dockerfile.
COPY wait-for-it.sh ./

# Make the script executable inside the Linux-based container.
RUN chmod +x ./wait-for-it.sh

# Copy the entire project into the container.
# This includes your feature files, step definitions, and configuration.
COPY . .

# Recommended configuration for running in Docker
# The --ipc=host flag is important for Chromium to prevent crashes.
ENV PLAYWRIGHT_BROWSERS_PATH=/ms-playwright
ENV NODE_OPTIONS=--max-old-space-size=4096

# The command to run when the container starts.
# Assuming you have a script in your `package.json` to run Cucumber tests.
# For example, a script could be `"test:cucumber": "cucumber-js"`.
# The `--init` flag is also recommended for Docker containers.
CMD ["npm", "run", "test:cucumber"]
# CMD ["npx", "cucumber-js", "--init"]