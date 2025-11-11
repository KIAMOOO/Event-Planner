# INVITATION SYSTEM - ADD THIS TO YOUR app.py

import secrets
from datetime import datetime

# ========== ADD THESE MODELS TO YOUR app.py AFTER Feedback MODEL ==========

class Invitation(db.Model):
    """Model for event invitations with unique links"""
    id = db.Column(db.Integer, primary_key=True)
    booking_id = db.Column(db.Integer, db.ForeignKey('booking.id'), nullable=False)
    title = db.Column(db.String(200), nullable=False)  # e.g., "Wedding of John & Jane"
    message = db.Column(db.Text, nullable=False)  # Personal message to guests
    event_time = db.Column(db.String(50))  # e.g., "18:00"
    dress_code = db.Column(db.String(100))  # e.g., "Formal attire"
    additional_info = db.Column(db.Text)  # Any additional details
    unique_token = db.Column(db.String(100), unique=True, nullable=False)  # For sharing
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Relationships
    booking = db.relationship('Booking', backref='invitations')
    invited_guests = db.relationship('InvitedGuest', backref='invitation', lazy=True, cascade='all, delete-orphan')


class InvitedGuest(db.Model):
    """Model for individual guests invited through invitation link"""
    id = db.Column(db.Integer, primary_key=True)
    invitation_id = db.Column(db.Integer, db.ForeignKey('invitation.id'), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100))
    phone = db.Column(db.String(20))
    plus_one = db.Column(db.Integer, default=0)  # Number of additional guests
    rsvp_status = db.Column(db.String(20), default='pending')  # pending, attending, not_attending
    dietary_restrictions = db.Column(db.String(200))  # Any food allergies/preferences
    message_to_host = db.Column(db.Text)  # Guest can leave a message
    responded_at = db.Column(db.DateTime)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)


# ========== ADD THESE FORMS TO YOUR app.py AFTER ProfileLookupForm ==========

class InvitationForm(FlaskForm):
    """Form for creating event invitation"""
    title = StringField('Event Title', validators=[DataRequired()], 
                       render_kw={'placeholder': 'e.g., Wedding of John & Jane'})
    message = TextAreaField('Welcome Message', validators=[DataRequired()], 
                           render_kw={'placeholder': 'Write a warm message to your guests...', 'rows': 5})
    event_time = StringField('Event Time', validators=[DataRequired()], 
                            render_kw={'placeholder': 'e.g., 18:00'})
    dress_code = StringField('Dress Code', 
                            render_kw={'placeholder': 'e.g., Formal attire, Casual, Traditional'})
    additional_info = TextAreaField('Additional Information', 
                                   render_kw={'placeholder': 'Parking info, gift registry, etc.', 'rows': 3})
    submit = SubmitField('Create Invitation')


class GuestRSVPForm(FlaskForm):
    """Form for guests to RSVP"""
    name = StringField('Your Full Name', validators=[DataRequired()], 
                      render_kw={'placeholder': 'John Doe'})
    email = StringField('Email Address', validators=[Email()], 
                       render_kw={'placeholder': 'john@example.com'})
    phone = StringField('Phone Number', 
                       render_kw={'placeholder': '+7 700 123 4567'})
    plus_one = IntegerField('Number of Additional Guests', validators=[NumberRange(min=0, max=5)], 
                           default=0,
                           render_kw={'placeholder': '0'})
    rsvp_status = SelectField('Will you attend?', 
                             choices=[
                                 ('attending', '✓ Yes, I will attend'),
                                 ('not_attending', '✗ Sorry, I cannot attend')
                             ], 
                             validators=[DataRequired()])
    dietary_restrictions = StringField('Dietary Restrictions / Allergies', 
                                      render_kw={'placeholder': 'Vegetarian, Halal, Allergies, etc.'})
    message_to_host = TextAreaField('Message to Host (Optional)', 
                                   render_kw={'placeholder': 'Leave a message for the host...', 'rows': 3})
    submit = SubmitField('Submit RSVP')


# ========== ADD THESE ROUTES TO YOUR app.py ==========

@app.route('/booking/<int:booking_id>/create-invitation', methods=['GET', 'POST'])
def create_invitation(booking_id):
    """Create invitation for a booking"""
    booking = Booking.query.get_or_404(booking_id)
    
    # Check if invitation already exists for this booking
    existing_invitation = Invitation.query.filter_by(booking_id=booking_id).first()
    
    form = InvitationForm()
    
    if form.validate_on_submit():
        if existing_invitation:
            # Update existing invitation
            existing_invitation.title = form.title.data
            existing_invitation.message = form.message.data
            existing_invitation.event_time = form.event_time.data
            existing_invitation.dress_code = form.dress_code.data
            existing_invitation.additional_info = form.additional_info.data
            invitation = existing_invitation
        else:
            # Create new invitation
            invitation = Invitation(
                booking_id=booking_id,
                title=form.title.data,
                message=form.message.data,
                event_time=form.event_time.data,
                dress_code=form.dress_code.data,
                additional_info=form.additional_info.data,
                unique_token=secrets.token_urlsafe(32)
            )
            db.session.add(invitation)
        
        db.session.commit()
        
        flash('Invitation created successfully! Share the link with your guests.', 'success')
        return redirect(url_for('invitation_preview', token=invitation.unique_token))
    
    # Pre-fill form if invitation exists
    if existing_invitation:
        form.title.data = existing_invitation.title
        form.message.data = existing_invitation.message
        form.event_time.data = existing_invitation.event_time
        form.dress_code.data = existing_invitation.dress_code
        form.additional_info.data = existing_invitation.additional_info
    
    return render_template('create_invitation.html', booking=booking, form=form)


