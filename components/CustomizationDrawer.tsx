"use client";
// import * as React from "react";
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
        borderColor: string;
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
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm h-[60dvh] overflow-y-scroll">
                    <DrawerTitle className="invisible">Move Goal</DrawerTitle>
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
                                borderColor={rectangleProps.borderColor}
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
