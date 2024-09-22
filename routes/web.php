<?php

use Illuminate\Support\Facades\Route;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;



Route::get('/{any?}/{slug?}', function () {
    return view('welcome');
})->where('any', '.*')->where('slug', '.*');


Route::get('/Reactvel-app/csrf-token', function () {
    return response()->json(['csrfToken' => csrf_token()]);
});

Route::post('/Reactvel-app/login', function (Request $request) {
    $credentials = $request->only('email', 'password');

    if (Auth::attempt($credentials)) {
        // Authentication passed, return success response
        return response()->json(['message' => 'Login successful'], 200);
    }

    // Authentication failed
    return response()->json(['error' => 'Invalid credentials'], 401);
});
