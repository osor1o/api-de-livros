<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cep extends Model
{
    protected $fillable = [
        'tipo', // Separar opções por vírgula (,) caso queira consultar mais de um (1) serviço. > Opções: `sedex`, `sedex_a_cobrar`, `sedex_10`, `sedex_hoje`, `pac`, 'pac_contrato', 'sedex_contrato' , 'esedex'
        'formato', // opções: `caixa`, `rolo`, `envelope`
        'cep_destino', // Obrigatório
        'cep_origem', // Obrigatorio
        'peso', // Peso em kilos
        'comprimento', // Em centímetros
        'altura', // Em centímetros
        'largura', // Em centímetros
    ];
}
