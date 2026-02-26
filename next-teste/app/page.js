import Image from "next/image";
import Profile from "@/components/profile";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      Sempre que precisar de um apoio, pode contar comigo.
          <Profile />
          Exemplo de expressão: {5 ** 3}
    </div>
  );
}
