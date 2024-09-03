from django.shortcuts import render
from .models import Articolo
from django.views.generic import ListView, DetailView
#from .kpi_mie_prova import KpiCirulli

class ArticoliView(ListView):
    model = Articolo
    template_name = "applicazione/pagina.html"
    context_object_name = 'articoli'
    paginate_by = 25
    
    """
    def get_context_data(self, **kwargs):
        #print("inizio")
        #crea_articoli()

        # Richiamo la Classe KpiCirulli
        kpi = KpiCirulli()

        context =  super().get_context_data(**kwargs)

        #primo kpi
        kpi1 = kpi.sales_Order_Fill_Rate()
        context["kpi1"] = kpi1

        return context

    """