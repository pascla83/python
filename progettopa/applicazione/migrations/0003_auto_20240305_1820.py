# Generated by Django 3.2.15 on 2024-03-05 18:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('applicazione', '0002_cliente'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articolo',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='cliente',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
