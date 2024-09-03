from django.urls import path


from .views import (
                    
                    index


                    )

urlpatterns = [
    # HOMEPAGE

    path('', index, name='index_home'),
]