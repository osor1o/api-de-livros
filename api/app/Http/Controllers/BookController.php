<?php

namespace App\Http\Controllers;

use Validator;
use Illuminate\Http\Request;
use App\Book;
use Mockery\CountValidator\Exception;

class BookController extends Controller
{
    
    public function show() {
        $books = Book::orderBy('created_at', 'desc')->get();
        return response($books)
            ->header('Content-Type', 'application/json');
    }

    public function insert(Request $request) {
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'price' => 'required',
            'width' => 'required',
            'height' => 'required',
            'length' => 'required',
            'weight' => 'required',
            'firstName' => 'required',
            'lastName' => 'required',
            'cellPhone' => 'required',
            'cep' => 'required'
        ]);

        if($validator->fails()) {
            return response(null, 401);
        }

        $request["price"] = (double) $request["price"];
        $request["width"] = (int) $request["width"];
        $request["height"] = (int) $request["height"];
        $request["length"] = (int) $request["length"];
        $request["weight"] = (double) $request["weight"];
        
        Book::create($request->all());
        return response(null, 200);
    }

}
