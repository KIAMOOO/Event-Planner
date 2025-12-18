# User Stories

This document contains user stories for the Event Planner MVP. Each story follows the format: "As a [role], I want [action], so that [benefit]."

## Story 1: User Registration

**Story**: As a new user, I want to create an account when booking a venue, so that I can save my information and manage my bookings.

**Acceptance Criteria**:
- User can register by filling name, email, phone, and password during booking
- Password must be at least 8 characters with uppercase, lowercase, digit, and special character
- Email and phone must be unique
- User account is created automatically when booking is made
- User is logged in after registration

---

## Story 2: User Login

**Story**: As a registered user, I want to log in with my phone and password, so that I can access my bookings and profile.

**Acceptance Criteria**:
- User can log in on profile page using phone number and password
- Phone number is normalized (handles different formats)
- Invalid credentials show error message
- Successful login creates session and redirects to profile
- User stays logged in until logout

---

## Story 3: Password Reset

**Story**: As a user who forgot my password, I want to reset it, so that I can access my account again.

**Acceptance Criteria**:
- User can enter phone and email on forgot password page
- System verifies account exists with matching phone and email
- User can set new password on reset page
- New password must meet strength requirements
- User can log in with new password after reset

---

## Story 4: Browse Venues

**Story**: As a user, I want to browse and search venues, so that I can find a suitable place for my event.

**Acceptance Criteria**:
- User can see list of all venues on venues page
- User can filter by event type (wedding, corporate, etc.)
- User can filter by district
- User can filter by guest count (minimum capacity)
- User can filter by maximum price per person
- Filters work together (all conditions must match)
- Results update when filters change

---

## Story 5: View Venue Details

**Story**: As a user, I want to see detailed information about a venue, so that I can decide if it meets my needs.

**Acceptance Criteria**:
- User can click on venue to see details page
- Details page shows: name, address, description, capacity range, price, contact info
- Page shows available halls with capacity and descriptions
- Page shows menu items organized by category
- Page has link to venue location (2GIS)
- Page has "Book Now" button

---

## Story 6: Book a Venue

**Story**: As a user, I want to book a venue for my event, so that I can secure the location.

**Acceptance Criteria**:
- User fills booking form: name, email, phone, password, event type, date, guest count, hall
- System validates all required fields
- System checks date is in future
- System checks guest count fits selected hall capacity
- Booking is saved with status "pending"
- User is redirected to payment page
- Booking is linked to user account if logged in

---

## Story 7: Make Payment Deposit

**Story**: As a user, I want to pay a deposit for my booking, so that I can confirm my reservation.

**Acceptance Criteria**:
- User fills payment form: card number, cardholder, expiry, CVV, billing address
- User must agree to terms and conditions
- Payment form validates card number format
- After payment, booking status changes to "confirmed"
- Deposit paid flag is set to true
- User sees booking confirmation page

---

## Story 8: Browse Hosts

**Story**: As a user, I want to browse hosts for my event, so that I can find entertainment.

**Acceptance Criteria**:
- User can see list of hosts on hosts page
- User can filter by language
- User can filter by city
- User can filter by maximum price
- Each host shows: name, language, city, price
- User can click to see host details

---

## Story 9: Book a Host

**Story**: As a user, I want to book a host for my event, so that I can add entertainment to my booking.

**Acceptance Criteria**:
- User can select existing venue booking to link host
- User enters login credentials (phone and password)
- Host booking is linked to venue booking
- Booking date must match venue booking date
- User sees confirmation message
- Host appears in booking details

---

## Story 10: Browse Musicians

**Story**: As a user, I want to browse musicians for my event, so that I can find music entertainment.

**Acceptance Criteria**:
- User can see list of musicians on musicians page
- User can filter by genre
- User can filter by city
- User can filter by maximum price
- Each musician shows: name, genre, city, price
- User can click to see musician details

---

