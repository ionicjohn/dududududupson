from django.db import models


class Users(models.Model):
    username = models.CharField(max_length=30, primary_key=True)
    password = models.CharField(max_length=200)
    emailAddress = models.EmailField()
    phonenumber = models.IntegerField()

class Address(models.Model):
    user = models.ForeignKey(Users, on_delete=models.CASCADE, related_name='addresses')
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    street = models.CharField(max_length=100)
    house_number = models.CharField(max_length=10)
    apartment_number = models.CharField(max_length=10, null=True, blank=True)
    
