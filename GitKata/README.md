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

### Restore local state

#### `undo-local-changes` Voglio annullare le mie modifiche locali

Ho fatto delle modifiche ma ho fatto solo casino e non ho concluso nulla.. Voglio ripartire da zero

### I need something from somewhere

#### `update-branch-with-master-changes` Sto lavoranado su un branch e voglio portare modifiche da master sul mio branch

Ci sono alcune modifiche su master (o un altro branch) che mi servono per proseguire con il mio lavoro.

#### `update-branch-with-commit` Voglio prendere un commit da master e metterlo nel mio branch

Ci sono delle modifiche in un commit che mi servono assolutamente

### Work is done

#### `update-master-with-branch` Voglio portare le modifiche del mio branch su master

Ho finito con le mie modifiche, tempo di "rilasciare"!

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

### Releases

#### `start-release` Tempo di fare una release

Il codice e' pronto per una release

#### `fix-production` Bugfix di emergenza in produzione

Un problema in produzione da risolvere velocemente
