import bcrypt
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Users
from .serializers import UserSerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny



class CreateUserView(APIView):
    def post(self, request):
        data = request.data
        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            # Hash the password
            password = data['password'].encode('utf-8')
            hashed_password = bcrypt.hashpw(password, bcrypt.gensalt()).decode('utf-8')
            data['password'] = hashed_password

            user = serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class LoginView(APIView):
    permission_classes = (AllowAny,)  # Allow any user to access this view

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        try:
            user = Users.objects.get(username=username)
        except Users.DoesNotExist:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

        # Hash the provided password
        provided_password = password.encode('utf-8')
        hashed_password = user.password.encode('utf-8')

        # Check if the hashed passwords match
        if bcrypt.checkpw(provided_password, hashed_password):
            # Generate JWT token
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)

            return Response({'access_token': access_token})
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

    def get(self, request):
        return Response({'detail': 'Invalid request method'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)