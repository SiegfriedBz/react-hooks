import { useState } from "react";

export function useToggle(initialValue) {
    const [value, setValue] = useState(initialValue)

    const toggleValue = (value) => {
        setValue(currentValue => {
            return typeof value === "boolean" ? value : !currentValue
        })
    }

    return [value, toggleValue]
}