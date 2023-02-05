import Button from "~/components/Button";
import { Icon } from "solid-heroicons";
import { minus, plus, xMark } from "solid-heroicons/solid";

export default function CalculatorPage() {
  return (
    <main class="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-[#807ECE] to-[#8E7ECE] text-white">
      <div class="w-full max-w-sm rounded-3xl mx-auto drop-shadow-lg bg-[#2D2A37] bg-gradient-to-t from-[rgba(0,0,0,0.05)] to-[rgba(255,255,255,0.05)] p-12 grid gap-10 shadow-inner shadow-white/10">
        <div class="grid gap-4 px-4">
          <div class="flex justify-end text-[#6B6B6B] text-lg">1 + 1</div>
          <div class="flex justify-between items-center">
            <div class="text-[#6B6B6B] text-xl">=</div>
            <div class="text-4xl">2</div>
          </div>
        </div>
        <div class="grid grid-cols-4 gap-4">
          <Button>CE</Button>
          <Button>C</Button>
          <Button>%</Button>
          <Button type="right">÷</Button>

          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button type="right">
            <Icon path={xMark} class="w-6 h-6 flex justify-center mx-auto" />
          </Button>

          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button type="right">
            <Icon path={minus} class="w-6 h-6 flex justify-center mx-auto" />
          </Button>

          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button type="right">
            <Icon path={plus} class="w-6 h-6 flex justify-center mx-auto" />
          </Button>

          <Button>±</Button>
          <Button>0</Button>
          <Button>,</Button>
          <Button type="equal">=</Button>
        </div>
      </div>
    </main>
  );
}
