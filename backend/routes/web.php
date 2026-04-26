<?php

use Illuminate\Support\Facades\Route;
use App\Models\Product;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/products', function () {
    return response()
        ->json(Product::all())
        ->header('Access-Control-Allow-Origin', '*');
});
