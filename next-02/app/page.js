import Profile from "../components/profile";

export default function Home() {
  return (
    <main style={{textAlign: "center", marginTop: "40px"}}>
      <h1 className="text-3xl font-bold mb-6">Site criado para a disciplina Programação Front-End</h1>

      <Profile/>
    </main>
  );
}
