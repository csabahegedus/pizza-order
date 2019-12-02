# pizzaorder-elte-project

# Web programming project at Eötvös Loránd University 

Description in hungarian:

## Pizzarendelés

Egy pizza-futár vállalat rendeléseket kezelő rendszer.
A megrendeléseket a vásárlók a webes felületen keresztül adhatják le.
* A weblap főoldalán megjelennek a kategóriák (pl. sonkás, hawaii, üdítők),
valamint a 10 legnépszerűbb (legtöbbet rendelt) étel/ital.
* A kategóriát kiválasztva listázódnak a tételek (név és ár kíséretében),
amelyek szűrhetőek név(részlet)re. Pizzák esetén leírás is van. Külön meg
vannak jelölve a csípős, illetve vegetáriánus ételek.
* Pizzák és italok tetszőleges számban helyezhetőek a kosárba egy adott
felső korlátig (20.000 Ft), afelett több terméket nem lehet a kosárba
helyezni.
* A kosár tartalma bármikor megtekinthető, ekkor látszódnak a felvett
tételek, illetve látható az összár. Bármely tétel kivehető a kosárból.
* A rendelést törölhetjük, illetve leadhatjuk. Utóbbi esetben meg kell
adnunk a nevünket, címünket, illetve telefonszámunkat, majd elküldhetjük
a rendelést.
A grafikus felületet az alkalmazottak használják a rendelések, illetve a weblap
tartalmának adminisztrálására.
* Az alkalmazott bejelentkezhet (felhasználónév és jelszó megadásával) a
programba, illetve kijelentkezhet.
* Bejelentkezve listázódnak a leadott, illetve teljesített rendeléseket (leadás
időpontja, teljesítés időpontja, név, cím, telefonszám, összeg), egy
rendelést kiválasztva pedig listázódnak a tételeket. A leadott rendelés
teljesítettnek jelölhető, ekkor a rendszer rögzíti a teljesítés időpontját is. A
lista szűrhető csak teljesített, illetve csak leadott rendelésekre, továbbá a
rendelő nevére, illetve cím(részlet)re.
* Lehetőség van új pizza, illetve ital hozzáadására (név, ár, illetve étel esetén
leírás, csípős/vegetáriánus tulajdonságok megadásával). Az egyértelműség
miatt nem engedélyezett több ugyanolyan nevű étel/ital felvitele.

### Osztálymodell:
#### Adatbázisban tárold adatok:
* kategóriák (név);
* pizzák és italok (név, kategória, leírás, ár, csípős-e, vegetáriánus-e);
* munkatársak (teljes név, felhasználónév, jelszó);
* rendelések (név, cím, telefonszám, megrendelt ételek és italok, teljesített-e)

#### Adatbázismodell:
![](docs/images/database.png)
