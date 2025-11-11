#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Public Event Planner Launcher
This script starts your Event Planner with public access via ngrok
"""

import subprocess
import sys
import io
import time
import webbrowser

# Set UTF-8 encoding for Windows console
if sys.platform == 'win32':
    try:
        sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
        sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8')
    except:
        pass

try:
    from pyngrok import ngrok
    PYNGROK_AVAILABLE = True
except ImportError:
    PYNGROK_AVAILABLE = False

def install_pyngrok():
    """Install pyngrok if not already installed"""
    if PYNGROK_AVAILABLE:
        print("OK pyngrok is already installed")
        return True
    
    print("Installing pyngrok...")
    try:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "pyngrok"])
        print("OK pyngrok installed successfully")
        # Try to import it now
        global ngrok
        from pyngrok import ngrok
        return True
    except Exception as e:
        print(f"X Failed to install pyngrok: {e}")
        return False

def start_app():
    """Start the Flask app with public access"""
    print(">> Starting Event Planner with PUBLIC access...")
    print("=" * 50)
    
    # Install pyngrok if needed
    if not install_pyngrok():
        print("X Cannot start without pyngrok. Please install manually:")
        print("   pip install pyngrok")
        return
    
    try:
        # Create public tunnel
        print(">> Creating public tunnel...")
        public_url = ngrok.connect(5000)
        
        print(f"\n*** SUCCESS! Your Event Planner is now PUBLIC! ***")
        print("=" * 50)
        print(f"PUBLIC URL: {public_url}")
        print(f"Share this with ANYONE, ANYWHERE!")
        print(f"Works on all devices and networks")
        print(f"Press CTRL+C to stop")
        print("=" * 50)
        
        # Open in browser
        try:
            webbrowser.open(str(public_url))
            print(">> Opened in your browser!")
        except:
            pass
        
        # Start Flask app
        print("\n>> Starting Flask app...")
        from app import app, create_tables
        create_tables()
        app.run(debug=False, host='0.0.0.0', port=5000)
        
    except KeyboardInterrupt:
        print("\n>> Stopping Event Planner...")
        try:
            ngrok.disconnect(public_url)
        except:
            pass
        print("OK Stopped successfully!")
    except Exception as e:
        print(f"X Error: {e}")
        print(">> Try running: pip install pyngrok")

if __name__ == "__main__":
    start_app()
