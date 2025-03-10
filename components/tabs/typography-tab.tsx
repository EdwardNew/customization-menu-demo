"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Check } from "lucide-react";

type TypographyTabProps = {
    fontFamily: string;
    onChange: (typography: { fontFamily: string }) => void;
};

export function TypographyTab({ fontFamily, onChange }: TypographyTabProps) {
    const fonts = [
        { value: "Inter", label: "Inter" },
        { value: "Arial", label: "Arial" },
        { value: "Helvetica", label: "Helvetica" },
        { value: "Georgia", label: "Georgia" },
        { value: "Times New Roman", label: "Times New Roman" },
        { value: "Courier New", label: "Courier New" },
        { value: "monospace", label: "Monospace" },
        { value: "cursive", label: "Cursive" },
    ];

    return (
        <div className="space-y-6">
            <div>
                <Label className="text-base">Font Family</Label>
                <RadioGroup
                    value={fontFamily}
                    onValueChange={(value) => onChange({ fontFamily: value })}
                    className="mt-3"
                >
                    {fonts.map((font) => (
                        <div
                            key={font.value}
                            className="flex items-center space-x-2 border-t-2 py-2 hover:bg-muted"
                        >
                            <RadioGroupItem
                                value={font.value}
                                id={`font-${font.value}`}
                                className="hidden"
                            />
                            <Label
                                htmlFor={`font-${font.value}`}
                                className="flex-1 flex justify-between cursor-pointer p-2 rounded-md"
                                style={{ fontFamily: font.value }}
                            >
                                <span className="text-lg">DF 25</span>
                                {fontFamily === font.value && <Check />}
                            </Label>
                        </div>
                    ))}
                </RadioGroup>
            </div>
        </div>
    );
}
