
### Struktura URL

Rozdělte následující url na jednotlivé prvky a pojmenujte je.

```
https://test.r2b2.cz/a1/b2?article=12&widgets[]=a&widgets[]=b#foo
```
Odpověď:

https:// - "hypertext Transfer Protokol Secure" - jedná se o protokol zajišťující komunikaci mezi webovým serverem a prohlížečem, v tomto případě je protokol zabezpečený SSL Certifikátem, zabezpečený protokol pak přenášená data šifruje a snižuje tak riziko jejich zneužití (např. osobních údajů)

test - test v tomto případě představuje subdoménu url adresy

r2b2 - doména druhého řádu, představuje hlavní název domény 

.cz - doména nejvyššího řádu "top-level-domain" (např. .cz, .eu, .com, .sk, .us, .org, .net apod.)

a1 - adresář (složka), slouží jako součást cesty k souboru

b2 - soubor

? - otazník značí začátek query stringu // query string se skládá z klíčových slov (keys) ke kterým je přidělena nějaká hodnota (value)

article=12 - požadavek na 12 článek v pořadí // v tomto případě je "article" jako key a "12" jako value tohoto query stringu.

& - slouží jako mezera mezi požadavky v jednom daném query stringu

widgets[]=a&widgets[]=b#foo - nevím 

#foo - anchortag neboli kotva

### Priority selektorů

Vysvětlete jakou prioritu má jaký typ selektoru v CSS. Uvedtě na Vámi vybraném příkladu.

Odpověď: 

nejzákladnější a nejčastěji využívaný selektory v CSS jsou tečka '.',
která přistupuje k atributu třídy (class) a mřížka '#', která přistupuje k atributu identifikátoru (id)

Selektor "název elementu" - tvz. typový selektor, slouží pro výběr html elementu jako takového
Selektor tečka '.' - vybere elementy HTML dokumentu, které mají třídu "class"
Selektor mžížka '#' - vybere elementy HTML dokumentu, které mají identifikátor "id"
Selektor hvězdička '*' - je univerzálním selektorem pro výběr všech prvků HTML dokumentu
Selektor vlnovka '~' - slouží pro výběr sourozeneckých elementů, které jsou společně na stejné úrovni ve struktuře HTML dokumentu.
Selektor větší než '>' - vybere všechny potomky svého rodičovského elementu (např. div > p) vybere všechny p elementy
Selektor ',' - vybere více elementů po sobě, které budou mít nastavené stejné styly (např. div.velky-div, div.maly-div)

Selektor :hover - slouží jako pozorovatel, který sleduje pohyb myši u jeho určitého HTML elementu
Selektor :active - (např. button:active) po stisknutí se tlačítko stává aktivním do doby než pustíme prst ze stisknuté myši 

Selektory pro práci s inputy:
Selektor :focus - (např. input:focus) po prokliknutí nechá políčko stále zasoustředěné na vyplnění, i když z něj vyjedeme myší
Selektor :valid - vybere platné "input" elementy
Selektor :invalid - vybere neplatné "input" elementy
Selektor :required - vybere input elementy, kterou jsou vyžadovány vyplnit

Selektor :not(nazev html tagu) - vybere všechny ostatní elementy, které nejsou daným elementem

Selektor :first-child - vybere prvního potomka rodičovského elementu.
Selektor :last-child - vybere posledního potomka rodičovského elementu.
Selektor :only-child - vybere potomka rodičovského elementu pouze, když je jediným potomkem rodičovského elementu.

Selektor :first-of-type - vybere první element svého typu (např. p:first-of-type)
Selektor :last-of-type - vybere poslední element svého typu (např. p:last-of-type)
Selektor :only-of-type - vybere element pouze pokud je jediný svého typu

Selektor :nth-of-type(1) - vybere konkrétní element z pořadí svého typu (např. ul li:nth-of-type(1))  
Selektor :nth-child(2) - vybere potomka z pořadí svého rodičovského elementu (např. span:nth-child(2))

Pseudoelementy: 
Selektor ::after - vybere obsah před daným elementem (např. h1::after)
Selektor ::before - vybere obsah za daným elementem (např. h2::before)

Selektor input[atribut="hodnota"] - (např. input[type="submint"]) - vybere input typu submit

Selektorů je určitě ještě daleko více, ale nechci tady odpovídat ty s kterými jsem se ještě doopravdy nesetkal. 

Praktický příklad v souborech html a css ukazuji ve složce "SELEKTORY".

### Kompatibilita s prohlížeči

Jak zjistíte zda je Vaše CSS kompatibilní s určitými prohlížeči?

Odpověď: 

Pomocí stránky https://caniuse.com/ si mohu vyhledat, jestli jsou dané CSS vlastnosti souboru podporovány s určitými prohlížeči.

Pro to, aby fungovali některé z novějších CSS vlastností na starších prohlížečích se často využívají prefixy. 

Prefixy máme:
-webkit- (Safari, Chrome)
-ms- (Internet Explorer)
moz- (Firefox)
-o- (Opera)

Například vlastnosti Gridu nebo Flexboxu, které přibili v nové verzi CSS3 mají problémy se zobrazením u starších verzí prohlížečů,
a tak uvádím příklad prefixu pro vlastnost "display: flex"

div.small-widget {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}

ale takové informace si není možné pamatovat, jaká verze co podporuje a co ne a proto využívám stránku http://shouldiprefix.com/ kde zkontroluji kompatibilitu dané CSS vlastnosti napříč s prohlížeči.





