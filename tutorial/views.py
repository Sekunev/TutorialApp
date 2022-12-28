from django.shortcuts import render

from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Tutorial
from .serializers import TutorialSerializer

# Create your views here.


# class Tutorials(ListCreateAPIView):
#     queryset = Todo.objects.filter(is_done=False)
#     serializer_class = TodoSerializer

# class TutorialDetail(RetrieveUpdateDestroyAPIView):
#     queryset = Todo.objects.filter(is_done=False)
#     serializer_class = TodoSerializer
#     lookup_field = 'id' # Eğer urls.py'da id tanımlamasını id yapmışsak burada lookup_field= 'id' olmalı. Defaul'u pk'dır.


class TutorialMVS(ModelViewSet):
    queryset = Tutorial.objects.all()
    serializer_class = TutorialSerializer