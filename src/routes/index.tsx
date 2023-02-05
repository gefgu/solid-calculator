import Button from "~/components/Button";
import { Icon } from "solid-heroicons";
import { minus, plus, xMark } from "solid-heroicons/solid";
import { createSignal } from "solid-js";

type operator = "multiply" | "divide" | "plus" | "minus" | "percentage";

interface history {
  leftSide: number;
  rightSide: number;
  operator: operator;
}

export default function CalculatorPage() {
  const [leftSide, setLeftSide] = createSignal<number | null>(null);
  const [rightSide, setRightSide] = createSignal<number | null>(null);
  const [isOnLeftSide, setIsOnLeftSide] = createSignal<boolean>(true);
  const [operator, setOperator] = createSignal<operator | null>(null);
  const [history, setHistory] = createSignal<history | null>(null);

  function numberInput(num: number) {
    const left = leftSide();
    const right = rightSide();

    if (left && left >= 999999) {
      clearAll();
      return;
    }

    if (isOnLeftSide()) {
      const newNum = left ? left! * 10 + num : num;
      if (newNum <= 9999) {
        setLeftSide(newNum);
      }
    } else {
      const newNum = right ? right! * 10 + num : num;
      if (newNum <= 9999) {
        setRightSide(newNum);
      }
    }
  }

  function operatorInput(operator: operator) {
    const left = leftSide();
    if (left === null) return;

    if (left && left >= 999999) {
      clearAll();
      return;
    }

    if (rightSide() === null) {
      setOperator(operator);
      setIsOnLeftSide(false);
    } else {
      getResult();
      setOperator(operator);
      setIsOnLeftSide(false);
    }
  }

  function getResult() {
    if (leftSide() === null || operator() === null || rightSide() === null)
      return;

    let result;
    switch (operator()) {
      case "multiply":
        result = leftSide()! * rightSide()!;
        break;
      case "divide":
        result = +(leftSide()! / rightSide()!).toFixed(2);
        break;
      case "plus":
        result = leftSide()! + rightSide()!;
        break;
      case "minus":
        result = leftSide()! - rightSide()!;
        break;
      case "percentage":
        result = +((leftSide()! / 100) * rightSide()!).toFixed(2);
        break;
    }
    setHistory({
      leftSide: leftSide(),
      operator: operator(),
      rightSide: rightSide(),
    } as history);
    setLeftSide(result ?? null);
    setOperator(null);
    setRightSide(null);
    setIsOnLeftSide(true);
  }

  function getOperatorComponent(
    operator: operator | null,
    shouldBeSmall?: boolean
  ) {
    if (operator === null) return;

    switch (operator) {
      case "multiply":
        return (
          <Icon path={xMark} class={shouldBeSmall ? "w-5 h-5" : "w-6 h-6"} />
        );
      case "divide":
        return "÷";
      case "minus":
        return (
          <Icon path={minus} class={shouldBeSmall ? "w-5 h-5" : "w-6 h-6"} />
        );
      case "plus":
        return (
          <Icon path={plus} class={shouldBeSmall ? "w-5 h-5" : "w-6 h-6"} />
        );
      case "percentage":
        return "%";
    }
  }

  function clear() {
    setIsOnLeftSide(true);
    setLeftSide(null);
    setRightSide(null);
    setOperator(null);
  }

  function clearAll() {
    clear();
    setHistory(null);
  }

  return (
    <main class="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-[#807ECE] to-[#8E7ECE] text-white">
      <div class="w-full max-w-sm rounded-3xl mx-auto drop-shadow-lg bg-[#2D2A37] bg-gradient-to-t from-[rgba(0,0,0,0.05)] to-[rgba(255,255,255,0.05)] p-12 grid gap-10 shadow-inner shadow-white/10">
        <div class="grid px-4">
          <div class="flex justify-end items-center text-[#6B6B6B] text-lg h-7">
            {history()?.leftSide}
            {getOperatorComponent(history()?.operator ?? null, true)}
            {history()?.rightSide}
          </div>
          <div class="flex justify-between items-center h-16">
            <div class="text-[#6B6B6B] text-2xl">{history() && "="}</div>
            <div class="text-4xl flex items-center overflow-auto">
              {leftSide()}
              {getOperatorComponent(operator())}
              {rightSide()}
            </div>
          </div>
        </div>
        <div class="grid grid-cols-4 gap-4">
          <Button onClick={() => clearAll()}>CE</Button>
          <Button onClick={() => clear()}>C</Button>
          <Button onClick={() => operatorInput("percentage")}>%</Button>
          <Button type="right" onClick={() => operatorInput("divide")}>
            ÷
          </Button>

          <Button onClick={() => numberInput(7)}>7</Button>
          <Button onClick={() => numberInput(8)}>8</Button>
          <Button onClick={() => numberInput(9)}>9</Button>
          <Button type="right" onClick={() => operatorInput("multiply")}>
            <Icon path={xMark} class="w-6 h-6 flex justify-center mx-auto" />
          </Button>

          <Button onClick={() => numberInput(4)}>4</Button>
          <Button onClick={() => numberInput(5)}>5</Button>
          <Button onClick={() => numberInput(6)}>6</Button>
          <Button type="right" onClick={() => operatorInput("minus")}>
            <Icon path={minus} class="w-6 h-6 flex justify-center mx-auto" />
          </Button>

          <Button onClick={() => numberInput(1)}>1</Button>
          <Button onClick={() => numberInput(2)}>2</Button>
          <Button onClick={() => numberInput(3)}>3</Button>
          <Button type="right" onClick={() => operatorInput("plus")}>
            <Icon path={plus} class="w-6 h-6 flex justify-center mx-auto" />
          </Button>

          <Button>±</Button>
          <Button onClick={() => numberInput(0)}>0</Button>
          <Button>,</Button>
          <Button type="equal" onClick={() => getResult()}>
            =
          </Button>
        </div>
      </div>
    </main>
  );
}
