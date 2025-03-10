type RectangleProps = {
    primaryColor: string;
    secondaryColor: string;
    fontFamily: string;
    borderRadius: number;
    borderStyle: string;
    borderWidth: number;
    borderColor: string;
};

export function Rectangle({
    primaryColor,
    secondaryColor,
    fontFamily,
    borderRadius,
    borderStyle,
    borderWidth,
    borderColor,
}: RectangleProps) {
    const gradientStyle = {
        background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
        fontFamily,
        borderRadius: `${borderRadius}px`,
        borderStyle,
        borderWidth: `${borderWidth}px`,
        borderColor,
    };

    return (
        <div
            className="w-full max-w-md h-64 flex items-center justify-center text-white shadow-lg"
            style={gradientStyle}
        >
            <p className="text-2xl font-semibold">DF 25</p>
        </div>
    );
}
