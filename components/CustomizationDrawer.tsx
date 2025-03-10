// "use client";

// import React from "react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { ColorTab } from "@/components/tabs/color-tab";
// import { TypographyTab } from "@/components/tabs/typography-tab";
// import { BorderTab } from "@/components/tabs/border-tab";
// import { X } from "lucide-react";

// interface DrawerProps {
//     isOpen: boolean;
//     onClose: () => void;
//     rectangleProps: {
//         primaryColor: string;
//         secondaryColor: string;
//         fontFamily: string;
//         borderRadius: number;
//         borderStyle: string;
//         borderWidth: number;
//         borderColor: string;
//     };
//     setRectangleProps: (props: any) => void;
// }

// export function Drawer({
//     isOpen,
//     onClose,
//     rectangleProps,
//     setRectangleProps,
// }: DrawerProps) {
//     const [activeTab, setActiveTab] = React.useState("color");

//     return (
//         <>
//             {isOpen && (
//                 <div
//                     className="fixed inset-0 bg-black/25 z-40"
//                     onClick={onClose}
//                 />
//             )}
//             <div
//                 className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-xl shadow-lg z-50 transition-transform duration-300 ease-in-out ${
//                     isOpen ? "translate-y-0" : "translate-y-full"
//                 }`}
//                 style={{ maxHeight: "80vh" }}
//             >
//                 {/* Drag handle */}
//                 <div className="w-full h-10 flex items-center justify-center">
//                     <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
//                 </div>

//                 <div className="flex justify-between items-center px-4 pb-2">
//                     <h2 className="text-lg font-semibold">Customize</h2>
//                     <button
//                         onClick={onClose}
//                         className="p-1 rounded-full hover:bg-gray-100"
//                     >
//                         <X className="h-5 w-5" />
//                     </button>
//                 </div>

//                 <div
//                     className="overflow-y-auto"
//                     style={{ maxHeight: "calc(80vh - 60px)" }}
//                 >
//                     <Tabs
//                         defaultValue="color"
//                         value={activeTab}
//                         onValueChange={setActiveTab}
//                         className="w-full"
//                     >
//                         <TabsList className="grid grid-cols-3 w-full">
//                             <TabsTrigger value="color">Color</TabsTrigger>
//                             <TabsTrigger value="typography">
//                                 Typography
//                             </TabsTrigger>
//                             <TabsTrigger value="border">Border</TabsTrigger>
//                         </TabsList>

//                         <TabsContent value="color" className="p-4">
//                             <ColorTab
//                                 primaryColor={rectangleProps.primaryColor}
//                                 secondaryColor={rectangleProps.secondaryColor}
//                                 onChange={(colors) => {
//                                     setRectangleProps({
//                                         ...rectangleProps,
//                                         ...colors,
//                                     });
//                                 }}
//                             />
//                         </TabsContent>

//                         <TabsContent value="typography" className="p-4">
//                             <TypographyTab
//                                 fontFamily={rectangleProps.fontFamily}
//                                 onChange={(typography) => {
//                                     setRectangleProps({
//                                         ...rectangleProps,
//                                         ...typography,
//                                     });
//                                 }}
//                             />
//                         </TabsContent>

//                         <TabsContent value="border" className="p-4">
//                             <BorderTab
//                                 borderRadius={rectangleProps.borderRadius}
//                                 borderStyle={rectangleProps.borderStyle}
//                                 borderWidth={rectangleProps.borderWidth}
//                                 borderColor={rectangleProps.borderColor}
//                                 onChange={(border) => {
//                                     setRectangleProps({
//                                         ...rectangleProps,
//                                         ...border,
//                                     });
//                                 }}
//                             />
//                         </TabsContent>
//                     </Tabs>
//                 </div>
//             </div>
//         </>
//     );
// }

"use client";

import * as React from "react";

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
        secondaryColor: string;
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
                <div className="mx-auto w-full max-w-sm h-[40dvh] overflow-y-scroll">
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
                                secondaryColor={rectangleProps.secondaryColor}
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
