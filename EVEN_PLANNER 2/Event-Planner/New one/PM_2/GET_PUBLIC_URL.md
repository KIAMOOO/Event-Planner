# 🌐 Make Your Event Planner Public - 3 Easy Options

Your friend is right! The app only works on your local network. Here are 3 ways to make it public:

## 🚀 Option 1: Use ngrok (Easiest)

### Step 1: Install ngrok
```bash
# Download ngrok
curl -o ngrok.zip https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-darwin-amd64.zip
unzip ngrok.zip
sudo mv ngrok /usr/local/bin/
rm ngrok.zip
```

### Step 2: Start your app
```bash
cd "/Users/idosorynbek/Desktop/New one/PM_2 тАФfinal"
python3 app.py
```

### Step 3: In another terminal, create public tunnel
```bash
ngrok http 5000
```

### Step 4: Share the ngrok URL
You'll get a URL like: `https://abc123.ngrok.io`
Share this with your friend!

---

## 🌐 Option 2: Use localtunnel (Alternative)

### Step 1: Install Node.js and localtunnel
```bash
# Install Node.js first (if not installed)
brew install node

# Install localtunnel
npm install -g localtunnel
```

### Step 2: Start your app
```bash
cd "/Users/idosorynbek/Desktop/New one/PM_2 тАФfinal"
python3 app.py
```

### Step 3: Create public tunnel
```bash
lt --port 5000
```

### Step 4: Share the localtunnel URL
You'll get a URL like: `https://abc123.loca.lt`
Share this with your friend!

---

## ☁️ Option 3: Deploy to Cloud (Permanent)

### Deploy to Railway (Free)
1. Go to https://railway.app
2. Connect your GitHub
3. Upload your project
4. Get a permanent URL like: `https://your-app.railway.app`

### Deploy to Render (Free)
1. Go to https://render.com
2. Create new Web Service
3. Connect your GitHub
4. Get a permanent URL like: `https://your-app.onrender.com`

---

## 🎯 Quick Start (Recommended)

**Use Option 1 (ngrok) - it's the fastest!**

1. Download ngrok: https://ngrok.com/download
2. Start your app: `python3 app.py`
3. Run: `ngrok http 5000`
4. Share the ngrok URL with your friend!

Your friend will be able to access it from anywhere in the world! 🌍
