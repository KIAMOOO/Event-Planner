# 🎭 Toy Planner - Kazakhstan Event Planning Platform

A modern Flask-based event planning platform designed specifically for the Kazakhstan market, featuring traditional ceremonies like Tusau Keser, Kudalyk, and modern weddings with cultural authenticity.

## ✨ Features

### 🏛️ Core MVP Features
- **Event Type Selection**: Wedding (Үйлену тойы), Tusau Keser (Тұсау кесер), Corporate Events, Kudalyk (Құдалық)
- **Venue Catalog**: Curated venues across Almaty districts with advanced filtering
- **Smart Filtering**: Filter by district, guest capacity, price per person, and event type
- **Venue Details**: Comprehensive venue information with halls, menus, and pricing
- **Booking System**: Simple online booking with date selection and deposit tracking
- **Guest Invitations**: Digital RSVP system with traditional ceremony information

### 🇰🇿 Kazakhstan-Specific Features
- **Cultural Integration**: Built-in support for Kazakh traditions and ceremonies
- **Local Districts**: Covers all major Almaty districts (Bostandyk, Medeu, Almaly, etc.)
- **Traditional Menus**: Includes Kazakh cuisine options (Beshbarmak, Baursak, etc.)
- **Cultural Guidelines**: RSVP pages include traditional ceremony information
- **Bilingual Support**: English interface with Kazakh cultural terms

### 🎨 Design & UX
- **Warm Color Scheme**: #DCC5B2 (beige) and #F0E4D3 (soft sand) with burgundy accents
- **Premium Feel**: Elegant design perfect for weddings and corporate events
- **Mobile Responsive**: Optimized for all device sizes
- **Cultural Authenticity**: Design respects Kazakh cultural values

## 🚀 Quick Start

### Prerequisites
- Python 3.8 or higher
- pip (Python package manager)

### Installation

1. **Clone or download the project files**
2. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the application**:
   ```bash
   python app.py
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:5000
   ```

The application will automatically create a SQLite database and populate it with sample venues.

## 📁 Project Structure

```
toy-planner/
├── app.py                 # Main Flask application
├── requirements.txt       # Python dependencies
├── README.md             # This file
├── templates/            # HTML templates
│   ├── base.html         # Base template
│   ├── index.html        # Home page
│   ├── venues.html       # Venue catalog
│   ├── venue_detail.html # Venue details
│   ├── book_venue.html   # Booking form
│   ├── booking_confirmation.html
│   └── guest_rsvp.html   # RSVP system
└── static/              # Static assets
    ├── css/
    │   └── style.css    # Main stylesheet
    ├── js/
    │   └── main.js      # JavaScript functionality
    ├── images/          # Image uploads
    └── uploads/         # File uploads
```

## 🏢 Sample Venues

The application comes with 3 pre-configured venues:

1. **Grand Almaty Hotel** (Bostandyk)
   - Capacity: 50-300 guests
   - Price: 12,000 KZT per person
   - Events: Wedding, Corporate, Tusau Keser

2. **Kok-Tobe Restaurant** (Medeu)
   - Capacity: 30-200 guests
   - Price: 15,000 KZT per person
   - Events: Wedding, Tusau Keser, Kudalyk

3. **Atakent Palace** (Almaly)
   - Capacity: 100-500 guests
   - Price: 8,000 KZT per person
   - Events: Corporate, Wedding

## 🎯 User Journey Example

1. **Select Event Type**: Choose "Wedding" from the main page
2. **Filter Venues**: Set district to "Bostandyk", 200 guests, max 15,000 KZT per person
3. **Browse Results**: View curated list of matching venues
4. **View Details**: Click on a venue to see halls, menus, and pricing
5. **Book Venue**: Fill out booking form with event details
6. **Confirmation**: Receive booking confirmation with next steps
7. **Send Invitations**: Use RSVP system to invite guests

## 🔧 Customization

### Adding New Venues
Edit the `add_sample_data()` function in `app.py` to add more venues, halls, and menu items.

### Styling
Modify `static/css/style.css` to customize colors, fonts, and layout. The CSS uses CSS custom properties for easy theme customization:

```css
:root {
    --primary-beige: #DCC5B2;
    --soft-sand: #F0E4D3;
    --accent-burgundy: #8B2635;
    --accent-green: #2D5016;
}
```

### Adding Districts
Update the district choices in the `VenueFilterForm` class in `app.py`.

## 📱 Mobile Support

The platform is fully responsive and optimized for:
- Desktop browsers
- Tablets
- Mobile phones
- Touch interfaces

## 🔒 Security Features

- CSRF protection with Flask-WTF
- Form validation
- SQL injection prevention with SQLAlchemy
- Secure file uploads

## 🚀 Production Deployment

For production deployment, consider:

1. **Environment Variables**: Set `SECRET_KEY` as environment variable
2. **Database**: Use PostgreSQL instead of SQLite
3. **Web Server**: Deploy with Gunicorn + Nginx
4. **Payment Integration**: Add Kaspi Pay or other Kazakhstan payment methods
5. **Email Service**: Integrate email notifications for bookings
6. **File Storage**: Use cloud storage for venue images

## 🤝 Contributing

This platform is designed to serve the Kazakhstan event planning market. Contributions that enhance cultural authenticity and local market fit are welcome.

## 📞 Support

For questions about Kazakhstan event planning traditions or platform features, please refer to the cultural information included in the RSVP pages.

---

**Made with ❤️ for Kazakhstan** 🇰🇿

*Celebrating traditions while embracing modern convenience*
