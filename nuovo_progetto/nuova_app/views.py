from django.shortcuts import render, redirect

from django.views import View

from django.core.paginator import Paginator

from django.http import JsonResponse, HttpResponse


def index(request):
    return render(request, "nuova_app/pagina1.html")