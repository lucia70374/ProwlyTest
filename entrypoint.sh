#!/bin/bash
# Exit immediately if a command exits with a non-zero status
set -e

# Fix permissions on the wait-for-it.sh script
chmod +x ./wait-for-it.sh

# Execute the wait-for-it.sh script, then run the command passed to the container
./wait-for-it.sh app:3000 --timeout=60 --strict -- "$@"
