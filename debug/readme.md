## 300x600 Banner debug

Úkolem je opravit vzhled reklamního banneru na stránce, kde chybějí některé povinné prvky a je rozbito formátování (viz. úkoly).

Žádné externí knihovny nesmí být použity. Mohou být použity pouze externí open source fonty (např. google fonts).

Kód musí být kompatibilní se staršími prohlížeči and nesmí rozbít styly a jiné prvky a styly na stránce.

Můžete psát kód mezi komentáře: `<!--    Edit only between these comments    -->`.

Úkoly:

1. - [ ] vycenterujte obsahu banneru jak **horizontálně**, tak i **vertikálně**

    Odpověď: 

    Je více způsobů jak to fixnout. Například použitím flexboxu a vlastností jako jsou: 

    display: flex;
    justify-content: center;
    align-items: center;

    V tomto případě by to ale nemuseli podporovat starší verze prohlížečů, a tak jsem použil padding a na zarovnání textu na střed text-align: center;

2. - [ ] opravte reklamní popisek "Reklama", tak aby byl viditelný v banneru

    Odpověď: 

    V tomto případě jsem nastavil rodičovskému elementu position: relative; aby position: absolute; mohla znovu fungovat vůči relativní pozici jeho rodičovského elementu.

3. - [ ] zjistěte proč se banner nezobrazuje na mobilním zařízení.

    Odpověď:

    Banner se nezobrazuje na mobilním zařízení, jelikož má nastavenou CSS vlastnost display: none; u breakpointu při 800px. Pokud tedy pod tímto breakpointem přepíšeme tuto vlastnost na display: block, bude se nám zobrazovat i při mobilním rozlišení. 

4. - [ ] (volitelné) nastylujete banner tak, aby více zaujmul uživatele stránky.

    Odpověď: 
    
    Jelikož je baner takto dost prázný, přidal jsem za obsah alespoň pozadí. ;)


5. - [ ] (volitelné) upravte HTML a CSS tak, aby se banner zobrazil i na mobilních zařízení.

    

