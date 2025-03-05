"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "src/utils/common";

interface AnimatedGridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: any;
  numSquares?: number;
  className?: string;
  maxOpacity?: number;
  duration?: number;
}

const getPos = (width: number, height: number, dimensions: Record<"width" | "height", number>) => {
  return [
    Math.floor((Math.random() * dimensions.width) / width),
    Math.floor((Math.random() * dimensions.height) / height),
  ];
};

const generateSquares = (
  count: number,
  width: number,
  height: number,
  dimensions: Record<"width" | "height", number>,
) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    pos: getPos(width, height, dimensions),
  }));
};

export const AnimatedGridBackground = ({
  width = 80,
  height = 80,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 50,
  className,
  maxOpacity = 0.5,
  duration = 4,
  ...props
}: AnimatedGridPatternProps) => {
  const id = React.useId();
  const containerRef = React.useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });
  const [squares, setSquares] = React.useState(() =>
    generateSquares(numSquares, width, height, dimensions),
  );

  const updateSquarePosition = (id: number) => {
    setSquares((currentSquares) =>
      currentSquares.map((sq) =>
        sq.id === id
          ? {
              ...sq,
              pos: getPos(width, height, dimensions),
            }
          : sq,
      ),
    );
  };

  React.useEffect(() => {
    if (dimensions.width && dimensions.height) {
      setSquares(generateSquares(numSquares, width, height, dimensions));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dimensions, numSquares]);

  React.useEffect(() => {
    const container = containerRef.current;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    if (container) {
      resizeObserver.observe(container);
    }

    return () => {
      if (container) {
        resizeObserver.unobserve(container);
      }
    };
  }, [containerRef]);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
        className,
      )}
      {...props}
    >
      <defs>
        <pattern id={id} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" strokeDasharray={strokeDasharray} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {squares.map(({ pos: [x, y], id }, index) => (
          <motion.rect
            initial={{ opacity: 0 }}
            animate={{ opacity: maxOpacity }}
            transition={{
              duration,
              repeat: 1,
              delay: index * 0.1,
              repeatType: "reverse",
            }}
            onAnimationComplete={() => updateSquarePosition(id)}
            key={`${x}-${y}-${index}`}
            width={width - 1}
            height={height - 1}
            x={x * width + 1}
            y={y * height + 1}
            fill="currentColor"
            strokeWidth="0"
          />
        ))}
      </svg>
    </svg>
  );
};
