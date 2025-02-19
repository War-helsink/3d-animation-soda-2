"use client";

import { forwardRef } from "react";
import { Float } from "@react-three/drei";

import { SodaCan, type SodaCanProps } from "@/components/soda-can";
import type { Group } from "three";

export interface FloatingCanProps {
	flavor?: SodaCanProps["flavor"];
	floatSpeed?: number;
	rotationIntensity?: number;
	floatIntensity?: number;
	floatingRange?: [number, number];
	children?: React.ReactNode;
}

const FloatingCan = forwardRef<Group, FloatingCanProps>(
	(
		{
			flavor = "blackCherry",
			floatSpeed = 1.5,
			rotationIntensity = 1,
			floatIntensity = 1,
			floatingRange = [-0.1, 0.1],
			children,
			...props
		},
		ref,
	) => {
		return (
			<group ref={ref} {...props}>
				<Float
					speed={floatSpeed}
					rotationIntensity={rotationIntensity}
					floatIntensity={floatIntensity}
					floatingRange={floatingRange}
				>
					{children}
					<SodaCan flavor={flavor} />
				</Float>
			</group>
		);
	},
);

FloatingCan.displayName = "FloatingCan";

export { FloatingCan };
