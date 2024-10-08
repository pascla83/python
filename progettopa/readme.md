# Python

# Progetto Generico

è fondamentale, sicuramente creare l'ambiente virtuale

python -m venv (nome della venv)


```bash

python -m venv venv

```

creato l'ambiente virtuale ?

accedendo nell'ambiente virtuale

```bash

pip list

```

ci apparirà

```bash

Package             Version
------------------- --------
asgiref             3.8.1
certifi             2024.7.4
charset-normalizer  3.3.2
Django              3.2.15
django-filter       23.1
djangorestframework 3.14.0
idna                3.8
joblib              1.4.2
mysqlclient         2.1.0
numpy               2.1.0
pandas              2.2.2
pillow              10.4.0
pip                 24.2
python-dateutil     2.8.2
pytz                2024.1
requests            2.28.2
scikit-learn        1.0.2
scipy               1.14.1
setuptools          57.4.0
six                 1.16.0
sqlparse            0.5.1
threadpoolctl       3.5.0
typing_extensions   4.12.2
tzdata              2024.1
urllib3             1.26.19
xgboost             1.6.2

```

ogni pacchetto è importante

come posso creare la seguente lista?

```bash

pip freeze >> requests.txt

```

ma è fondamentale, sicuramente installare:

```bash

pip install Django==3.2.15

```

oppure:

```bash

pip install Django

```

Dopo aver creato il progetto:

```bash

django-admin startproject progettopa

```

è bene accedere al progetto:

```bash

cd progettopa

python manage.py startapp applicazione

```

e inoltre è anche bene, configurarla:

```bash

progettopa -> progettopa -> settings.py

```

configurarla

```bash

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'applicazione'
]

```

e ora? è bene accedere ad urls.py

```bash

progettopa -> progettopa -> urls.py

```

é bene aggiungere "applicazione" o la webapp che vorremmo creare:

python manage.py startapp applicazione ( l'abbiamo creata da poco)


```bash

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # ho aggiunto la mia applicazione
    path("", include("applicazione.urls"))
]

```

Ora è bene creare anche la urls.py all'interno dell'applicazione

```bash

progettopa -> applicazione -> urls.py

```

quindi?

```bash

from django.urls import path

from .views import ArticoliView

urlpatterns = [
    path("", ArticoliView.as_view(), name="homepage")
]

```

ArticoliView, che cos'è?

```bash

from django.shortcuts import render
from .models import Articolo
from django.views.generic import ListView, DetailView

class ArticoliView(ListView):
    model = Articolo
    template_name = "applicazione/pagina.html"
    context_object_name = 'articoli'
    paginate_by = 25

```

Progetto [https://github.com/pascla83/python/tree/master/progettopa](https://github.com/pascla83/python/tree/master/progettopa).