import { FizziLogo } from "@/components/fizzi-logo";
import { CircleText } from "@/components/circle-text";
import { GithubLink } from "@/components/github-link";

export const Footer: React.FC = () => {
	return (
		<footer className="bg-[#FEE832] text-[#FE6334]">
			<div className="relative mx-auto flex w-full max-w-4xl justify-center px-4 py-10">
				<FizziLogo />
				<GithubLink className="absolute right-0 bottom-1/2 transform translate-y-1/2" />

				<div className="absolute right-24 top-0 size-28 origin-center -translate-y-14 md:size-48 md:-translate-y-28">
					<CircleText />
				</div>
			</div>
		</footer>
	);
};
