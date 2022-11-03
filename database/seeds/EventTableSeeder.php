<?php

use Illuminate\Database\Seeder;

class EventTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \Illuminate\Support\Facades\DB::table('events')->insert([
            [
                'title' => 'Reunião',
                'start' => '2022-08-04 21:30:00',
                'end' => '2022-08-05 21:30:00',
                'color' => '#c40233',
                'description' => 'Reunião com cliente'
            ],
            [
                'title' => 'Ligar p/cliente',
                'start' => '2022-08-02',
                'end' => '2022-08-03',
                'color' => '#29fdf2',
                'description' => 'Falar com cliente'
            ]
        ]);
    }
}
