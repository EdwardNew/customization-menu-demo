"use client";

import { useState } from "react";
import { CustomizationDrawer } from "@/components/CustomizationDrawer";
import { Rectangle } from "@/components/rectangle";

export default function Home() {
    const [rectangleProps, setRectangleProps] = useState({
        primaryColor: "#3b82f6",
        secondaryColor: "#60a5fa",
        fontFamily: "Inter",
        borderRadius: 8,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "#000000",
    });

    return (
        <main className="flex min-h-screen flex-col p-4 bg-gray-50">
            <Rectangle {...rectangleProps} />

            <CustomizationDrawer
                rectangleProps={rectangleProps}
                setRectangleProps={setRectangleProps}
            />
        </main>
    );
}
