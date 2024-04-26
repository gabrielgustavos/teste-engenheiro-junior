<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PedidoDeCompra extends Model
{
    use HasFactory;

    protected $table = 'pedidos_de_compra';

    protected $fillable = [
        'cliente_id',
        'status',
    ];

    public function cliente()
    {
        return $this->belongsTo(Cliente::class);
    }
}
