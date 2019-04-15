<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Correios;

class CepController extends Controller
{
    public function find(Request $request) {
        $request->request->add(['diametro' => 0]);
        $result = Correios::frete($request->all());
        return response(json_encode($result))
            ->header('Content-Type', 'application/json');
    }
}
