"use client";
import { Label } from "@/components/ui/label";
import { MyColorSlider } from "../MyColorSlider";

type ColorTabProps = {
    primaryColor: string;
    onChange: (primaryColor: { primaryColor: string }) => void;
};

export function ColorTab({ primaryColor, onChange }: ColorTabProps) {
    return (
        <div className="flex justify-evenly">
            <div className="space-y-2 flex flex-col items-center">
                <Label htmlFor="primary-color">Primary Color</Label>
                <div className="flex items-center gap-4"></div>
                <div
                    className="text-sm text-muted-foreground mt-1"
                    style={{ backgroundColor: primaryColor }}
                >
                    {primaryColor}
                </div>
            </div>

            <MyColorSlider
                className="w-full h-8"
                channel="hue"
                label="hue"
                value={primaryColor}
                onChange={(value) =>
                    onChange({ primaryColor: value.toString("hsl") })
                }
            />
            <MyColorSlider
                className="w-full h-8"
                channel="saturation"
                label="saturation"
                value={primaryColor}
                onChange={(value) =>
                    onChange({ primaryColor: value.toString("hsl") })
                }
            />
            <MyColorSlider
                className="w-full h-8"
                channel="lightness"
                label="lightness"
                value={primaryColor}
                onChange={(value) =>
                    onChange({ primaryColor: value.toString("hsl") })
                }
            />
        </div>
    );
}
