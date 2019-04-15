<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Book extends Eloquent
{
    protected $connection = 'mongodb';
    protected $collection = 'Book';

    protected $fillable = [
        'title', 'width', 'description', 'price',
        'height', 'length', 'weight', 
        'firstName', 'lastName', 'cellPhone',
        'cep'
    ];

}
