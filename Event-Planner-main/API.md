# API Documentation

This document describes all API endpoints in the Event Planner application.

## Authentication

Most endpoints use session-based authentication. Users log in through the `/profile` route, and their session is stored server-side.

**Note**: This MVP uses server-side sessions. Future versions may use JWT tokens.

## Endpoints

### 1. User Registration and Login

#### Register (via booking form)
**Endpoint**: `POST /book/<int:venue_id>`

Creates user account during venue booking process.

**Request Body**:
```json
{
  "client_name": "John Doe",
  "client_email": "john@example.com",
  "client_phone": "+77001234567",
  "client_password": "SecurePass123!",
  "event_type": "wedding",
  "event_date": "2024-06-15",
  "guest_count": 100,
  "selected_hall_id": 1,
  "special_requests": "Need parking"
}
```

**Response**: Redirects to payment confirmation page

**Status Codes**:
- 200: Success
- 400: Validation error
- 500: Server error

---

#### Login
**Endpoint**: `POST /profile`

Logs in user using phone and password.

**Request Body**:
```json
{
  "phone": "+77001234567",
  "password": "SecurePass123!"
}
```

**Response**: Redirects to user profile page

**Status Codes**:
- 200: Success
- 401: Invalid credentials

---

#### Logout
**Endpoint**: `GET /logout`

Logs out current user and clears session.

**Response**: Redirects to home page

---

#### Forgot Password
**Endpoint**: `POST /forgot-password`

Verifies user account for password reset.

**Request Body**:
```json
{
  "phone": "+77001234567",
  "email": "john@example.com"
}
```

**Response**: Redirects to reset password page if account exists

---

#### Reset Password
**Endpoint**: `POST /reset-password`

Sets new password for user.

**Request Body**:
```json
{
  "new_password": "NewSecurePass123!",
  "confirm_password": "NewSecurePass123!"
}
```

**Response**: Redirects to login page

---

### 2. Venues

#### List Venues
**Endpoint**: `GET /venues`

Returns list of all venues with optional filters.

**Query Parameters**:
- `event_type` (optional): Filter by event type
- `district` (optional): Filter by district
- `guest_count` (optional): Filter by minimum capacity
- `max_price` (optional): Filter by maximum price per person

**Example**: `/venues?event_type=wedding&district=Bostandyk&max_price=5000`

**Response**: HTML page with venue list

---

#### Get Venue Details
**Endpoint**: `GET /venue/<int:venue_id>`

Returns detailed information about a specific venue.

**Response**: HTML page with venue details, halls, menu items

---

#### Book Venue
**Endpoint**: `POST /book/<int:venue_id>`

Creates a new venue booking.

**Request Body**:
```json
{
  "client_name": "John Doe",
  "client_email": "john@example.com",
  "client_phone": "+77001234567",
  "client_password": "SecurePass123!",
  "event_type": "wedding",
  "event_date": "2024-06-15",
  "guest_count": 100,
  "selected_hall_id": 1,
  "special_requests": "Need parking"
}
```

**Response**: Redirects to payment page

**Status Codes**:
- 200: Booking created
- 400: Validation error

---

### 3. Hosts

#### List Hosts
**Endpoint**: `GET /hosts`

Returns list of all hosts with optional filters.

**Query Parameters**:
- `language` (optional): Filter by language
- `city` (optional): Filter by city
- `max_price` (optional): Filter by maximum price

**Response**: HTML page with host list

---

#### Get Host Details
**Endpoint**: `GET /host/<id>`

Returns detailed information about a specific host.

**Response**: HTML page with host details

---

#### Book Host
**Endpoint**: `POST /book_host/<id>`

Books a host and links to existing venue booking.

**Request Body**:
```json
{
  "client_name": "John Doe",
  "client_email": "john@example.com",
  "client_phone": "+77001234567",
  "client_password": "SecurePass123!",
  "booking_id": 1,
  "selected_date": "2024-06-15"
}
```

**Response**: Redirects to confirmation page

---

### 4. Musicians

#### List Musicians
**Endpoint**: `GET /musicians`

Returns list of all musicians with optional filters.

**Query Parameters**:
- `genre` (optional): Filter by music genre
- `city` (optional): Filter by city
- `max_price` (optional): Filter by maximum price

**Response**: HTML page with musician list

---

#### Get Musician Details
**Endpoint**: `GET /musician/<id>`

Returns detailed information about a specific musician.

**Response**: HTML page with musician details

---

#### Book Musician
**Endpoint**: `POST /book_musician/<id>`

Books a musician and links to existing venue booking.