## Story 11: Book a Musician

**Story**: As a user, I want to book a musician for my event, so that I can add music to my booking.

**Acceptance Criteria**:
- User can select existing venue booking to link musician
- User enters login credentials (phone and password)
- Musician booking is linked to venue booking
- Booking date must match venue booking date
- User sees confirmation message
- Musician appears in booking details

---

## Story 12: Browse Show Programs

**Story**: As a user, I want to browse show programs for my event, so that I can find entertainment shows.

**Acceptance Criteria**:
- User can see list of show programs on show-programs page
- User can filter by program type
- User can filter by city
- User can filter by maximum price
- Each program shows: name, type, city, price
- User can click to see program details

---

## Story 13: Book a Show Program

**Story**: As a user, I want to book a show program for my event, so that I can add a show to my booking.

**Acceptance Criteria**:
- User can select existing venue booking to link show program
- User enters login credentials (phone and password)
- Show program booking is linked to venue booking
- Booking date must match venue booking date
- User sees confirmation message
- Show program appears in booking details

---

## Story 14: Create Invitation

**Story**: As a user, I want to create an invitation for my event, so that I can invite guests easily.

**Acceptance Criteria**:
- User can create invitation from booking details page
- User fills: title, message, event time, dress code, additional info
- System generates unique token for invitation
- System creates unique invitation link
- User can preview invitation
- Invitation is linked to booking

---

## Story 15: Share Invitation

**Story**: As a user, I want to share my invitation link with guests, so that they can RSVP.

**Acceptance Criteria**:
- User receives unique invitation link after creation
- Link format: `/invitation/<token>`
- User can copy and share link (email, SMS, etc.)
- Link works for all guests
- Link shows invitation details when accessed

---

## Story 16: View Invitation as Guest

**Story**: As a guest, I want to view the invitation, so that I can see event details.

**Acceptance Criteria**:
- Guest can access invitation via unique link
- Invitation page shows: event title, message, venue, date, time, dress code
- Page shows RSVP form
- Page is mobile-friendly
- Invalid token shows error message

---

## Story 17: Submit RSVP

**Story**: As a guest, I want to RSVP to an invitation, so that the host knows if I'm attending.

**Acceptance Criteria**:
- Guest fills RSVP form: name, email, phone, attendance status, plus-one count
- Guest can add dietary restrictions
- Guest can leave message for host
- RSVP is saved to database
- Guest sees confirmation page after submission
- Host can view RSVP responses in booking details

---

## Story 18: View My Bookings

**Story**: As a user, I want to view all my bookings, so that I can manage my events.

**Acceptance Criteria**:
- User logs in and goes to profile page
- Profile shows all bookings with details: venue, date, status
- User can see linked services (hosts, musicians, programs)
- User can see booking status (pending, confirmed, cancelled)
- User can click to see full booking details

---

## Story 19: Cancel Booking

**Story**: As a user, I want to cancel a booking, so that I can free up the date if needed.

**Acceptance Criteria**:
- User can cancel booking from profile page
- Cancellation changes booking status to "cancelled"
- Cancelled booking still appears in profile (marked as cancelled)
- User sees confirmation message after cancellation

---

## Story 20: Submit Feedback

**Story**: As a user, I want to submit feedback about my experience, so that I can help improve the service.

**Acceptance Criteria**:
- User can access feedback page from main menu
- User fills: name, email, feedback type, rating (1-5), recommendation, message
- User can specify venue name
- User can allow contact for follow-up
- Feedback is saved to database
- User sees success message after submission

---

## Story 21: Export Feedback (Admin)

**Story**: As an admin, I want to export all feedback to Excel, so that I can analyze user feedback.

**Acceptance Criteria**:
- Admin can access download feedback Excel endpoint
- Excel file contains all feedback data
- File includes: name, email, type, rating, recommendation, message, venue, date
- File is properly formatted with headers
- Download works correctly

