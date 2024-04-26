<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\PedidoDeCompra;
use Illuminate\Http\Request;

class PedidoDeCompraController extends Controller
{
    public function index()
    {
        $pedidos = PedidoDeCompra::all();
        return response()->json($pedidos);
    }


    public function store(Request $request)
    {
        $request->validate([
            'cliente_id' => 'required|exists:clientes,id',
            'status' => 'required|in:Em Aberto,Pago,Cancelado',
        ]);

        $pedido = PedidoDeCompra::create($request->all());
        return response()->json($pedido, 201);
    }

    public function show($id)
    {
        $pedido = PedidoDeCompra::findOrFail($id);
        return response()->json($pedido);
    }

    public function edit($id)
    {
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'cliente_id' => 'required|exists:clientes,id',
            'status' => 'required|in:Em Aberto,Pago,Cancelado',
        ]);

        $pedido = PedidoDeCompra::findOrFail($id);
        $pedido->update($request->all());
        return response()->json($pedido, 200);
    }

    public function destroy($id)
    {
        $pedido = PedidoDeCompra::findOrFail($id);
        $pedido->delete();
        return response()->json(null, 204);
    }
}
