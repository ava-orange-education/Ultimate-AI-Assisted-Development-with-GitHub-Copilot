# Prompt Used: Create a Django model for a Product with fields for name, description, and price

from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name

# Usage Instructions:
# - Add this model to your Django app's models.py.
# - Run `python manage.py makemigrations` and `python manage.py migrate` to create the database table.
# - Register the model in admin.py if you want it manageable via Django Admin UI.
