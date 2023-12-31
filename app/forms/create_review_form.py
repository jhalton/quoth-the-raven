from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField
from wtforms.validators import DataRequired

class CreateReviewForm(FlaskForm):
    rating = IntegerField("Rating", validators=[DataRequired("Rating is required")])
    review = StringField("Review")
    spoiler = BooleanField("Spoilers")
    pen_name = StringField("Pen name")
