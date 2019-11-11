from my_httpd
RUN apt-get update
RUN apt-get update
RUN apt-get install -y php libapache2-mod-php
RUN a2enmod php7.3
RUN a2enmod rewrite
COPY php /usr/local/apache2/htdocs/
