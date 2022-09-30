// Ui Component
import CarCard from "../ui/CarCard";

export default function Cars() {
  return (
    <section className="h-screen bg-transGrey w-screen" id="cars">
      <div className="flex gap-[20px] items-center justify-center">
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </div>
    </section>
  );
}
