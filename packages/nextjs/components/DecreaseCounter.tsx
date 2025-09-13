"use client";

import { useScaffoldWriteContract } from "~~/hooks/scaffold-stark/useScaffoldWriteContract";
import { CONTRACT_NAME } from "~~/utils/Constants";

interface DecreaseCounterProps {
    counter: number
}

export const DecreaseCounter = ({counter}: DecreaseCounterProps) => {
    const {sendAsync, isPending} = useScaffoldWriteContract({
        contractName: CONTRACT_NAME,
        functionName: "decrease_counter",
    });

    const handleDecreaseCounter = async () => {
        try{
            await sendAsync();
        } catch(e) {
            console.error("Error decreasing counter", e);
        }
    };

    const isZero = counter == 0;

    return (
        <button
            onClick = {handleDecreaseCounter}
            disabled = {isPending || isZero}
            className = "btn btn-primary">
                Decrease Counter
        </button>
    );
};