import Image from "next/image";
import Profile from "@/components/profile";
import RandomButton from "@/components/randomButtom";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">

      <div className="flex items-center gap-2">
        <h1>Numero Gerado:</h1>
        <p id="numero"> 0</p>
      </div>

      <div className="mt-4">
        <RandomButton />
      </div>

    </div>
  );
}
