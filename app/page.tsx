"use client";
import { useState } from "react";
import { Rectangle } from "@/components/rectangle";
import { CustomizationDrawer } from "@/components/CustomizationDrawer";

export default function Home() {
    const [rectangleProps, setRectangleProps] = useState({
        primaryColor: "hsl(354, 100%, 90%)",
        accentColor: "hsl(287, 81%, 22%)",
        fontFamily: "Inter",
        borderRadius: 64,
        borderStyle: "solid",
        borderWidth: 3,
    });

    return (
        <main className="flex min-h-screen flex-col items-center p-4 bg-gray-50">
            <Rectangle {...rectangleProps} />

            <CustomizationDrawer
                rectangleProps={rectangleProps}
                setRectangleProps={setRectangleProps}
            />
        </main>
    );
}
