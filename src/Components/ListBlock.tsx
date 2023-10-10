import React, { useState } from "react";
import { listArray } from "../Data/listArray";

export default function ListBlock () {
    return (
        <div className="list-block">
                    {listArray.map((item: any) => (
                    <div className='list'>
                        <img src={item.icon} className='icon-list' alt="Icon List" />
                        <p className='list-item'>{item.description}</p>
                    </div>
                    ))}
                </div>
    )
}