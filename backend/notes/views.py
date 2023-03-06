from django.shortcuts import render
from rest_framework import viewsets
from .serializers import NoteSerializer
from .models import Notes

# Create your views here.
# where we make love to frontend 

class NotesView(viewsets.ModelViewSet):
    queryset = Notes.objects.all()
    serializer_class = NoteSerializer
