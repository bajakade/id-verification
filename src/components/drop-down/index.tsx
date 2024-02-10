import { IOption } from "@/types"
import React from "react"
import { UseFormRegister } from "react-hook-form"

export const Dropdown = React.forwardRef<
HTMLSelectElement,
{ label?: string, options: Array<IOption>, className?: string } & ReturnType<UseFormRegister<any>>
>(({ onChange, onBlur, name, label, options, className }, ref) => {
    return (
        <>
            {label && <label>{label}</label>}
            <select name={name} ref={ref} onChange={onChange} onBlur={onBlur} className={className || ''}>
                {options.map(({name, value}) => (
                    <option key={value} value={value}>{name}</option>
                ))}
            </select>
        </>
    )
});

Dropdown.displayName = "DropDown";