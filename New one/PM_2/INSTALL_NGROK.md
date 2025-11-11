# How to Make Your Event Planner Publicly Accessible

You have **3 easy options** to share your Event Planner with anyone online:

---

## ⭐ **Option 1: Use the Automated Script (EASIEST!)**

### Just double-click this file:
```
START_PUBLIC.bat
```

**What it does:**
- Automatically installs `pyngrok` (Python wrapper for ngrok)
- Creates a public URL for your app
- Opens your app in the browser
- Shows you the PUBLIC URL to share

**Share the URL it gives you** - it looks like: `https://abc123.ngrok-free.app`

---

## 🔧 **Option 2: Install ngrok manually**

### Step 1: Download ngrok
1. Go to: https://ngrok.com/download
2. Download the **Windows version** (ZIP file)
3. Extract the ZIP file
4. You'll get `ngrok.exe`

### Step 2: Add ngrok to your system
**Option A: Quick (works in current terminal only)**
- Put `ngrok.exe` in your `PM_2` folder

**Option B: Permanent (works everywhere)**
- Move `ngrok.exe` to: `C:\Windows\System32\`
- Or add the folder containing `ngrok.exe` to your PATH

### Step 3: Start your app
1. Open PowerShell
2. Navigate to your project folder
3. Run: `python app.py`

### Step 4: Create public tunnel (in another PowerShell window)
```powershell
ngrok http 5000
```

### Step 5: Share the URL
- ngrok will show a URL like: `https://abc123.ngrok-free.app`
- Share this URL with your friend!

---

## 🌐 **Option 3: Use localtunnel (Alternative)**

### Install Node.js first
1. Download from: https://nodejs.org/
2. Install it

### Install localtunnel
```powershell
npm install -g localtunnel
```

### Start your app
```powershell
python app.py
```

### Create public tunnel (in another window)
```powershell
npx localtunnel --port 5000
```

---

## 🚀 **Quick Start (Recommended)**

The **easiest way** is to use **Option 1**:

1. Double-click `START_PUBLIC.bat`
2. Wait for it to show you the PUBLIC URL
3. Share that URL with your friend
4. Done! 🎉

Your friend can access it from anywhere in the world!

---

## 📝 **Troubleshooting**

### If START_PUBLIC.bat doesn't work:
```powershell
python -m pip install pyngrok
python start_public.py
```

### If you see "ngrok not found":
- Use Option 1 (automated script) instead
- Or follow Option 2 Step-by-Step

### If your friend gets "Unable to connect":
- Make sure your app is still running
- Check the URL is correct (it should start with `https://`)
- ngrok free tier has session limits - restart if needed

---

## ❓ **Need Help?**

### Current setup:
- Your app runs on: `http://localhost:5000` (local only)
- Network URL: `http://192.168.0.16:5000` (your WiFi only)
- PUBLIC URL: You need ngrok or localtunnel for this

### To test if it works:
1. Start your app
2. Open the ngrok/localtunnel URL in YOUR browser
3. If it works for you, it will work for your friend!

