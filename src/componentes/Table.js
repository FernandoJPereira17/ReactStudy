import React from "react";

export default function Table(){
    return(
        <tr className="table px-2 border border-black">
            <td className=" gap-2 px-2 py-2">Name</td>
            <td className="gap-2 px-2 py-2">Lastname</td>
            <td className="gap-2 px-2 py-2">Email</td>
            <td className="gap-2 px-2 py-2">Celular</td>
            <td className="gap-2 px-2 py-2">Sexo</td>
        </tr>
    );
}