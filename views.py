"""
Archivo de vistas

cada función renderiza un html a petición de la url asignada
"""
from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, 'impact/index.html')


def front_index(request):
    return render(request, 'impact/front/front.html')


def front_about(request):
    return render(request, 'impact/front/pages/about.html')


def front_all(request):
    return render(request, 'impact/front/pages/all.html')


def front_contact(request):
    return render(request, 'impact/front/pages/contact.html')


def front_pricing(request):
    return render(request, 'impact/front/pages/pricing.html')


def dashboard_index(request):
    return render(request, 'impact/dashboard/dashboard.html')


def dashboard_login(request):
    return render(request, 'impact/dashboard/pages/examples/login.html')
