from rest_framework import serializers
from .models import Users, Address, Products
import bcrypt

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ['username', 'password', 'emailAddress', 'phonenumber']

    def create(self, validated_data):
        password = validated_data.pop('password')
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        validated_data['password'] = hashed_password.decode('utf-8')
        return Users.objects.create(**validated_data)
    



class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ['id', 'user', 'first_name', 'last_name', 'city', 'street', 'house_number', 'apartment_number']

    def create(self, validated_data):
        user = self.context['request'].user
        validated_data['user'] = user
        return super().create(validated_data)



class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = ['product_id', 'product_name', 'product_desc', 'product_category', 'product_photos', 'product_price_netto', 'product_price_brutto']

    def create(self, validated_data):
        return Products.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.product_name = validated_data.get('product_name', instance.product_name)
        instance.product_desc = validated_data.get('product_desc', instance.product_desc)
        instance.product_category = validated_data.get('product_category', instance.product_category)
        instance.product_photos = validated_data.get('product_photos', instance.product_photos)
        instance.product_price_netto = validated_data.get('product_price_netto', instance.product_price_netto)
        instance.product_price_brutto = validated_data.get('product_price_brutto', instance.product_price_brutto)
        instance.save()
        return instance