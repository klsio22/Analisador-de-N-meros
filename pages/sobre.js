import Link from "next/link";

function Sobre() {
  return (
    <html lang="pt-Br">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sobre</title>
      </head>
      <body>
        <h1>Sobre</h1>
        <Link href="index">
          <a >Acessar página Home</a>
        </Link>
        <br></br>
        <Link href="tempo">
          <a>Saber Data e hora</a>
        </Link>

        <p>Alguém escorregou o primer</p>
      </body>
    </html>
  );
}

export default Sobre;
