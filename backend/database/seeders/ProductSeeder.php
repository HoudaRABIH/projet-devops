<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        Product::insert([
            [
                'name' => 'Amber',
                'price' => 650,
                'description' => 'Sac chocolat en cuir véritable, élégant et raffiné.',
                'category' => 'Sacs',
                'image' => 'sac1.jpg'
            ],
            [
                'name' => 'Leil',
                'price' => 780,
                'description' => 'Sac noir premium, moderne et chic.',
                'category' => 'Sacs',
                'image' => 'sac2.jpg'
            ],
            [
                'name' => 'Jade',
                'price' => 620,
                'description' => 'Sac vert olive, naturel et original.',
                'category' => 'Sacs',
                'image' => 'sac3.jpg'
            ],
            [
                'name' => 'Mocha',
                'price' => 720,
                'description' => 'Sac marron foncé, artisanal et durable.',
                'category' => 'Sacs',
                'image' => 'sac4.jpg'
            ],
            [
                'name' => 'Shadow',
                'price' => 590,
                'description' => 'Mini sac night black, pratique et élégant.',
                'category' => 'Sacs',
                'image' => 'sac5.jpg'
            ],
            [
                'name' => 'Sahara',
                'price' => 800,
                'description' => 'Sac marron authentique, fait main avec soin.',
                'category' => 'Sacs',
                'image' => 'sac6.jpg'
            ],
            [
                'name' => 'Assala',
                'price' => 350,
                'description' => 'Ceinture marron artisanale en cuir véritable.',
                'category' => 'Ceintures',
                'image' => 'ceinture1.jpg'
            ],
            [
                'name' => 'CHAMS',
                'price' => 480,
                'description' => 'Ceinture noire haut de gamme avec boucle dorée.',
                'category' => 'Ceintures',
                'image' => 'ceinture2.jpg'
            ],
            [
                'name' => 'Texas',
                'price' => 390,
                'description' => 'Ceinture noire large, style cowbow.',
                'category' => 'Ceintures',
                'image' => 'ceinture3.jpg'
            ],
            [
                'name' => 'Powder',
                'price' => 500,
                'description' => 'Ceinture marron luxe en cuir premium.',
                'category' => 'Ceintures',
                'image' => 'ceinture4.jpg'
            ]
        ]);
    }
}
