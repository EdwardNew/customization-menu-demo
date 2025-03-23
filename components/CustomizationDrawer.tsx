"use client";
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { BorderTab } from "@/components/tabs/border-tab";
import { TypographyTab } from "@/components/tabs/typography-tab";
import { ColorTab } from "@/components/tabs/color-tab";

type CustomizationDrawerProps = {
    rectangleProps: {
        primaryColor: string;
        accentColor: string;
        fontFamily: string;
        borderRadius: number;
        borderStyle: string;
        borderWidth: number;
    };
    setRectangleProps: (props: any) => void;
};

export function CustomizationDrawer({
    rectangleProps,
    setRectangleProps,
}: CustomizationDrawerProps) {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="outline">Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent
                style={{
                    borderRadius: "40px 40px 0px 0px",
                    background:
                        "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 50%, rgba(0, 0, 0, 0.50) 100%), linear-gradient(180deg, rgba(245, 245, 245, 0.00) 0%, #F5F5F5 32.42%)",
                    backgroundBlendMode: "soft-light, lighten",
                    boxShadow:
                        "0px 0px 0px 1px #000, 0px 3px 0.75px 0px #FFF inset, 0px -1.5px 1.5px 0px #FFF inset, 0px -3px 6px 0px rgba(55, 55, 55, 0.16) inset, 0px 0.75px 1.5px 0px #373737 inset, 0px 0px 60px 0px rgba(55, 55, 55, 0.16)",
                    backdropFilter: "blur(40px)",
                }}
            >
                <div className="mx-auto w-full max-w-sm h-[60dvh] overflow-y-scroll">
                    <DrawerTitle className="invisible">
                        Customize Card
                    </DrawerTitle>
                    <Tabs defaultValue="color" className="w-full">
                        <TabsList className="grid grid-cols-3 w-full">
                            <TabsTrigger value="color">Color</TabsTrigger>
                            <TabsTrigger value="typography">
                                Typography
                            </TabsTrigger>
                            <TabsTrigger value="border">Border</TabsTrigger>
                        </TabsList>

                        <TabsContent value="color" className="p-4">
                            <ColorTab
                                primaryColor={rectangleProps.primaryColor}
                                accentColor={rectangleProps.accentColor}
                                onChange={(colors) => {
                                    setRectangleProps({
                                        ...rectangleProps,
                                        ...colors,
                                    });
                                }}
                            />
                        </TabsContent>

                        <TabsContent value="typography" className="p-4">
                            <TypographyTab
                                fontFamily={rectangleProps.fontFamily}
                                onChange={(typography) => {
                                    setRectangleProps({
                                        ...rectangleProps,
                                        ...typography,
                                    });
                                }}
                            />
                        </TabsContent>

                        <TabsContent value="border" className="p-4">
                            <BorderTab
                                borderRadius={rectangleProps.borderRadius}
                                borderStyle={rectangleProps.borderStyle}
                                borderWidth={rectangleProps.borderWidth}
                                onChange={(border) => {
                                    setRectangleProps({
                                        ...rectangleProps,
                                        ...border,
                                    });
                                }}
                            />
                        </TabsContent>
                    </Tabs>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
