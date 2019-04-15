FROM php:7.2-apache
# RUN  pecl install mongodb
# RUN pecl install xdebug-beta
# RUN docker-php-ext-enable xdebug
# RUN echo "extension=mongodb.so" > $PHP_INI_DIR/conf.d/mongodb.ini

RUN apt-get update && \
    apt-get install -y autoconf pkg-config libssl-dev git libzip-dev zlib1g-dev && \
    pecl install mongodb && docker-php-ext-enable mongodb && \
    pecl install xdebug && docker-php-ext-enable xdebug && \
    docker-php-ext-install -j$(nproc) pdo_mysql zip