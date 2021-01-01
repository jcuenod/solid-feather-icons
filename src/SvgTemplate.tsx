type Props = {
    color?: string;
    size?: number;
    strokeWidth?: number;
}
const SvgTemplate = (...children: any) => (props: Props) =>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke={props.color || "currentColor"}
        stroke-width={props.strokeWidth || 2}
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-activity"
    >
        {children}
    </svg>

export default SvgTemplate
