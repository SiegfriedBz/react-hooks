import { useState } from "react";

export default function useToggle(initialValue) {
    const [value, setValue] = useState(initialValue)

    const toggleValue = (value) => {
        setValue(currentValue => {
            return typeof value === "boolean" ? value : !currentValue
        })
    }

    return [value, toggleValue]
}