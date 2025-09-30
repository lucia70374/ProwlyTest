#!/bin/bash
set -e

# Wait for the app service to be available on port 3000
# -t 60000 sets a 60-second timeout in milliseconds
echo "Waiting for app service on app:3000..."
npx wait-port --host app --port 3000 --timeout 60000

echo "App service is available. Starting tests..."
# Execute the command passed to the container
npm run test:cucumber
