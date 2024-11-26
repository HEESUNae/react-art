import { StyledSubBanner } from "./sub-banner.style";

interface SubBannerProps {
    content: string;
    bgUrl: string;
}

export function SubBanner({content, bgUrl}:SubBannerProps){
    return(
        <StyledSubBanner bgUrl={bgUrl}>
            {content}
        </StyledSubBanner>
    )
}