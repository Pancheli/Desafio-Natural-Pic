import { useContext } from "react";
import Context from "../Context";

export default function Favoritos() {
  const { fotos, setFotos } = useContext(Context);
  const num_fotos_favoritas = fotos.filter((foto) => foto.favorito).length;

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {num_fotos_favoritas == 0 ? (
          <p> No tiene fotos marcadas como favoritas</p>
        ) : (
          fotos
            .filter((foto) => foto.favorito)
            .map((foto, i) => <img src={foto.src} alt="" key={i} />)
        )}
      </div>
    </div>
  );
}
