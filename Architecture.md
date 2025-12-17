# Architecture Documentation

## 1. Architectural Style

The application follows a **monolithic client-server architecture** with a web-based interface.

- **Client**: Web browser (HTML, CSS, JavaScript)
- **Server**: Flask web server (Python)
- **Database**: SQLite (file-based database)
- **Communication**: HTTP requests/responses
- **Template Engine**: Jinja2 (server-side rendering)

This style is simple and suitable for MVP. All components are in one application, making it easy to develop and deploy.

## 2. Components

### Frontend Components
- **Templates** (`templates/`): HTML pages with Jinja2 syntax
- **Static Assets** (`static/`): CSS, JavaScript, images
- **Forms**: WTForms for user input validation

### Backend Components
- **Routes** (`app.py`): Request handlers for all endpoints
- **Models** (`app.py`): Database models (User, Venue, Booking, etc.)
- **Business Logic**: Helper functions for data processing
- **Database Layer**: SQLAlchemy ORM

### Data Storage
- **SQLite Database**: Structured data (users, bookings, venues, etc.)
- **CSV Files**: External data (hosts, musicians, show programs)

## 3. System Diagram

```
┌─────────────┐
│   Browser   │
│  (Client)   │
└──────┬──────┘
       │ HTTP Requests
       │ (GET, POST)
       ▼
┌─────────────────────────────────────┐
│         Flask Application           │
│  ┌──────────┐  ┌──────────────┐    │
│  │  Routes  │─▶│   Models     │    │
│  │ Handlers │  │  (SQLAlchemy)│    │
│  └──────────┘  └──────┬───────┘    │
│         │              │            │
│  ┌──────▼──────┐      │            │
│  │   Forms     │      │            │
│  │ (Validation)│      │            │
│  └─────────────┘      │            │
└─────────────┬─────────┼────────────┘
              │         │
              │         ▼
              │    ┌──────────┐
              │    │ SQLite   │
              │    │ Database │
              │    └──────────┘
              │
              ▼
         ┌──────────┐
         │ CSV Files│
         │ (Hosts,  │
         │ Musicians│
         │ Programs)│
         └──────────┘
```

## 4. Data Flow

### Booking Flow
1. User browses venues → Route fetches venues from database
2. User selects venue → Route displays venue details
3. User fills booking form → Route validates input
4. User submits → Route creates Booking record in database
5. User pays deposit → Route updates booking status
6. User creates invitation → Route generates unique token and saves Invitation

### RSVP Flow
1. Guest clicks invitation link → Route finds Invitation by token
2. Guest fills RSVP form → Route validates input
3. Guest submits → Route creates InvitedGuest record
4. Guest sees confirmation → Route displays confirmation page

### Authentication Flow
1. User enters phone/password → Route normalizes phone number
2. Route queries User table → Finds user by phone
3. Route checks password hash → Compares with stored hash
4. If valid → Session is created with user_id
5. User is redirected to profile

## 5. Database Schema

### Tables and Relationships

**User**
- id (PK)
- name
- email (unique)
- phone (unique)
- password (hashed)
- created_at

**Venue**
- id (PK)
- name
- district
- address
- address_link
- description
- capacity_min
- capacity_max
- price_per_person
- phone
- email
- image_url
- event_types

**Hall**
- id (PK)
- venue_id (FK → Venue)
- name
- capacity
- description
- image_url

**MenuItem**
- id (PK)
- venue_id (FK → Venue)
- name
- category
- price
- description

**Booking**
- id (PK)
- venue_id (FK → Venue)
- user_id (FK → User, nullable)
- client_name
- client_email
- client_phone
- event_type
- event_date
- guest_count
- selected_hall_id (FK → Hall)
- special_requests
- total_amount
- deposit_paid
- status (pending/confirmed/cancelled)
- created_at

**Guest**
- id (PK)
- booking_id (FK → Booking)
- name
- email
- phone
- rsvp_status

**Invitation**
- id (PK)
- booking_id (FK → Booking)
- title
- message
- event_time
- dress_code
- additional_info
- unique_token (unique)
- created_at

**InvitedGuest**
- id (PK)
- invitation_id (FK → Invitation)
- name
- email
- phone
- plus_one
- rsvp_status
- dietary_restrictions
- message_to_host
- responded_at
- created_at

**Feedback**
- id (PK)
- name
- email
- feedback_type
- rating
- recommendation
- message
- venue
- allow_contact
- created_at
- status

## 6. Technology Decisions

### Flask
- **Why**: Simple, lightweight, good for MVP
- **Benefit**: Fast development, good documentation, flexible

### SQLite
- **Why**: No setup needed, file-based, good for MVP
- **Benefit**: Easy deployment, no separate database server
- **Future**: Can migrate to PostgreSQL for production

### SQLAlchemy ORM
- **Why**: Object-relational mapping makes database work easier
- **Benefit**: Type safety, migrations support, easy queries

### CSV Files for External Data
- **Why**: Quick way to load hosts/musicians/programs data
- **Benefit**: Easy to update without code changes
- **Future**: Can migrate to database tables

### Server-Side Rendering (Jinja2)
- **Why**: Simple for MVP, no separate frontend needed
- **Benefit**: Fast page loads, SEO friendly
- **Future**: Can add API layer for mobile app

### Werkzeug Password Hashing
- **Why**: Built-in Flask security feature
- **Benefit**: Secure password storage, industry standard

## 7. Future Extensions

### Short Term
- Migrate CSV data to database tables
- Add email notifications for bookings
- Implement real payment gateway
- Add admin dashboard

### Medium Term
- Add authentication tokens (JWT) for API
- Create REST API for mobile app
- Add file upload for venue images
- Implement caching for better performance

### Long Term
- Migrate to PostgreSQL
- Add microservices for different features
- Implement real-time notifications (WebSockets)
- Add analytics and reporting
- Multi-language support
- Mobile app (iOS/Android)

