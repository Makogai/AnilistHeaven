<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $name = [
            'Admin',
            'Member'
        ];
        for($i = 0; $i<count($name); $i++){
            Role::create([
                'name' => $name[$i],
            ]);
        }
    }
}
