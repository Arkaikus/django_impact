"""
Archivo de urls de Impact
front/ : páginas de landing
dashboard/ : páginas de dashboard

TODO: páginas de ejemplo
"""
from django.urls import path
from .views import *


urlpatterns = [
    path('', index, name="impact.index"),
    path('front/index', front_index, name="impact.front.index"),
    path('front/about', front_about, name="impact.front.about"),
    path('front/all', front_all, name="impact.front.all"),
    path('front/contact', front_contact, name="impact.front.contact"),
    path('front/pricing', front_pricing, name="impact.front.pricing"),
    path('dasboard/index', dashboard_index, name="impact.dashboard.index"),
    path('dasboard/login', dashboard_login, name="impact.dashboard.login"),
]
