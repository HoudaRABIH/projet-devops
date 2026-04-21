FROM php:8.3-apache

RUN apt-get update && apt-get install -y \
    git \
    unzip \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libzip-dev \
    zip \
    && docker-php-ext-install pdo pdo_mysql mbstring exif bcmath gd zip

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

RUN a2enmod rewrite

WORKDIR /var/www/html

COPY . /var/www/html

RUN composer install

RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 775 storage bootstrap/cache

RUN sed -i 's!/var/www/html!/var/www/html/public!g' /etc/apache2/sites-available/000-default.conf

RUN printf '<Directory /var/www/html/public>\n\
    AllowOverride All\n\
    Require all granted\n\
</Directory>\n' >> /etc/apache2/apache2.conf

EXPOSE 80
