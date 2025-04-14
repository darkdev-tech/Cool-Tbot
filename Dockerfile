# Build the image
docker build -t cool_kid_bot .

# Run the bot
docker run -e BOT_TOKEN=your_token_here cool_kid_bot
