<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegisterRequest;
use Intervention\Image\Facades\Image;
class RegisterController extends Controller
{

    public function register(Request $request){
        $request->validate([
            'username' => ['required', 'unique:users', 'min:3'],
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['min:6', 'required', 'confirmed'],
        ]);
            $name = null;
        if($request->get('image_path')) {
            $image = $request->get('image_path');
          $name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
          Image::make($request->get('image_path'))->save(public_path('images/').$name);
        }
        $user= new User();
        $user->image_path = $name;
        $user->username = $request->username;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->role_id = 2;
        $user->save();
/*
        User::create([
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'image_path' => $name
        ]);*/
    }
}
