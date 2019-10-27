<?php

use Illuminate\Database\Seeder;

class FastEventTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \Illuminate\Support\Facades\DB::table('fast_events')->insert([
            [
                'title' => 'Almoço c/cliente',
                'start' => '11:30:00',
                'end' => '13:00:00',
                'color' => '#c40233'
            ],
            [
                'title' => 'Academia',
                'start' => '18:30:00',
                'end' => '20:00:00',
                'color' => '#29fdf2'
            ]
        ]);
    }
}
