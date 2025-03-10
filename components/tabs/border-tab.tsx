"use client";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";

type BorderTabProps = {
    borderRadius: number;
    borderStyle: string;
    borderWidth: number;
    borderColor: string;
    onChange: (border: {
        borderRadius?: number;
        borderStyle?: string;
        borderWidth?: number;
        borderColor?: string;
    }) => void;
};

export function BorderTab({
    borderRadius,
    borderStyle,
    borderWidth,
    borderColor,
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
                    max={32}
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

            <Separator />

            <div className="space-y-2">
                <Label htmlFor="border-color">Border Color</Label>
                <div className="flex items-center gap-4">
                    <div
                        className="w-10 h-10 rounded-md border shadow-sm"
                        style={{ backgroundColor: borderColor }}
                    />
                    <input
                        id="border-color"
                        type="color"
                        value={borderColor}
                        onChange={(e) =>
                            onChange({ borderColor: e.target.value })
                        }
                        className="w-full h-10"
                    />
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                    {borderColor}
                </div>
            </div>
        </div>
    );
}
