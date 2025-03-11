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
        <ColorSlider {...props}>
            <Label>{label}</Label>
            <SliderOutput />
            <SliderTrack className="h-8 w-full">
                <ColorThumb />
            </SliderTrack>
        </ColorSlider>
    );
}

<MyColorSlider label="Red Opacity" defaultValue="#f00" channel="alpha" />;
