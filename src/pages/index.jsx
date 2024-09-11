import ContactUs from "@/components/page/ContactUs";
import HomePage from "@/components/page/HomePage";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <HomePage />
      <ContactUs />
    </div>
  );
}