**Request Body**:
```json
{
  "client_name": "John Doe",
  "client_email": "john@example.com",
  "client_phone": "+77001234567",
  "client_password": "SecurePass123!",
  "booking_id": 1,
  "selected_date": "2024-06-15"
}
```

**Response**: Redirects to confirmation page

---

### 5. Show Programs

#### List Show Programs
**Endpoint**: `GET /show-programs`

Returns list of all show programs with optional filters.

**Query Parameters**:
- `program_type` (optional): Filter by program type
- `city` (optional): Filter by city
- `max_price` (optional): Filter by maximum price

**Response**: HTML page with show program list

---

#### Get Show Program Details
**Endpoint**: `GET /show-program/<id>`

Returns detailed information about a specific show program.

**Response**: HTML page with show program details

---

#### Book Show Program
**Endpoint**: `POST /book_show_program/<id>`

Books a show program and links to existing venue booking.

**Request Body**:
```json
{
  "client_name": "John Doe",
  "client_email": "john@example.com",
  "client_phone": "+77001234567",
  "client_password": "SecurePass123!",
  "booking_id": 1,
  "selected_date": "2024-06-15"
}
```

**Response**: Redirects to confirmation page

---

### 6. Bookings

#### Get Booking Confirmation
**Endpoint**: `GET /booking/<int:booking_id>/confirmation`

Returns booking confirmation details.

**Response**: HTML page with booking information

---

#### Cancel Booking
**Endpoint**: `POST /booking/<int:booking_id>/cancel`

Cancels a booking.

**Response**: Redirects to user profile

**Status Codes**:
- 200: Booking cancelled
- 404: Booking not found

---

### 7. Invitations

#### Create Invitation
**Endpoint**: `POST /booking/<int:booking_id>/create-invitation`

Creates an invitation for a booking.

**Request Body**:
```json
{
  "title": "Wedding of John & Jane",
  "message": "You are invited to our wedding!",
  "event_time": "18:00",
  "dress_code": "Formal attire",
  "additional_info": "Parking available"
}
```

**Response**: Redirects to invitation preview with unique link

---

#### View Invitation
**Endpoint**: `GET /invitation/<token>`

Displays invitation page for guests.

**Response**: HTML page with invitation details and RSVP form

---

### 8. RSVP

#### Submit RSVP (via invitation link)
**Endpoint**: `POST /rsvp/<token>`

Submits RSVP response for an invitation.

**Request Body**:
```json
{
  "name": "Guest Name",
  "email": "guest@example.com",
  "phone": "+77001234567",
  "plus_one": 1,
  "rsvp_status": "attending",
  "dietary_restrictions": "Vegetarian",
  "message_to_host": "Looking forward to it!"
}
```

**Response**: Redirects to RSVP confirmation page

---

#### RSVP Confirmation
**Endpoint**: `GET /rsvp/<token>/confirmation`

Shows confirmation page after RSVP submission.

**Response**: HTML page with thank you message

---

### 9. Profile

#### View Profile
**Endpoint**: `GET /profile/<int:user_id>`

Returns user profile with booking history.

**Response**: HTML page with user information and bookings

---

### 10. Feedback

#### Submit Feedback
**Endpoint**: `POST /submit_feedback`

Submits user feedback.

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "feedback_type": "venue",
  "rating": 5,
  "recommendation": "yes",
  "message": "Great service!",
  "venue": "Venue Name",
  "allow_contact": true
}
```

**Response**: Redirects to feedback success page

---

#### Download Feedback Excel
**Endpoint**: `GET /download_feedback_excel`

Downloads all feedback as Excel file.

**Response**: Excel file download

---

### 11. Payment

#### Payment Confirmation
**Endpoint**: `POST /payment/confirmation`

Processes payment and updates booking status.

**Request Body**:
```json
{
  "card_number": "1234567890123456",
  "card_holder": "John Doe",
  "expiry_month": "12",
  "expiry_year": "2025",
  "cvv": "123",
  "billing_address": "123 Main St, City",
  "agree_terms": true
}
```

**Response**: Redirects to booking confirmation page

---

## Error Codes

- **200 OK**: Request successful
- **400 Bad Request**: Invalid input data or validation error
- **401 Unauthorized**: Authentication required or invalid credentials
- **404 Not Found**: Resource not found
- **500 Internal Server Error**: Server error

## Response Format

Most endpoints return HTML pages. Future API version may return JSON:

```json
{
  "success": true,
  "data": { ... },
  "message": "Operation successful"
}
```

Error response format:
```json
{
  "success": false,
  "error": "Error message",
  "code": 400
}
```