@app.route('/invitation/<token>')
def invitation_preview(token):
    """Preview invitation (for host to see)"""
    invitation = Invitation.query.filter_by(unique_token=token).first_or_404()
    booking = invitation.booking
    venue = booking.venue
    hall = booking.selected_hall
    
    # Get RSVP statistics
    total_invited = InvitedGuest.query.filter_by(invitation_id=invitation.id).count()
    attending = InvitedGuest.query.filter_by(invitation_id=invitation.id, rsvp_status='attending').count()
    not_attending = InvitedGuest.query.filter_by(invitation_id=invitation.id, rsvp_status='not_attending').count()
    pending = total_invited - attending - not_attending
    
    # Calculate total attending including plus ones
    total_attending = db.session.query(
        db.func.sum(InvitedGuest.plus_one + 1)
    ).filter(
        InvitedGuest.invitation_id == invitation.id,
        InvitedGuest.rsvp_status == 'attending'
    ).scalar() or 0
    
    # Get guest list
    guests = InvitedGuest.query.filter_by(invitation_id=invitation.id).order_by(InvitedGuest.created_at.desc()).all()
    
    # Generate shareable link
    invitation_link = url_for('guest_rsvp_page', token=token, _external=True)
    
    return render_template('invitation_preview.html', 
                         invitation=invitation,
                         booking=booking,
                         venue=venue,
                         hall=hall,
                         invitation_link=invitation_link,
                         total_invited=total_invited,
                         attending=attending,
                         not_attending=not_attending,
                         pending=pending,
                         total_attending=total_attending,
                         guests=guests)


@app.route('/rsvp/<token>', methods=['GET', 'POST'])
def guest_rsvp_page(token):
    """Public RSVP page for guests"""
    invitation = Invitation.query.filter_by(unique_token=token).first_or_404()
    booking = invitation.booking
    venue = booking.venue
    hall = booking.selected_hall
    
    form = GuestRSVPForm()
    
    if form.validate_on_submit():
        # Check if guest already RSVPed with this email
        existing_guest = InvitedGuest.query.filter_by(
            invitation_id=invitation.id,
            email=form.email.data
        ).first()
        
        if existing_guest:
            # Update existing RSVP
            existing_guest.name = form.name.data
            existing_guest.phone = form.phone.data
            existing_guest.plus_one = form.plus_one.data
            existing_guest.rsvp_status = form.rsvp_status.data
            existing_guest.dietary_restrictions = form.dietary_restrictions.data
            existing_guest.message_to_host = form.message_to_host.data
            existing_guest.responded_at = datetime.utcnow()
        else:
            # Create new RSVP
            guest = InvitedGuest(
                invitation_id=invitation.id,
                name=form.name.data,
                email=form.email.data,
                phone=form.phone.data,
                plus_one=form.plus_one.data,
                rsvp_status=form.rsvp_status.data,
                dietary_restrictions=form.dietary_restrictions.data,
                message_to_host=form.message_to_host.data,
                responded_at=datetime.utcnow()
            )
            db.session.add(guest)
        
        db.session.commit()
        
        if form.rsvp_status.data == 'attending':
            flash('Thank you for confirming your attendance! We look forward to seeing you! 🎉', 'success')
        else:
            flash('Thank you for your response. We will miss you! 💔', 'info')
        
        return redirect(url_for('rsvp_confirmation', token=token))
    
    return render_template('guest_rsvp_page.html', 
                         invitation=invitation,
                         booking=booking,
                         venue=venue,
                         hall=hall,
                         form=form)


@app.route('/rsvp/<token>/confirmation')
def rsvp_confirmation(token):
    """Thank you page after RSVP submission"""
    invitation = Invitation.query.filter_by(unique_token=token).first_or_404()
    booking = invitation.booking
    venue = booking.venue
    
    return render_template('rsvp_confirmation.html', 
                         invitation=invitation,
                         booking=booking,
                         venue=venue)


@app.route('/booking/<int:booking_id>/manage-guests')
def manage_guests(booking_id):
    """Manage guest list and RSVPs"""
    booking = Booking.query.get_or_404(booking_id)
    invitation = Invitation.query.filter_by(booking_id=booking_id).first()
    
    if not invitation:
        flash('Please create an invitation first.', 'warning')
        return redirect(url_for('create_invitation', booking_id=booking_id))
    
    guests = InvitedGuest.query.filter_by(invitation_id=invitation.id).order_by(InvitedGuest.created_at.desc()).all()
    
    # Statistics
    total_invited = len(guests)
    attending = sum(1 for g in guests if g.rsvp_status == 'attending')
    not_attending = sum(1 for g in guests if g.rsvp_status == 'not_attending')
    pending = total_invited - attending - not_attending
    total_attending = sum(g.plus_one + 1 for g in guests if g.rsvp_status == 'attending')
    
    return render_template('manage_guests.html',
                         booking=booking,
                         invitation=invitation,
                         guests=guests,
                         total_invited=total_invited,
                         attending=attending,
                         not_attending=not_attending,
                         pending=pending,
                         total_attending=total_attending)

