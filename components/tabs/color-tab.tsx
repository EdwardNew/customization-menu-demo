"use client";

import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface ColorTabProps {
    primaryColor: string;
    secondaryColor: string;
    onChange: (colors: {
        primaryColor: string;
        secondaryColor: string;
    }) => void;
}

export function ColorTab({
    primaryColor,
    secondaryColor,
    onChange,
}: ColorTabProps) {
    return (
        <div className="flex justify-evenly">
            <div className="space-y-2 flex flex-col items-center">
                <Label htmlFor="primary-color">Primary Color</Label>
                <div className="flex items-center gap-4">
                    <input
                        id="primary-color"
                        type="color"
                        value={primaryColor}
                        onChange={(e) =>
                            onChange({
                                primaryColor: e.target.value,
                                secondaryColor,
                            })
                        }
                        className="w-12 h-12 rounded-md border shadow-sm"
                    />
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                    {primaryColor}
                </div>
            </div>

            <div className="space-y-2 flex flex-col items-center">
                <Label htmlFor="secondary-color">Secondary Color</Label>
                <div className="flex items-center gap-4">
                    <input
                        id="secondary-color"
                        type="color"
                        value={secondaryColor}
                        onChange={(e) =>
                            onChange({
                                primaryColor,
                                secondaryColor: e.target.value,
                            })
                        }
                        className="w-12 h-12 rounded-md border shadow-sm"
                    />
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                    {secondaryColor}
                </div>
            </div>
        </div>
    );
}
