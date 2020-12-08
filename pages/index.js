import Link from "next/link";


function HomePage() {
  return (
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home</title>
      </head>
      <body>
        <h1>Home</h1>

        <Link href="sobre.js">
          <a >Acessar página Sobre</a>
        </Link>
        <p>As Aparências enganam</p>
      </body>
    </html>
  );
}

export default HomePage;
