<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function login(Request $request){
        $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);

        // if(Auth::attempt($request->only('email','password'))){
        //     return response()->json(Auth::user(), 200);
        // }
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password], $request->remember)){
            return response()->json(Auth::user(), 200);
        }
        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.']
        ]);
    }

    /*public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return response()->json(Auth::user(),200);
        }

        throw ValidationException::withMessages([
                     'email' => ['The provided credentials are incorrect.']
                ]);
    }*/

    public function logout(){
        Auth::logout();
    }

    public function user(Request $request){
        // $user_id = $request->user()->id;
        // $user = User::find($user_id)->with('roles');
        // $user = auth()->user();
        $user = User::with('role')->find(Auth::id());

        $data = [
            'username' => $user->username,
            'image_path' => $user->image_path,
            'email' => $user->email,
            'role' => $user->role->name,
            'register_date' => $user->created_at->format('Y-m-d')
        ];

        return $data;

    }

}
