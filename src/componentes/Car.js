import React from "react";

export default function Car(){

    const carros = [
        {categoria: "Esporte", preco: "110000.00", modelo: "Golf GTI"},
        {categoria: "Esporte", preco: "120000.00", modelo: "Camaro"},
        {categoria: "SUV", preco: "85000.00", modelo: "HRV"},
        {categoria: "SUV", preco: "83000.00", modelo: "T-Cross"},
        {categoria: "Utilitario", preco: "120000.00", modelo: "Hilux"},
        {categoria: "Utilitario", preco: "90000.00", modelo: "Ranger"}
    ];

    const listaCarros = carros.map(
        (c, i) =>
            <li className="flex-1 py-2" key={i}>{i} - {c.categoria} - {c.modelo} - R${c.preco}</li>
    )
    return (
        <>
            <ul className="flex-1 px-9">{listaCarros}</ul>
        </>
    );
}
