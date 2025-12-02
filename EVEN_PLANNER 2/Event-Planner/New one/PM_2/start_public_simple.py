#!/usr/bin/env python3
"""
Simple Public Event Planner Launcher
Uses a simple HTTP tunnel service
"""

import subprocess
import sys
import time
import webbrowser
import requests
import threading

def install_requests():
    """Install requests if not already installed"""
    try:
        import requests
        return True
    except ImportError:
        print("📦 Installing requests...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", "requests"])
        return True

def start_app():
    """Start the Flask app"""
    print("🚀 Starting Event Planner...")
    print("=" * 50)
    
    # Install requests if needed
    if not install_requests():
        print("❌ Cannot start without requests")
        return
    
    try:
        # Start Flask app in a separate thread
        def run_flask():
            from app import app, create_tables
            create_tables()
            app.run(debug=False, host='0.0.0.0', port=5000)
        
        flask_thread = threading.Thread(target=run_flask, daemon=True)
        flask_thread.start()
        
        # Wait a moment for Flask to start
        time.sleep(3)
        
        print("✅ Flask app started on port 5000")
        print("🌐 Local URL: http://localhost:5000")
        print("🔗 Network URL: http://192.168.0.16:5000")
        print("\n📱 For PUBLIC access, you have several options:")
        print("1. Use ngrok: brew install ngrok && ngrok http 5000")
        print("2. Use localtunnel: npm install -g localtunnel && lt --port 5000")
        print("3. Deploy to Heroku, Railway, or Render")
        print("\n⏹️  Press CTRL+C to stop")
        
        # Keep the main thread alive
        try:
            while True:
                time.sleep(1)
        except KeyboardInterrupt:
            print("\n⏹️  Stopping Event Planner...")
            print("✅ Stopped successfully!")
        
    except Exception as e:
        print(f"❌ Error: {e}")

if __name__ == "__main__":
    start_app()
