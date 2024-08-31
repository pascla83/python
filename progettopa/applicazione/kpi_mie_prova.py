from datetime import date, timedelta
from .models import Articolo

"""

class KpiCirulli():

    # Definiziamo la data di inizio e di fine per le kpi
    # Calcoliamo sempre rispetto al mese precedente al mese corrente (es: oggi è ottobre, calcoliamo per settembre)
    def __init__(self):
        self.data_fine = date.today().replace(day=1) - timedelta(days=1)
        self.data_inizio = self.data_fine.replace(day=1)

    # KPI 1: Sales Order Fill Rate
    
    #Sales Order Fill Rate: Il tasso di riempimento dell'ordine tiene traccia della percentuale 
    #di ordini che possono essere evasi in base allo stock corrente. Idealmente, la dashboard di 
    #distribuzione tiene traccia sia dell'inventario che degli ordini, rendendolo un semplice KPI 
    #da segnalare quotidianamente.
    
    
    def sales_Order_Fill_Rate(self):

        # controlla tutte le date NON VUOTE
        ordini_completi_evasi = Ordine.objects.filter(data_ordine_evaso__isnull=False, data_ordine__range = [self.data_inizio, self.data_fine]).count()
    
        #tutto l'ordine
        ordini_ricevuti = Ordine.objects.all().count()
        # Calcolo del sales order fill rate
        kpi_1 = self.__calcolo_kpi(num=ordini_completi_evasi, den=ordini_ricevuti)

        return round(kpi_1, 3)

"""