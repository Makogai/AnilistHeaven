<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegisterRequest;

class RegisterController extends Controller
{

    public function register(Request $request){
        $request->validate([
            'username' => ['required', 'unique:users', 'min:3'],
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['min:6', 'required', 'confirmed']
        ]);

        User::create([
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);
    }
}
