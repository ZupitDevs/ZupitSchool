bundle config --local github.https true
bundle --path=.bundle/gems --binstubs=.bundle/.bin
git clone https://github.com/hakimel/reveal.js.git
(
    cd reveal.js
    git pull --all
    git checkout tags/3.7.0 -b need_this
)
