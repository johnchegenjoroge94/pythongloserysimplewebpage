from django.db import models


# Create your models here.

class Product(models.Model):
    image = models.ImageField(upload_to='uploads/images', null=False, blank=False, default="uploads/images/profile.jpg")


    name = models.CharField(max_length=150, null=False, blank=False)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=False, blank=False)
    description = models.TextField(null=False, blank=False)

    def __str__(self):
        return self.name

















