from django.contrib import admin

from .models import Notes

#define functionality for admin page
class NoteAdmin(admin.ModelAdmin):
    list_display = ('text', 'date')

admin.site.register(Notes, NoteAdmin)
