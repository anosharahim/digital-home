from django.db import models

#defines our data structures

# migrations pulls from this to update db 
class Notes(models.Model):
    text = models.TextField()
    date = models.DateTimeField(auto_now_add=True)

    def _str_(self):
        return self.text
