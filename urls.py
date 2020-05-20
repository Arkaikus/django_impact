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
    # path('dashboard', dashboard, name="dashboard"),
    # path('icons', icons, name="icons"),
    # path('login', login, name="login"),
    # path('profile', profile, name="profile"),
    # path('tables', tables, name="tables"),
    # path('recover', recover, name="recover"),
    # path('form', form, name="form"),
    # path('dtx1', tableExample1, name="dtx1"),
]
