import Link from "next/link";

function Tempo(props) {
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString();

  return (
    <html lang="pt-Br">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Data e hora</title>
      </head>
      <body>
        <h1>Data e hora</h1>

        <div>
          <div>{dynamicDateString} (dinâmico)</div>
          <div>{props.staticDateString} (estático)</div>
        </div>
        <Link href="index">
          <a>Acessar página Home</a>
        </Link>
        <br></br>
        <Link href="sobre">
          <a>Acessar página Sobre</a>
        </Link>

        <p>Alguém escorregou o primer</p>
      </body>
    </html>
  );
}

export async function getStaticProps() {
  console.log('> Passando pelo getStaticProps()')
  /* console.log('> Adicionando delay de 5 segundos') */

/*   await dalay(5000) */

  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();

  return {
    props: {
      staticDateString,
    },
    revalidate: 1
  };
}

/* const dalay = ms => Promise(resolve => setTimeout(resolve, ms));
 */

export default Tempo;
