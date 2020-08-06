# django-impact
django app with creative-tim impact design system

Add to:
- **app/settings.py**

```python
INSTALLED_APPS = [
# ...
    'django_impact',
# ...
]
```

- **app/urls.py**

```python
from django.urls import path, include
# ...
urlpatterns = [
    # ...
    path('impact/', include('django_impact.urls')),
    # ...
]

```