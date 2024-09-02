# Python

Crea un Progetto Django

Inizia creando un nuovo progetto Django:

```bash

django-admin startproject crud_zero2
cd crud_zero2

```

inoltre

```bash

python manage.py startapp prima_app

```

inoltre

```bash

# crud_zero2/settings.py

INSTALLED_APPS = [
    
    'prima_app',
    
]

```

inoltre

```bash

# prima_app/models.py

from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

```

inoltre: da riga di comando

```bash

python manage.py makemigrations
python manage.py migrate

```

inoltre:

```bash

# prima_app/forms.py

from django import forms
from .models import Article

class ArticleForm(forms.ModelForm):
    class Meta:
        model = Article
        fields = ['title', 'content']

```

è bene definire le views.py

```bash

# prima_app/views.py

from django.shortcuts import render, get_object_or_404, redirect
from .models import Article
from .forms import ArticleForm

def article_list(request):
    articles = Article.objects.all()
    return render(request, 'prima_app/article_list.html', {'articles': articles})

def article_detail(request, id):
    article = get_object_or_404(Article, id=id)
    return render(request, 'prima_app/article_detail.html', {'article': article})

def article_create(request):
    if request.method == 'POST':
        form = ArticleForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('article_list')
    else:
        form = ArticleForm()
    return render(request, 'prima_app/article_form.html', {'form': form})

def article_update(request, id):
    article = get_object_or_404(Article, id=id)
    if request.method == 'POST':
        form = ArticleForm(request.POST, instance=article)
        if form.is_valid():
            form.save()
            return redirect('article_list')
    else:
        form = ArticleForm(instance=article)
    return render(request, 'prima_app/article_form.html', {'form': form})

def article_delete(request, id):
    article = get_object_or_404(Article, id=id)
    if request.method == 'POST':
        article.delete()
        return redirect('article_list')
    return render(request, 'prima_app/article_confirm_delete.html', {'article': article})

```

è bene definire la urls.py all'interno dell'applicazione

```bash

# prima_app/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.article_list, name='article_list'),
    path('article/<int:id>/', views.article_detail, name='article_detail'),
    path('article/new/', views.article_create, name='article_create'),
    path('article/<int:id>/edit/', views.article_update, name='article_update'),
    path('article/<int:id>/delete/', views.article_delete, name='article_delete'),
]


```


la urls all'interno del progetto principale. urls.py

```bash

# mio_progetto/urls.py

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('prima_app.urls')),
]

```

Creare i Templates:

templates/prima_app/

article_list.html

```bash

<!-- templates/prima_app/article_list.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Article List</title>
</head>
<body>
    <h1>Articles</h1>
    <a href="{% url 'article_create' %}">Create New Article</a>
    <ul>
        {% for article in articles %}
            <li>
                <a href="{% url 'article_detail' article.id %}">{{ article.title }}</a>
                <a href="{% url 'article_update' article.id %}">Edit</a>
                <a href="{% url 'article_delete' article.id %}">Delete</a>
            </li>
        {% endfor %}
    </ul>
</body>
</html>


```

Creare i Templates:

templates/prima_app/

article_detail.html

```bash

<!-- templates/prima_app/article_detail.html -->
<!DOCTYPE html>
<html>
<head>
    <title>{{ article.title }}</title>
</head>
<body>
    <h1>{{ article.title }}</h1>
    <p>{{ article.content }}</p>
    <a href="{% url 'article_update' article.id %}">Edit</a>
    <a href="{% url 'article_delete' article.id %}">Delete</a>
    <br>
    <a href="{% url 'article_list' %}">Back to Articles List</a>
</body>
</html>


```

Creare i Templates:

templates/prima_app/

article_form.html

```bash

<!-- templates/prima_app/article_form.html -->
<!DOCTYPE html>
<html>
<head>
    <title>{% if form.instance.id %}Edit Article{% else %}New Article{% endif %}</title>
</head>
<body>
    <h1>{% if form.instance.id %}Edit Article{% else %}New Article{% endif %}</h1>
    <form method="post">
        {% csrf_token %}
        {{ form.as_p }}
        <button type="submit">Save</button>
    </form>
    <a href="{% url 'article_list' %}">Cancel</a>
</body>
</html>



```


Creare i Templates:

templates/prima_app/

article_confirm_delete.html

```bash

<!-- templates/prima_app/article_confirm_delete.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Delete Article</title>
</head>
<body>
    <h1>Delete Article</h1>
    <p>Are you sure you want to delete "{{ article.title }}"?</p>
    <form method="post">
        {% csrf_token %}
        <button type="submit">Yes, delete</button>
    </form>
    <a href="{% url 'article_list' %}">Cancel</a>
</body>
</html>


```

ed eseguire:

```bash

python manage.py runserver


```



Struttura del Progetto:

```bash

mio_progetto/
├── manage.py
├── crud_zero2/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py       # Questo è il file appena creato
│   ├── asgi.py
│   ├── wsgi.py
│   └── ...
└── prima_app/
    ├── __init__.py
    ├── admin.py
    ├── apps.py
    ├── forms.py
    ├── migrations/
    ├── models.py
    ├── templates/
    │   └── prima_app/
    │       ├── article_list.html
    │       ├── article_detail.html
    │       ├── article_form.html
    │       └── article_confirm_delete.html
    ├── tests.py
    ├── urls.py       # Questo è l'urls.py specifico per l'app
    └── views.py


```