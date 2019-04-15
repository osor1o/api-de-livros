<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Correios;

class CepController extends Controller
{
    public function find(Request $request) {
        if(strlen($request['cep_destino']) !== 8) return response(null, 401);
        $request['diametro'] = 0;
        $result = Correios::frete($request->all());
        return response(json_encode($result))
            ->header('Content-Type', 'application/json');
    }
}
