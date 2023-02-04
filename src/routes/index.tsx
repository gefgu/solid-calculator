export default function CalculatorPage() {
  return (
    <main class="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-[#807ECE] to-[#8E7ECE] text-white">
      <div class="w-full max-w-sm h-96 rounded-3xl mx-auto shadow-2xl bg-[#2D2A37] p-12">
        <div class="grid gap-4">
          <div class="flex justify-end text-[#6B6B6B] text-lg">1 + 1</div>
          <div class="flex justify-between items-center">
            <div class="text-[#6B6B6B] text-xl">=</div>
            <div class="text-3xl">2</div>
          </div>
        </div>
        <div>{/* bottom */}</div>
      </div>
    </main>
  );
}
