<?php

Route::get('/', 'BookController@show')->middleware('cors');

Route::post('/', 'BookController@insert')->middleware('cors');

Route::post('/cep', 'CepController@find')->middleware('cors');