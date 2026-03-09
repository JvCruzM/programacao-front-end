export default function Profile() {
    return (
        <div style={{ textAlign: "center" }}>
            <img
            src="/profile.jpg"
            alt="Minha foto"
            width={200}
            style={{
                borderRadius: "20%",
                display: "block",
                margin: "auto"
            }}
            />

            <h2 className="text-xl font-semibold mt-3 mb-3">João Vitor</h2>

            <p>Meu nome é João Vitor, sou estudante na unicap no curso de Sistemas para Internet.<br/> Uma das minhas maiores paixões são computadores e jogos, tendo uma curiosidade sobre tudo relacionado ao tema.<br/> Espero um dia conseguir um bom trabalho e construir uma família com minha namorada.
            </p>
        </div>
    );
}