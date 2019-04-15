FROM php:7.2-apache

RUN apt-get update && \
    apt-get install -y autoconf pkg-config libssl-dev git libzip-dev zlib1g-dev && \
    pecl install mongodb && docker-php-ext-enable mongodb && \
    pecl install xdebug && docker-php-ext-enable xdebug && \
    docker-php-ext-install -j$(nproc) pdo_mysql zip

RUN apt-get install -y libxml2-dev libcurl4-openssl-dev

RUN docker-php-ext-install soap &&\
    docker-php-ext-install xml &&\
    docker-php-ext-install xmlrpc &&\
    docker-php-ext-install curl
    
RUN a2enmod rewrite