# Setting up a new Django project

- In order to facilitate ease of deployment on the Ubuntu Apache server later, create this directory structure:
-
- Install python 3 from python.org
- Make sure that Django is installed
    - ```pip3 install django```
- Create a new application
    - ```django-admin startproject PROJECTNAME```
    - The relevant files in this are:
        - manage.py - helps run the server
        - settings.py - how the application behaves
        - urls.py - table of contents for the web app
- run the application with the local server
    - ```python manage.py runserver```
- Create the actual application within the parent project
    - ```python manage.py startapp APPNAME```
- Add the name of the new app to INSTALLED_APPS in settings.py
- Create views for the new app in views.py
```py
    from django.http import HttpResponse
    from django.shortcuts import render
    def index(request):
        return HttpResponse("Hello World")
```

- create a urls.py for the individual app and add the patterns
```py
    from django.urls import path
    from . import views

    urlpatterns = [
        # what path to visit, what view to render, optionally a string name to make it easy to reference later
        path("", views.index, name="index")
    ]
```
- Add a path for the app in the main project's urls.py
```py 
    from django.contrib import admin
    from django.urls import include, path
    urlpatterns = [
        path("admin/", admin.site.urls),
        path("hello/", include("hello.urls"))
    ]
```

- Set up the database connections for python
    - Install mysqlclient in order to use mysql or mariadb
        - ```pip install mysqlclient```
    - set up the DATABASES field in settings py
    ```py
        DATABASES = {
            'default': {
                'ENGINE': 'django.db.backends.mysql',
                'NAME': 'Mariadb',
                'USER': 'django',
                'PASSWORD': 'django',
                'HOST': 'localhost',
                'PORT': '3306',
            }
        }
    ```

- Set up a model in models.py under the application
    ```py
        class User(models.Model):
            # CharField for user's first name
            first_name = models.CharField(null=False, max_length=30, default='john')
            # CharField for user's last name
            last_name = models.CharField(null=False, max_length=30, default='doe')
            # CharField for user's date for birth
            dob = models.DateField(null=True)
    ```

- Create the migrations file 
    - ```python manage.py makemigrations```
- Check out the SQL statements that the tool created
    - ```python3 manage.py sqlmigrate orm 0001```
- Migrate the changes to the database
    - ```python manage.py migrate```




