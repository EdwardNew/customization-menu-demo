"use client";
import { MyColorSlider } from "../MyColorSlider";
import { parseColor } from "react-stately";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";

type ColorTabProps = {
    primaryColor: string;
    accentColor: string;
    onChange: (value: { [x: string]: string }) => void;
};

type selectedColor = "primary" | "accent";

export function ColorTab({
    primaryColor,
    accentColor,
    onChange,
}: ColorTabProps) {
    const [selectedColor, setSelectedColor] =
        useState<selectedColor>("primary");

    const [contrastIsGood, setContrastIsGood] = useState<boolean>();

    async function CheckContrast(primaryColor: string, accentColor: string) {
        const primaryHex = parseColor(primaryColor).toString("hex");
        const accentHex = parseColor(accentColor).toString("hex");

        try {
            const response = await fetch(
                `https://webaim.org/resources/contrastchecker/?fcolor=${primaryHex.slice(
                    1
                )}&bcolor=${accentHex.slice(1)}&api`
            );
            if (!response.ok) {
                throw new Error("Failed to fetch contrast data");
            }

            const data = await response.json();

            console.log(data);
            return data.AA === "pass";
        } catch (err) {
            console.warn(err);
        }
    }

    useEffect(() => {
        CheckContrast(primaryColor, accentColor).then((result) =>
            setContrastIsGood(result)
        );
    }, [primaryColor, accentColor]);

    return (
        <div className="flex justify-evenly">
            <div className="space-y-8 flex flex-col items-center">
                <span className="flex gap-2">
                    <span
                        onClick={() => {
                            setSelectedColor("primary");
                        }}
                        className={`text-sm text-black border-black mt-1 border-2 rounded-full p-2 flex justify-around transition-all duration-300 ${
                            selectedColor === "primary" ? "w-56" : "w-20"
                        }`}
                        style={{ backgroundColor: primaryColor }}
                    >
                        <p>Primary</p>

                        <p
                            className={`transition-all duration-300 overflow-hidden ${
                                selectedColor === "primary"
                                    ? "opacity-100 max-w-full"
                                    : "opacity-0 max-w-0"
                            }`}
                        >
                            {parseColor(primaryColor).toString("hex")}
                        </p>
                    </span>
                    <span
                        onClick={() => {
                            setSelectedColor("accent");
                        }}
                        className={`text-sm text-black border-black mt-1 border-2 rounded-full p-2 flex justify-around transition-all duration-300 ${
                            selectedColor === "accent" ? "w-56" : "w-20"
                        }`}
                        style={{ backgroundColor: accentColor }}
                    >
                        <p>Accent</p>
                        <p
                            className={`transition-all duration-300 overflow-hidden ${
                                selectedColor === "accent"
                                    ? "opacity-100 max-w-full"
                                    : "opacity-0 max-w-0"
                            }`}
                        >
                            {parseColor(accentColor).toString("hex")}
                        </p>
                    </span>
                </span>
                {selectedColor === "primary" ? (
                    <div className="w-full">
                        <MyColorSlider
                            className="w-full"
                            channel="hue"
                            label="hue"
                            value={primaryColor}
                            onChange={(value) =>
                                onChange({
                                    primaryColor: value.toString("hsl"),
                                })
                            }
                        />
                        <MyColorSlider
                            className="w-full"
                            channel="saturation"
                            label="saturation"
                            value={primaryColor}
                            onChange={(value) =>
                                onChange({
                                    primaryColor: value.toString("hsl"),
                                })
                            }
                        />
                        <MyColorSlider
                            className="w-full"
                            channel="lightness"
                            label="lightness"
                            value={primaryColor}
                            onChange={(value) =>
                                onChange({
                                    primaryColor: value.toString("hsl"),
                                })
                            }
                        />{" "}
                    </div>
                ) : (
                    <div className="w-full">
                        <MyColorSlider
                            className="w-full"
                            channel="hue"
                            label="hue"
                            value={accentColor}
                            onChange={(value) =>
                                onChange({
                                    accentColor: value.toString("hsl"),
                                })
                            }
                        />
                        <MyColorSlider
                            className="w-full"
                            channel="saturation"
                            label="saturation"
                            value={accentColor}
                            onChange={(value) =>
                                onChange({
                                    accentColor: value.toString("hsl"),
                                })
                            }
                        />
                        <MyColorSlider
                            className="w-full"
                            channel="lightness"
                            label="lightness"
                            value={accentColor}
                            onChange={(value) =>
                                onChange({
                                    accentColor: value.toString("hsl"),
                                })
                            }
                        />
                    </div>
                )}
                <span className="w-full flex gap-8 items-center">
                    <p className="text-xl">Contrast</p>
                    <span
                        className="flex items-center uppercase text-sm rounded-full px-1.5 py-0.5"
                        style={{
                            backgroundColor: contrastIsGood
                                ? "#BEFCB6"
                                : "#FFB6B6",
                            color: contrastIsGood ? "#078D00" : "#CF1414",
                        }}
                    >
                        <Check className="w-5 h-5 stroke-[2px]" />
                        ui
                    </span>
                </span>
            </div>
        </div>
    );
}
