"use client";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";

type BorderTabProps = {
    borderRadius: number;
    borderStyle: string;
    borderWidth: number;
    onChange: (border: {
        borderRadius?: number;
        borderStyle?: string;
        borderWidth?: number;
    }) => void;
};

export function BorderTab({
    borderRadius,
    borderStyle,
    borderWidth,
    onChange,
}: BorderTabProps) {
    const borderStyles = [
        { value: "solid", label: "Solid" },
        { value: "dashed", label: "Dashed" },
        { value: "dotted", label: "Dotted" },
        { value: "double", label: "Double" },
        { value: "none", label: "None" },
    ];

    return (
        <div className="space-y-6 py-6">
            <div className="space-y-2">
                <Label htmlFor="border-radius">
                    Corner Radius: {borderRadius}px
                </Label>
                <Slider
                    id="border-radius"
                    min={0}
                    max={128}
                    step={1}
                    value={[borderRadius]}
                    onValueChange={(value) =>
                        onChange({ borderRadius: value[0] })
                    }
                    className="mt-2"
                />
            </div>

            <Separator />

            <div className="space-y-2">
                <Label htmlFor="border-width">
                    Border Width: {borderWidth}px
                </Label>
                <Slider
                    id="border-width"
                    min={0}
                    max={10}
                    step={1}
                    value={[borderWidth]}
                    onValueChange={(value) =>
                        onChange({ borderWidth: value[0] })
                    }
                    className="mt-2"
                />
            </div>

            <Separator />

            <div className="space-y-2">
                <Label>Border Style</Label>
                <RadioGroup
                    value={borderStyle}
                    onValueChange={(value) => onChange({ borderStyle: value })}
                    className="mt-2 grid grid-cols-2 gap-2"
                >
                    {borderStyles.map((style) => (
                        <div
                            key={style.value}
                            className="flex items-center space-x-2"
                        >
                            <RadioGroupItem
                                value={style.value}
                                id={`style-${style.value}`}
                            />
                            <Label
                                htmlFor={`style-${style.value}`}
                                className="cursor-pointer"
                            >
                                {style.label}
                            </Label>
                        </div>
                    ))}
                </RadioGroup>
            </div>
        </div>
    );
}
