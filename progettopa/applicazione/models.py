from django.db import models

# Create your models here.
# Creata la Tabella per SITEC
class Articolo(models.Model):
    titolo = models.CharField(max_length=100, blank=True, null=True)
    tag = models.CharField(max_length=50, blank=True, null=True)
    giacenza = models.PositiveIntegerField(default=0, blank=True, null=True)

    class Meta:
        verbose_name = "Articolo"
        verbose_name_plural = "Articoli"

    def __str__(self):
        return str(self.titolo) + " " + str(self.tag)

#Creata la Tabella: Cliente
# è servita in SITEC

class Cliente(models.Model):
    nome_cognome = models.CharField(max_length=100, blank=True, null=True)
    email = models.EmailField(max_length=30, blank=True, null=True)
    accepts_marketing = models.BooleanField()
    #data_registrazione = models.DateField(auto_now_add=True, blank=True, null=True)
    data_registrazione = models.DateField(blank=True, null=True)

    class Meta:
        verbose_name = "Cliente"
        verbose_name_plural = "Clienti"

    def __str__(self):
        return str(self.pk) + " " + self.nome_cognome