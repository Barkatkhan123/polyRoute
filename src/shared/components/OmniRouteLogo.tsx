/**
 * OmniRoute logo SVG — network hub icon with connected nodes.
 * Matches the favicon and app icon design.
 */
type OmniRouteLogoProps = {
  size?: number;
  className?: string;
};

export default function OmniRouteLogo({ size = 20, className = "" }: OmniRouteLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <polygon points="16,2 29,9 29,23 16,30 3,23 3,9" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <polygon points="16,8 24,12 24,20 16,24 8,20 8,12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <line x1="16" y1="2" x2="16" y2="8" stroke="currentColor" strokeWidth="2" />
      <line x1="29" y1="9" x2="24" y2="12" stroke="currentColor" strokeWidth="2" />
      <line x1="29" y1="23" x2="24" y2="20" stroke="currentColor" strokeWidth="2" />
      <line x1="16" y1="30" x2="16" y2="24" stroke="currentColor" strokeWidth="2" />
      <line x1="3" y1="23" x2="8" y2="20" stroke="currentColor" strokeWidth="2" />
      <line x1="3" y1="9" x2="8" y2="12" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
