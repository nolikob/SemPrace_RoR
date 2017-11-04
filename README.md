>Vaším úkolem v první části semestrální práce bude vytvořit HTML a CSS pro tu část webové aplikace, která bude dostupná bez přihlášení. Konkrétně se bude jednat o následující:
- Seznam budov, po kliknutí na název budovy se zobrazí seznam místností v budově (index.html)
- Seznam místností v budově, po kliknutí na název místnosti se zobrazí týdenní rozvrh místnosti (rooms.html)
- Týdenní rozvrh místnosti, zobrazuje výpis lekcí, které se v místnosti konají "a la rozvrh", tedy dle dne a hodiny (schedule.html)
- Na seznamu místností v budově je rovněž zobrazen odkaz na přehled denního rozpisu lekcí, které se dějí v příslušné budově (velmi podobný tomu, který se zobrazuje v budově PAR na televizi v prvním patře) (today.html)

>Vaším úkolem v první části semestrální práce je vytvořit adresář, ve kterém budou 4 .html soubory (seznam budov jakožto "vstupní brána" do naší webové stránky se bude jmenovat index.html, následující soubory dle názvu v závorkách v seznamu výše).
Kromě těchto 4 .html souborů se v adresáři bude nacházet složka css/ ve které bude právě jeden .css soubor s CSS styly vaší webové stránky (pokud používáte variantu "s frameworky" pak se ve složce css/ budou nacházet ještě CSS soubory frameworků). Pokud budete používat i JS (to je volitelné a nepovinné), pak se tento bude nacházet ve složce js/ - stejně jako případné JS soubory použitých frameworků, při použití varianty "s frameworky").

>Výsledný adresář zazipujete a odevzdáte jako jeden .zip soubor. V této části semestrální práce nebudete používat Ruby on Rails, pouze HTML, CSS a eventuelně JS. Připomínáme, že není možné používat žádné technologie pro single page webové aplikace jako jsou AngularJS, Dart, TypeScript a další.
Pokud chcete, můžete jako bonusový úkol (v obou variantách) používat i v této části semestrální práce SCSS nebo SASS, či CoffeeScript (ale jelikož zatím nepoužíváme Ruby on Rails, musíte si sami vyřešit preprocessing - který pro nás budou ve druhé části semestrální práce řešit Rails samy).
Pokud chcete, můžete jako bonusový úkol (v obou variantách) používat i v této části semestrální práce yarn, npm či webpack. Bez nich by se vám případný preprocessing SCSS nebo CoffeeScriptu dělal velmi těžko. Upozorňujeme že zprovoznění těchto nástrojů na OS Windows není jendoduché a proto jej doporučujeme především těm pokročilejším z vás.
V první, ani ve druhé části semestrální práce není možné používat LESS, použijte místo něj SCSS či SASS, pokud jej chcete používat (je to bonusový úkol), povinné je pouze použití CSS.

>**Vaším úkolem je tedy vytvoření 4 .html souborů a jednoho .css souboru (pojmenujte jej např. screen.css). Ty soubory by měly nějak vypadat (dle zvolené varianty) a v každém případě musí být použitelné!** .html soubory musí být vzájemně propojené (pomocí tagu <a href>) -> musí se mezi nimi jít proklikávat.

>Všechny 4 .html soubory musí používat stejný .css soubor. Ve všech 4 .html souborech budete používat testovací data -> ta do HTML kódu v této části semestrální práce napište napevno, rovnou do kódu (= "hardcodujte" je tam). Teprve ve druhé části semestrální práce z těchto vašich HTML souborů uděláme ERB šablony pro Rails.

###Bez ohledu na zvolenou variantu musí vaše semestrální práce splňovat následující:
- Musí být přítomna UL-LI navigace unitř HTML tagu nav
- Musí být přítomna drobečková (breadcrumbs) navigace
- Musí být přítomny HTML elementy header a footer
- Alespoň na jedné stránce musí být přítomen tag aside
- Každá stránka musí mít právě jeden h1 tag s relevantním (měnícím se) nadpisem
- Rozvrh by měl být realizovaný pomocí tagu table
- Layout vaší stránky nesmí být celý tvořen pomocí tagů table
