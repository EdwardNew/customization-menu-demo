import type { ColorSliderProps } from "react-aria-components";
import {
    ColorSlider,
    Label,
    SliderOutput,
    SliderTrack,
    ColorThumb,
} from "react-aria-components";

interface MyColorSliderProps extends ColorSliderProps {
    label?: string;
}

export function MyColorSlider({ label, ...props }: MyColorSliderProps) {
    return (
        <ColorSlider
            {...props}
            className="grid grid-cols-[1fr_auto] flex-col items-center gap-2"
        >
            <Label>{label}</Label>
            <SliderOutput className="text-sm text-gray-500 dark:text-zinc-400 font-medium" />
            <SliderTrack className="flex-none col-span-2 rounded-lg w-full h-2">
                <ColorThumb className="w-8 h-8 top-[50%] left-[50%] rounded-full border-2 border-white " />
            </SliderTrack>
        </ColorSlider>
    );
}
