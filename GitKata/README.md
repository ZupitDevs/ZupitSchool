# GIT KATA

## Iniziare

Per iniziare, vai nella cartella exercises e esegui il comando:

    $ ./start <use-case-name>

Dove `<use-case-name>` e' uno degli use case descritti qui sotto:

## Use cases

Qui descriveremo delle situazioni, piu' e meno frequenti in cui ci si
imbatte lavorando con GIT nel quotidiano.

### The classics

#### `update-local` Voglio aggiornare il mio repository locale

Sono su master e voglio aggiornare la mia versione locale

#### `update-local-branch` Voglio aggiornare il mio repository locale (branch)

Sono su un branch, e voglio aggiornare il mio repository locale con le
    modifiche sul remote

#### `update-local-with-commits` Voglio aggiornare il mio repository e ho dei commit locali

Sono su master o un branch, ho dei commit locali e voglio portarmi
all'ultima versione

#### `push-with-remote-updates` Ho commit locali che voglio pushare, ci sono altri commit remoti

Classico caso: ho lavorato a delle modifiche e nel frattempo il mio
branch locale e' rimasto indietro rispetto al remote.

#### `stash-changes` Ho delle modifiche locali ma devo fare altro

Ho delle modifiche locali, non sono pronte per un commit ma il cliente mi ha chiesto di fare altro. Salva temporaneamente le modifiche e lavora su un repository pulito

### Show differences

#### `show-local-changes` Voglio visualizzare le mie modifiche locali

Ho delle modifiche locali e voglio vederle

#### `show-commit-changes` Voglio vedere le modifiche introdotte da un singolo commit

### Restore local state

#### `undo-local-changes` Voglio annullare le mie modifiche locali

Ho fatto delle modifiche ma ho fatto solo casino e non ho concluso nulla.. Voglio ripartire da zero

#### `revert-to-remote` Voglio che il mio repository locale sia uguale a quello remote.

Localmente ho un casino.. che e' successo? Riportiamoci alla situazione di remote, dove funziona tutto

#### `cleanup` Ho un casino nel mio repository.. facciamo pulizia!

Ho un sacco di file generati, file copiati, file salvati dal web.. Facciamo pulizia

### I need something from somewhere

#### `update-branch-with-master-changes` Sto lavoranado su un branch e voglio portare modifiche da master sul mio branch

Ci sono alcune modifiche su master (o un altro branch) che mi servono per proseguire con il mio lavoro.

#### `update-branch-with-commit` Voglio prendere un commit da master e metterlo nel mio branch

Ci sono delle modifiche in un commit che mi servono assolutamente

### Work is done

#### `update-master-with-branch` Voglio portare le modifiche del mio branch su master

Ho finito con le mie modifiche, tempo di "rilasciare"!

#### `rebase-push-problem` Ho un branch su cui ho fatto rebase, ho pushato e mi da errori

Un problema classico quando si lavora con i rebase. Ho un branch che
ho gia' pushato, ho fatto rebase da master per alcune modifiche e
quando voglio pushare il branch ottengo un errore.

### I've made a mistake!

#### `change-commit` Voglio modificare un commit

Ho dimenticato un file, o ho sbagliato il messaggio di commit

#### `undo-commit` Ho fatto un commit, non ho pushato, e voglio annullarlo

C'era decisamente qualcosa di sbagliato in quel commit, che sia il
contenuto o il branch su cui e' stato fatto, va annullato!

#### `undo-commits` Ho fatto vari commit, non ho pushato, e voglio annullare gli ultimi N

Mi sono veramente accorto tardi che stavo lavorando sul branch
sbagliato, o ho proprio sbagliato tutto..

#### `undo-pushed-commit` Ho fatto un commit, ho pushato, e voglio annullarlo

Il cliente dice che quella modifica va tolta, o ho rotto la build in
qualche modo.. annullare il commit sul remote

#### `commit-not-in-branch` Ho fatto un commit su master ma avrei dovuto farlo su un nuovo branch

Ho committato su master anziche' in un nuovo branch.. capita, usciamone velocemente

### Releases

#### `start-release` Tempo di fare una release

Il codice e' pronto per una release

#### `fix-production` Bugfix di emergenza in produzione

Un problema in produzione da risolvere velocemente

### Multiple remotes

#### `add-new-remote` Aggiungere un nuovo remote al nostro repository

Aggiungere un nuovo remote al nostro repository, tipo quello di Zupit
per la code review.
xo
#### `sync-other-remote` Sincronizzare un remote con un altro

master su origin ha alcune modifiche che non sono sul master dell'altro remote

#### `push-branch-for-review` Pushare un branch per la code review!

Ho finito la mia storia.. voglio aprire una merge request per la code
review, prima che il cliente possa vedere qualsiasi modifica sul suo
remote

## Creazione nuovi case

1. da src/, eseguire ./unzip

2. da src/generator/, eseguire:

    $ ./start example-name "Example description"

3. Preparare l'esercizio, da src/generator/exercises/example-name/ La
   cartella local e' quella su cui verra' svolto l'esercizio alla
   fine. tmp_* sono cloni del repository per simulare altre utenze

4. da src/generator/, eseguire:

    $ ./deploy example-name

5. Ricordarsi di rigenerare lo zip prima di committare. Da src/, eseguire ./zip

6. committare e pushare
