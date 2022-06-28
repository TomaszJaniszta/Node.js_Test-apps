## Aplications

1-6 to be added... in progress
7. An application that displays information about the logged in user of the system, using the OS module. Additionally: write the username to a file on disk. (https://nodejs.org/dist/latest-v14.x/docs/api/os.html)
8. Calculator performing four basic actions (addition, subtraction, division and multiplication) + PI. The application reads one number from file 'a.txt', the other number from file 'b.txt'. On these numbers, it performs an action. The results are saved in a 'result.txt' file, each result on a separate line. Core File system module used (https://nodejs.org/dist/latest-v14.x/docs/api/fs.html).


9. Obsługa parametrów wejściowych. Aplikacja złożona jest z 1 pliku: `app.js`. Podczas uruchamiania aplikacji możemy przekazać jej dodatkowy parametr, który zostanie wyświetlony po komunikacie `hello`. Gdy podanych będzie więcej parametrów, wtedy ignorujemy wszystkie prócz pierwszego. Gdy nie będzie podanych żadnych parametrów aplikacja wyświetla `hello world`. 
Należy wykorzystać globalną zmienną: `process`.
```
Przykładowe uruchomienie aplikacji:
> node app.js Pawel
Wynik działania aplikacji:
> hello Pawel

Przykładowe uruchomienie aplikacji:
> node app.js
Wynik działania aplikacji:
> hello world

Przykładowe uruchomienie aplikacji:
> node app.js Pawel Lukaszuk
Wynik działania aplikacji:
> hello Pawel
```

10. Rozszerzmy aplikację z zadania 8 tak, by nazwy plików z których pobierany liczby były podawane w parametrach w czasie uruchamiania.

```
Przykładowe uruchomienie aplikacji:
> node app.js a.txt b.txt
```

11. Rozszerzmy aplikację z zadania 10 tak, by jej uruchomienie z niewłaściwą liczbą parametrów skutkowało wyświetleniem stosownego komunikatu w konsoli.

```
Przykładowe uruchomienie aplikacji:
> node app.js a.txt
Wynik działania aplikacji:
> zbyt mało parametrów!

Przykładowe uruchomienie aplikacji:
> node app.js a.txt b.txt c.txt
Wynik działania aplikacji:
> zbyt dużo parametrów!
```

12. Aplikacja złożona jest z 1 pliku: `app.js`. Podczas uruchamiania możemy przekazać jej dodatkowy parametr który jest ścieżką do istniejącego na dysku folderu. Zadaniem aplikacji jest wyświetlanie w konsoli wszystkich i plików folderów znajdujących się bezpośrednio we wskazanym folderze.
Uruchomienie z niewłaściwą liczbą parametrów powinno skutkować wyświetleniem komunikatu w konsoli. Należy wykorzystać moduł Core'owy File system (https://nodejs.org/dist/latest-v14.x/docs/api/fs.html)

```
Przykładowe uruchomienie aplikacji:
> node app.js C:\\code
Wynik działania aplikacji:
Pliki w folderze C:\\code:
folder1
folder2
plik1.txt
plik2.txt

Przykładowe uruchomienie aplikacji:
> node app.js
Wynik działania aplikacji:
> zbyt mało parametrów!

Przykładowe uruchomienie aplikacji:
> node app.js C:\\code C:\\apps
Wynik działania aplikacji:
> zbyt dużo parametrów!
```
