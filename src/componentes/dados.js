import React from "react";


export default function Dados(props) {
    const n1=20;
    const n2=10;

    return (
        <>
            <section className="gap-2 px-5 py-3 border border-black rounded-md">
                <p>Canal:{props.canal()} </p>
                <p>Youtube:{props.youtube} </p>
                <p>Curso:{props.curso} </p>
                <p className="py-5">{'A soma de ' + n1 + ' com ' + n2 + ' é igual = ' + props.somar(n1, n2)}</p>
            </section>
        </>
    );
}
