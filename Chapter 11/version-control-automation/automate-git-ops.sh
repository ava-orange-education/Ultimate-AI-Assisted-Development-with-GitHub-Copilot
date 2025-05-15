# Prompt: Automate common Git operations using a shell script
#!/bin/bash

echo "Enter commit message:"
read msg

git add .
git commit -m "$msg"
git pull origin main --rebase
git push origin main

echo "Git operations completed successfully."
