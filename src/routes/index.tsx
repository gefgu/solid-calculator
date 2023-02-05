import Button from "~/components/Button";
import { Icon } from "solid-heroicons";
import { minus, plus, xMark } from "solid-heroicons/solid";
import { createSignal } from "solid-js";

type operator = "multiply" | "divide" | "plus" | "minus";

export default function CalculatorPage() {
  const [leftSide, setLeftSide] = createSignal<number | null>(null);
  const [rightSide, setRightSide] = createSignal<number | null>(null);
  const [isOnLeftSide, setIsOnLeftSide] = createSignal<boolean>(true);
  const [operator, setOperator] = createSignal<operator | null>(null);
  const [history, setHistory] = createSignal<string | null>(null);

  function numberInput(num: number) {
    if (isOnLeftSide()) {
      const newNum = leftSide() ? leftSide()! * 10 + num : num;
      if (newNum <= 9999) {
        setLeftSide(newNum);
      }
    }
  }

  function operatorInput(operator: operator) {}

  return (
    <main class="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-[#807ECE] to-[#8E7ECE] text-white">
      <div class="w-full max-w-sm rounded-3xl mx-auto drop-shadow-lg bg-[#2D2A37] bg-gradient-to-t from-[rgba(0,0,0,0.05)] to-[rgba(255,255,255,0.05)] p-12 grid gap-10 shadow-inner shadow-white/10">
        <div class="grid gap-4 px-4">
          <div class="flex justify-end text-[#6B6B6B] text-lg">1 + 1</div>
          <div class="flex justify-between items-center h-16">
            <div class="text-[#6B6B6B] text-2xl">=</div>
            <div class="text-4xl">{leftSide()}</div>
          </div>
        </div>
        <div class="grid grid-cols-4 gap-4">
          <Button>CE</Button>
          <Button>C</Button>
          <Button>%</Button>
          <Button type="right">÷</Button>

          <Button onClick={() => numberInput(7)}>7</Button>
          <Button onClick={() => numberInput(8)}>8</Button>
          <Button onClick={() => numberInput(9)}>9</Button>
          <Button type="right">
            <Icon path={xMark} class="w-6 h-6 flex justify-center mx-auto" />
          </Button>

          <Button onClick={() => numberInput(4)}>4</Button>
          <Button onClick={() => numberInput(5)}>5</Button>
          <Button onClick={() => numberInput(6)}>6</Button>
          <Button type="right">
            <Icon path={minus} class="w-6 h-6 flex justify-center mx-auto" />
          </Button>

          <Button onClick={() => numberInput(1)}>1</Button>
          <Button onClick={() => numberInput(2)}>2</Button>
          <Button onClick={() => numberInput(3)}>3</Button>
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
