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

django-admin startproject primo_progetto

```

è bene accedere al progetto:

```bash

cd primo_progetto

python manage.py startapp prima_app

```

e inoltre è anche bene, configurarla:

```bash

primo_progetto -> primo_progetto -> settings.py

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

    'prima_app'
]

```

e ora? è bene accedere ad urls.py

```bash

primo_progetto -> primo_progetto -> urls.py

```

accediamo e modifichiamo. La struttura appare in questo modo e va modificata

```bash

from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
]

```

