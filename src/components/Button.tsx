import { JSX } from "solid-js";

interface props {
  children: JSX.Element;
  type?: "right" | "equal";
  onClick?: () => void;
}

export default function Button(props: props) {
  return (
    <button
      class={`rounded-full bg-gradient-to-b from-[rgba(0,0,0,0.05)] to-[rgba(255,255,255,0.06)] bg-[#2d2a37] drop-shadow-lg aspect-square w-full h-full shadow-inner shadow-white/10 text-xl ${
        props.type === "right" && "bg-[#462878] text-2xl"
      } ${props.type === "equal" && "bg-[#7F45E2] text-2xl"}`}
      type="button"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
