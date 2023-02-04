interface props {
  children: string;
}

export default function Button(props: props) {
  return (
    <button class="rounded-full bg-gradient-to-b from-[rgba(0,0,0,0.05)] to-[rgba(255,255,255,0.06)] bg-[#2d2a37] drop-shadow aspect-square w-full h-full shadow-inner shadow-white/10 text-lg">
      {props.children}
    </button>
  );
}
