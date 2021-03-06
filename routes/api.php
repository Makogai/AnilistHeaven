<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user()->with('role');
// });
Route::middleware('auth:sanctum')->get('/user', [LoginController::class, 'user']);
Route::middleware('auth:sanctum')->get('/authenticated', function () {
    return true;
});

Route::post('registerUser', [RegisterController::class, 'register']);
Route::post('loginUser', [LoginController::class, 'login']);
Route::post('logoutUser', [LoginController::class, 'logout']);
