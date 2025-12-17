# Product Requirements Document (PRD)

## 1. Product Goal and Problem Statement

**Goal**: Create an easy-to-use platform for event planning that connects users with venues, hosts, musicians, and show programs.

**Problem**: Planning events is complicated. People struggle to find and book multiple services (venues, entertainment) and manage guest lists. Current solutions are scattered across different platforms.

**Solution**: A single platform where users can search, compare, and book all event services. The platform also handles invitations, RSVPs, and guest management.

## 2. Target Audience

**Primary Users**:
- People planning personal events (weddings, birthdays, anniversaries)
- Corporate event organizers
- Anyone booking event services

**User Roles**:
- **Event Organizer**: Books services and manages events
- **Guest**: Receives invitations and responds to RSVPs

## 3. User Scenarios

1. **Booking a Venue**
   - User searches venues by event type, location, price, and capacity
   - User views venue details and available halls
   - User books venue by filling form and making payment

2. **Booking Entertainment**
   - User browses hosts, musicians, or show programs
   - User filters by genre, city, price
   - User books and adds to existing venue booking

3. **Creating Invitations**
   - User creates invitation with event details
   - System generates unique link
   - User shares link with guests

4. **Guest RSVP**
   - Guest clicks invitation link
   - Guest fills RSVP form (name, attendance, dietary restrictions)
   - System saves response

5. **Managing Bookings**
   - User logs into profile
   - User views all bookings
   - User can cancel bookings

## 4. Functional Requirements (MVP v0.1)

### 4.1 User Management
- User registration during booking (name, email, phone, password)
- User login (phone + password)
- Password reset functionality
- User profile with booking history

### 4.2 Venue Booking
- Browse venues with filters (event type, district, guest count, price)
- View venue details (description, capacity, halls, menu items)
- Book venue (select date, hall, guest count)
- Payment processing (deposit)
- Booking confirmation

### 4.3 Entertainment Booking
- Browse hosts, musicians, show programs (from CSV data)
- Filter by genre, city, price
- Book and link to venue booking
- Add multiple services to same event

### 4.4 Invitation Management
- Create custom invitation with event details
- Generate unique invitation links
- Customize invitation (title, message, dress code, time)

### 4.5 RSVP System
- Guests access invitation via unique link
- Guests submit RSVP (attendance, plus-one, dietary restrictions)
- Host views RSVP responses

### 4.6 Feedback System
- Users submit feedback about venues/services
- Feedback includes rating, comments, recommendation
- Admin can export feedback to Excel

## 5. Non-Functional Requirements

### Performance
- Page load time < 2 seconds
- Support up to 100 concurrent users
- Database queries optimized with indexes

### Reliability
- System uptime > 95%
- Database backups recommended
- Error handling for all user actions

### Security
- Passwords stored as hashes (Werkzeug)
- Phone number normalization and validation
- SQL injection prevention (SQLAlchemy ORM)
- Secure file uploads

### Usability
- Simple, intuitive interface
- Mobile-responsive design
- Clear navigation and forms
- Helpful error messages

### Scalability
- Modular code structure
- Easy to add new features
- CSV data can be migrated to database
- Support for multiple event types

## 6. MVP Scope (Version 0.1)

### Included Features
- User registration and authentication
- Venue browsing and booking
- Host, musician, show program booking (from CSV)
- Invitation creation and sharing
- Guest RSVP functionality
- User profile and booking management
- Feedback submission
- Payment form (deposit payment)

### Out of Scope (Backlog)
- Real payment gateway integration
- Email notifications
- SMS notifications
- Calendar integration
- Social media sharing
- Vendor management panel
- Admin dashboard
- Reviews and ratings display
- Photo galleries
- Chat/messaging system
- Multi-language support

## 7. Acceptance Criteria

### AC1: User Registration
- **Given** a new user booking a venue
- **When** they fill registration form with valid data
- **Then** user account is created with hashed password
- **And** user is logged in automatically
- **And** booking is linked to user account

**Test**: Create booking with new email/phone, verify user exists in database with hashed password.

### AC2: Venue Search and Filter
- **Given** user is on venues page
- **When** they apply filters (event type, district, guest count, price)
- **Then** only matching venues are displayed
- **And** filters work together (AND logic)

**Test**: Apply multiple filters, verify results match all criteria.

### AC3: Venue Booking
- **Given** user selects a venue
- **When** they fill booking form (date, guests, hall) and submit
- **Then** booking is saved to database
- **And** booking status is "pending"
- **And** user receives confirmation page

**Test**: Complete booking flow, verify booking record in database with correct fields.

### AC4: Invitation Creation
- **Given** user has a confirmed booking
- **When** they create invitation with event details
- **Then** unique token is generated
- **And** invitation link is created: `/invitation/<token>`
- **And** invitation is linked to booking

**Test**: Create invitation, verify unique token and link work correctly.

### AC5: Guest RSVP
- **Given** guest has invitation link
- **When** they fill RSVP form and submit
- **Then** RSVP is saved to database
- **And** guest sees confirmation page
- **And** host can view RSVP in booking details

**Test**: Access invitation link, submit RSVP, verify data saved correctly.

### AC6: Password Reset
- **Given** user forgot password
- **When** they enter phone and email on forgot password page
- **Then** system verifies account exists
- **And** user can set new password
- **And** new password meets strength requirements

**Test**: Reset password flow, verify new password works for login.

### AC7: Feedback Submission
- **Given** user wants to leave feedback
- **When** they fill feedback form with rating and comments
- **Then** feedback is saved to database
- **And** user sees success message
- **And** admin can export to Excel

**Test**: Submit feedback, verify saved in database, verify Excel export works.

### AC8: Booking Cancellation
- **Given** user has active booking
- **When** they cancel booking from profile
- **Then** booking status changes to "cancelled"
- **And** cancellation is recorded

**Test**: Cancel booking, verify status update in database.

## 8. User Feedback & Validation

### Feedback Collection Methods

We collected user feedback through the following methods:

1. **Online Survey**: Users filled out a survey form on the website after using the platform
2. **Demo Sessions**: Live demonstrations were conducted where users tested features and provided real-time feedback
3. **In-App Feedback Form**: Users could submit feedback directly through the feedback page on the website

### Survey Questions

The feedback survey includes questions about:

- Overall user experience rating (1-5 stars)
- Ease of use for finding and booking venues
- Most useful features
- Website design and interface rating
- Missing features users would like to see
- Likelihood to recommend the platform
- Satisfaction with booking process
- Usage frequency (how often users plan events)
- Open-ended comments and suggestions

For detailed survey questions, see [User_Feedback_Survey.md](User_Feedback_Survey.md).

### Feedback Analysis

Feedback collected through surveys and demo sessions helps us:
- Identify usability issues
- Understand feature priorities
- Improve user experience
- Plan future enhancements
- Validate product-market fit

