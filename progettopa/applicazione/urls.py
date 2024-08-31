from django.urls import path

from .views import ArticoliView

urlpatterns = [
    path("", ArticoliView.as_view(), name="homepage")
]