from config import initial_site


# ToDo: dodac slowniki z wartosciami ac, tv ac rate tv rate.
# ToDo: dodac indexy tych slownikow
# ToDo: w eventach ustawiac indexy tutaj wyciagac wartosci i odsylac wartosc do interface
class global_data:
    def __init__(self):
        self.current_site = initial_site