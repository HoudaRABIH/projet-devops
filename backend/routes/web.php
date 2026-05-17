<?php

use Illuminate\Support\Facades\Route;
use App\Models\Product;

Route::get('/', function () {
    return response()->json(['status' => 'OK', 'message' => 'API Laravel operationnelle']);
});

Route::get('/products', function () {
    return response()->json(Product::all());
});
