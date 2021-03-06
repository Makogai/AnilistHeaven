<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */

    public function messages()
    {
        return [

            'username.required'=> 'Morate unijeti tekst ME!',
            'email.required'=> 'Morate unijeti E-mail!',

        ];
    }

    public function rules()
    {
        return [
            'username' => "required|min:3|unique:users",
            'email' => "required|email|unique:users",
            'password' => "required|min:6"
        ];
    }
}
