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

        <div>{dynamicDateString} (dinâmico)</div>
        <div>{props.dynamicDateString} (estático)</div>

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


export function getStaticProps(){
  const staticDate = new Date();

  const staticDateString = StaticDate.toGMTString();

  return{

    props: { 
      staticDateString
    }
    
  }

}


export default Tempo;
