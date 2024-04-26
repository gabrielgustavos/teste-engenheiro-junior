<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClienteController;
use App\Http\Controllers\ProdutoController;
use App\Http\Controllers\PedidoDeCompraController;

// Importando o middleware CORS
use App\Http\Middleware\CorsMiddleware;

Route::get('/', function () {
    return view('welcome');
});

// Rotas para Clientes
Route::middleware([CorsMiddleware::class])->group(function () {
    Route::get('/clientes', [ClienteController::class, 'index']);
    Route::post('/clientes', [ClienteController::class, 'store']);
    Route::get('/clientes/{id}', [ClienteController::class, 'show']);
    Route::put('/clientes/{id}', [ClienteController::class, 'update']);
    Route::delete('/clientes/{id}', [ClienteController::class, 'destroy']);

    // Rotas para Produtos
    Route::get('/produtos', [ProdutoController::class, 'index']);
    Route::post('/produtos', [ProdutoController::class, 'store']);
    Route::get('/produtos/{id}', [ProdutoController::class, 'show']);
    Route::put('/produtos/{id}', [ProdutoController::class, 'update']);
    Route::delete('/produtos/{id}', [ProdutoController::class, 'destroy']);

    // Rotas para Pedidos de Compra
    Route::get('/pedidos', [PedidoDeCompraController::class, 'index']);
    Route::post('/pedidos', [PedidoDeCompraController::class, 'store']);
    Route::get('/pedidos/{id}', [PedidoDeCompraController::class, 'show']);
    Route::put('/pedidos/{id}', [PedidoDeCompraController::class, 'update']);
    Route::delete('/pedidos/{id}', [PedidoDeCompraController::class, 'destroy']);
});
