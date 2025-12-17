# Event Planner MVP

## Overview

Event Planner is a web application that helps people plan and organize events. Users can find and book venues, hosts, musicians, and show programs for their events. The platform also helps manage guest lists, RSVPs, and invitations.

## Problem and Solution

Planning an event is hard. People need to find venues, entertainment, and manage guests. This platform solves this by bringing everything together in one place. Users can search, compare, and book services easily.

## Target Users

- People planning weddings, birthdays, or corporate events
- Event organizers
- Anyone who needs to book event services

## Tech Stack

- **Backend**: Flask (Python)
- **Database**: SQLite (with SQLAlchemy ORM)
- **Frontend**: HTML, CSS, JavaScript, Jinja2 templates
- **Forms**: Flask-WTF, WTForms
- **Other**: OpenPyXL (Excel exports), Werkzeug (password hashing)

## Project Structure

```
Event/
├── PM_2/
│   ├── app.py                 # Main application file
│   ├── requirements.txt       # Python dependencies
│   ├── Procfile              # Deployment configuration
│   ├── instance/             # Database and CSV data files
│   │   ├── toy_planner.db    # SQLite database
│   │   ├── hosts.csv         # Host data
│   │   ├── musicians.csv     # Musician data
│   │   └── show_programs.csv # Show program data
│   ├── static/               # Static files
│   │   ├── css/              # Stylesheets
│   │   ├── js/               # JavaScript files
│   │   ├── images/           # Image assets
│   │   └── uploads/          # Uploaded files
│   └── templates/            # HTML templates
├── README.md                 # This file
├── PRD.md                    # Product Requirements Document
├── Architecture.md           # Architecture documentation
├── API.md                    # API documentation
├── User_Stories.md           # User stories
└── .env.example              # Environment variables template
```

## How to Run

### System Requirements

- Python 3.8 or higher
- pip (Python package manager)

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd PM_2
   ```

2. **Create virtual environment** (recommended)
   ```bash
   python -m venv venv
   # On Windows:
   venv\Scripts\activate
   # On Mac/Linux:
   source venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   cd PM_2
   pip install -r requirements.txt
   ```

4. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Update values if needed (SECRET_KEY, DATABASE_URL, etc.)

5. **Initialize database**
   - The database will be created automatically when you run the app
   - Make sure CSV files are in `PM_2/instance/` folder

6. **Run the application**
   ```bash
   python app.py
   ```

7. **Access the application**
   - Open browser and go to: `http://localhost:5000`

## How to Run Tests

Currently, tests are not implemented. Future test commands will be:
```bash
# Unit tests
pytest tests/

# Coverage report
pytest --cov=PM_2 tests/
```

## Additional Documents

- [PRD.md](PRD.md) - Product requirements and features
- [Architecture.md](Architecture.md) - System design and architecture
- [API.md](API.md) - API endpoints documentation
- [User_Stories.md](User_Stories.md) - User stories and acceptance criteria
- [User_Feedback_Survey.md](User_Feedback_Survey.md) - User feedback survey questions
- [PM_2/.env.example](PM_2/.env.example) - Environment variables template


