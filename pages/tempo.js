function Tempo() {
  const dynamicDate = new Date();

  const dynamicDateString = dynamicDate.toGMTString();

  return (
    <html lang="pt-Br">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sobre</title>
      </head>
      <body>
        <h1>Sobre</h1>

        <div>{dynamicDateString} (dinamico)</div>
        <Link href="index">
          <a>Acessar página Home</a>
        </Link>

        <Link href="sobre">
          <a>Acessar página Sobre</a>
        </Link>

        <p>Alguém escorregou o primer</p>
      </body>
    </html>
  );
}

export default Tempo;
